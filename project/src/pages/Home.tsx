import React from 'react';
import { GraduationCap, Users, Calendar, Award } from 'lucide-react';

export function Home() {
  return (
    <div className="bg-gradient-to-br from-[#e6f6f4] via-white to-[#ccf2ef] min-h-screen py-16">
      <div className="container mx-auto px-6">

        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-extrabold text-[#0a2b2a] mb-6 leading-tight">
            Welcome to <span className="text-[#00bfa6]">Rapid Revise Express</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Find your perfect tutor and experience personalized, effective learning that brings results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
          {[
            {
              icon: <GraduationCap className="w-12 h-12 text-[#00bfa6] mb-4" />,
              title: 'Expert Tutors',
              desc: 'Learn from qualified and experienced tutors in your field.',
              bg: 'bg-[#e3f9f7]',
            },
            {
              icon: <Users className="w-12 h-12 text-[#00bfa6] mb-4" />,
              title: '1-on-1 Sessions',
              desc: 'Personalized attention and focused learning environment.',
              bg: 'bg-[#d7f6f2]',
            },
            {
              icon: <Calendar className="w-12 h-12 text-[#00bfa6] mb-4" />,
              title: 'Flexible Scheduling',
              desc: 'Book sessions at times that work best for you.',
              bg: 'bg-[#c5f2ed]',
            },
            {
              icon: <Award className="w-12 h-12 text-[#00bfa6] mb-4" />,
              title: 'Guaranteed Results',
              desc: 'Track your progress and achieve your academic goals.',
              bg: 'bg-[#b0eee9]',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className={`${feature.bg} p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center`}
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-[#d5f7f2] p-12 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold text-[#0a2b2a] mb-4">
            Ready to Start Learning with Rapid Revise Express?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Join thousands of students already boosting their academic performance with our expert-led sessions.
          </p>
          <a
            href="/find-tutor"
            className="inline-block bg-[#00bfa6] text-white px-10 py-3 rounded-full font-semibold hover:bg-[#009e8d] transition duration-300"
          >
            Find a Tutor Now
          </a>
        </div>
      </div>
    </div>
  );
}
