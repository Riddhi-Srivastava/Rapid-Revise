import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const Register = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'student' as 'student' | 'tutor',
    subjects: [] as string[],
    bio: '',
    hourlyRate: '',
  });
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const newUser = {
      id: Math.random().toString(36).substr(2, 9),
      name: formData.name,
      email: formData.email,
      role: formData.role,
      subjects: formData.subjects,
      bio: formData.bio,
      hourlyRate: formData.role === 'tutor' ? parseFloat(formData.hourlyRate) : undefined,
    };

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    login(newUser);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-100 via-purple-50 to-pink-100 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <h2 className="text-4xl font-bold text-indigo-700">Join Rapid Revise Express</h2>
        <p className="mt-2 text-sm text-gray-600">Sign up to start learning or teaching today!</p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-lg">
        <div className="bg-white shadow-xl rounded-2xl px-8 py-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md">
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                required
                className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-pink-400 focus:border-pink-400"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email address</label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-pink-400 focus:border-pink-400"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                required
                className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-pink-400 focus:border-pink-400"
                value={formData.password}
                onChange={handleChange}
              />
              <p className="text-xs text-gray-500 mt-1">Must be at least 8 characters</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                required
                className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-pink-400 focus:border-pink-400"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">I want to:</label>
              <select
                name="role"
                className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-pink-400 focus:border-pink-400"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="student">Learn - I'm a student</option>
                <option value="tutor">Teach - I'm a tutor</option>
              </select>
            </div>

            {formData.role === 'tutor' && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Subjects</label>
                  <input
                    type="text"
                    name="subjects"
                    placeholder="e.g., Math, Physics"
                    className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-pink-400 focus:border-pink-400"
                    value={formData.subjects.join(', ')}
                    onChange={(e) =>
                      setFormData(prev => ({
                        ...prev,
                        subjects: e.target.value.split(',').map(s => s.trim()),
                      }))
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Bio</label>
                  <textarea
                    name="bio"
                    rows={3}
                    className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-pink-400 focus:border-pink-400"
                    value={formData.bio}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Hourly Rate (₹)</label>
                  <input
                    type="number"
                    name="hourlyRate"
                    min="0"
                    className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-pink-400 focus:border-pink-400"
                    value={formData.hourlyRate}
                    onChange={handleChange}
                  />
                </div>
              </>
            )}

            <div>
            <button
  type="submit"
  className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all"
>
  Register
</button>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
