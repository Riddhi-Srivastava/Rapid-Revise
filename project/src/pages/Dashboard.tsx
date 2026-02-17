import React from 'react';
import { Calendar, Clock, Star, Activity } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const Dashboard = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = React.useState(() => {
    const savedBookings = localStorage.getItem('bookings');
    return savedBookings ? JSON.parse(savedBookings) : [];
  });

  const userBookings = bookings.filter((booking: any) => 
    booking.studentId === user?.id || booking.tutorId === user?.id
  );

  const upcomingSessions = userBookings.filter((booking: any) => 
    booking.status === 'pending' || booking.status === 'confirmed'
  );

  const completedSessions = userBookings.filter((booking: any) => 
    booking.status === 'completed'
  );

  const totalHours = completedSessions.length * 1; // Assuming 1 hour per session
  const averageRating = 4.8; // Placeholder for now

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-gray-600">Track your learning progress</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Upcoming Sessions</p>
                <p className="text-2xl font-bold text-gray-900">{upcomingSessions.length}</p>
              </div>
              <Calendar className="h-8 w-8 text-indigo-600" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Sessions</p>
                <p className="text-2xl font-bold text-gray-900">{completedSessions.length}</p>
              </div>
              <Activity className="h-8 w-8 text-indigo-600" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Hours Learned</p>
                <p className="text-2xl font-bold text-gray-900">{totalHours}</p>
              </div>
              <Clock className="h-8 w-8 text-indigo-600" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Rating</p>
                <p className="text-2xl font-bold text-gray-900">{averageRating}</p>
              </div>
              <Star className="h-8 w-8 text-indigo-600" />
            </div>
          </div>
        </div>

        {/* Upcoming Sessions */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Upcoming Sessions</h2>
            {upcomingSessions.length > 0 ? (
              <div className="space-y-4">
                {upcomingSessions.map((session: any) => (
                  <div key={session.id} className="flex items-center justify-between border-b pb-4">
                    <div>
                      <p className="font-medium text-gray-900">{session.subject}</p>
                      <p className="text-sm text-gray-500">{session.date} at {session.time}</p>
                    </div>
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
                      {session.status}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No upcoming sessions</p>
            )}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
            {completedSessions.length > 0 ? (
              <div className="space-y-4">
                {completedSessions.map((session: any) => (
                  <div key={session.id} className="flex items-center justify-between border-b pb-4">
                    <div>
                      <p className="font-medium text-gray-900">{session.subject}</p>
                      <p className="text-sm text-gray-500">{session.date} at {session.time}</p>
                    </div>
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                      completed
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No completed sessions yet</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};