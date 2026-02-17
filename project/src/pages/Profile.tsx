import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { User } from '../types';

export const Profile = () => {
  const { user, login } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    bio: user?.bio || '',
    subjects: user?.subjects || [],
    hourlyRate: user?.hourlyRate || '',
  });

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 flex items-center justify-center">
        <p className="text-gray-500">Please log in to view your profile.</p>
      </div>
    );
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'subjects' ? value.split(',').map(s => s.trim()) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const updatedUsers = users.map((u: User) =>
      u.id === user.id ? { ...u, ...formData } : u
    );
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    login({ ...user, ...formData });
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-md border border-gray-200 rounded-2xl">
          <div className="px-6 py-6 sm:p-8">
            {isEditing ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-400 focus:border-indigo-400"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-400 focus:border-indigo-400"
                  />
                </div>

                {user.role === 'tutor' && (
                  <>
                    <div>
                      <label htmlFor="subjects" className="block text-sm font-medium text-gray-700">
                        Subjects (comma-separated)
                      </label>
                      <input
                        type="text"
                        name="subjects"
                        id="subjects"
                        value={formData.subjects.join(', ')}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-400 focus:border-indigo-400"
                      />
                    </div>

                    <div>
                      <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                        Bio
                      </label>
                      <textarea
                        name="bio"
                        id="bio"
                        rows={3}
                        value={formData.bio}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-400 focus:border-indigo-400"
                      />
                    </div>

                    <div>
                      <label htmlFor="hourlyRate" className="block text-sm font-medium text-gray-700">
                        Hourly Rate (₹)
                      </label>
                      <input
                        type="number"
                        name="hourlyRate"
                        id="hourlyRate"
                        value={formData.hourlyRate}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-400 focus:border-indigo-400"
                      />
                    </div>
                  </>
                )}

                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 transition"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            ) : (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="h-16 w-16 rounded-full bg-indigo-50 flex items-center justify-center">
                      <span className="text-2xl font-bold text-indigo-500">
                        {user.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
                      <p className="text-gray-500">{user.email}</p>
                      <p className="text-indigo-600 capitalize">{user.role}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsEditing(true)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
                  >
                    Edit Profile
                  </button>
                </div>

                {user.role === 'tutor' && (
                  <>
                    <div className="mt-6">
                      <h3 className="text-lg font-medium text-gray-900">Subjects</h3>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {user.subjects?.map((subject, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6">
                      <h3 className="text-lg font-medium text-gray-900">Bio</h3>
                      <p className="mt-2 text-gray-600">{user.bio}</p>
                    </div>

                    <div className="mt-6">
                      <h3 className="text-lg font-medium text-gray-900">Hourly Rate</h3>
                      <p className="mt-2 text-gray-600">₹{user.hourlyRate}/hour</p>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
