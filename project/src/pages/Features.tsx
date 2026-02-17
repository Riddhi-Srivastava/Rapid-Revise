import React from 'react';

export const Features = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Platform Features
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need to succeed in your learning journey
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Tutors</h3>
            <p className="text-gray-600">Connect with qualified and experienced tutors in your area.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Flexible Scheduling</h3>
            <p className="text-gray-600">Book sessions that fit your schedule and learning pace.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Secure Payments</h3>
            <p className="text-gray-600">Safe and easy payment processing for all sessions.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Progress Tracking</h3>
            <p className="text-gray-600">Monitor your learning progress and achievements.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Verified Reviews</h3>
            <p className="text-gray-600">Read authentic feedback from other students.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Subject Variety</h3>
            <p className="text-gray-600">Find tutors for any subject you need help with.</p>
          </div>
        </div>
      </div>
    </div>
  );
};