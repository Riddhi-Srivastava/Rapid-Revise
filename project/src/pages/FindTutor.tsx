import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../types';

export const FindTutor = () => {
  const [tutors, setTutors] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const tutorsList = users.filter((user: User) => user.role === 'tutor');
    setTutors(tutorsList);
  }, []);

  const filteredTutors = tutors.filter(tutor => 
    tutor.subjects?.some(subject => 
      subject.toLowerCase().includes(searchQuery.toLowerCase())
    ) ||
    tutor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-blue-800 mb-10 text-center">Find Your Perfect Tutor</h1>

        <div className="mb-12 flex justify-center">
          <input
            type="text"
            placeholder="Search by subject or tutor name..."
            className="w-full max-w-2xl px-6 py-3 border border-gray-300 rounded-full shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTutors.map((tutor) => (
            <div
              key={tutor.id}
              className="bg-white rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
            >
              <h3 className="text-2xl font-semibold text-blue-800 mb-2">{tutor.name}</h3>
              <p className="text-gray-700 text-base mb-4">{tutor.bio}</p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-800">Subjects:</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {tutor.subjects?.map((subject, index) => (
                    <span
                      key={index}
                      className="inline-block px-3 py-1 rounded-full text-xs bg-blue-100 text-blue-800 font-medium"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-blue-600 font-bold text-lg mb-4">
                ₹{tutor.hourlyRate} / hour
              </div>

              <button
                onClick={() => navigate(`/book/${tutor.id}`)}
                className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition duration-300 font-medium"
              >
                Book a Session
              </button>
            </div>
          ))}
        </div>

        {filteredTutors.length === 0 && (
          <div className="text-center mt-16">
            <p className="text-gray-500 text-lg">No tutors found matching your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};
