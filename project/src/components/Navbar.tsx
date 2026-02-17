import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Book } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout, isAuthenticated } = useAuth();

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <Book className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Rapid Revise Express</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <button 
              onClick={() => navigate('/how-it-works')}
              className="text-gray-600 hover:text-gray-900"
            >
              How it Works
            </button>
            
            <button 
              onClick={() => navigate('/find-tutor')}
              className="text-gray-600 hover:text-gray-900"
            >
              Find Tutors
            </button>
            
            {isAuthenticated ? (
              <>
                <button 
                  onClick={() => navigate('/dashboard')}
                  className="text-gray-600 hover:text-gray-900"
                >
                  Dashboard
                </button>
                <button 
                  onClick={() => navigate('/profile')}
                  className="text-gray-600 hover:text-gray-900"
                >
                  {user?.name}
                </button>
                <button
                  onClick={logout}
                  className="text-gray-600 hover:text-gray-900"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => navigate('/login')}
                  className="flex items-center text-gray-600 hover:text-gray-900"
                >
                  <span>Login</span>
                </button>
                <button
                  onClick={() => navigate('/register')}
                  className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors"
                >
                  Register
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};