import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search, Calendar, Star, BookOpen, Users, Award,
  CheckCircle, HeartHandshake, Lightbulb, Rocket, Puzzle, Globe
} from 'lucide-react';

export const HowItWorks = () => {
  const navigate = useNavigate();

  const steps = [
    {
      icon: <Search className="w-10 h-10 text-indigo-400 mb-3" />,
      title: '1. Find Your Tutor',
      desc: 'Browse through our qualified tutors and pick the one that suits your needs.',
    },
    {
      icon: <Calendar className="w-10 h-10 text-indigo-400 mb-3" />,
      title: '2. Schedule a Session',
      desc: 'Pick a convenient time slot that works for you and your tutor.',
    },
    {
      icon: <BookOpen className="w-10 h-10 text-indigo-400 mb-3" />,
      title: '3. Start Learning',
      desc: 'Begin your 1-on-1 personalized session with expert guidance.',
    },
    {
      icon: <Users className="w-10 h-10 text-indigo-400 mb-3" />,
      title: '4. Interactive Sessions',
      desc: 'Engage in sessions that promote deep understanding and retention.',
    },
    {
      icon: <Star className="w-10 h-10 text-indigo-400 mb-3" />,
      title: '5. Track Progress',
      desc: 'Receive session-wise feedback and monitor your academic growth.',
    },
    {
      icon: <Award className="w-10 h-10 text-indigo-400 mb-3" />,
      title: '6. Achieve Goals',
      desc: 'Meet your academic targets with continuous support and motivation.',
    },
  ];

  const features = [
    {
      icon: <CheckCircle className="w-8 h-8 text-green-500" />,
      title: 'Fast Learning',
      desc: 'Our educators are thoroughly screened to ensure top-quality guidance.',
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-pink-500" />,
      title: 'Personalized Approach',
      desc: 'We match learning styles and paces to maximize understanding.',
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
      title: 'Face-to-Face Interaction',
      desc: 'Interactive Session  , real-time collaboration, and more.',
    },
  ];

  const changes = [
    {
      icon: <Rocket className="w-8 h-8 text-blue-500" />,
      title: 'Faster Learning',
      desc: 'Accelerated methods to master concepts quickly and effectively.',
    },
    {
      icon: <Puzzle className="w-8 h-8 text-orange-500" />,
      title: 'Smart Personalization',
      desc: 'AI-backed learning paths that adapt to your strengths and weaknesses.',
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: 'Global Reach',
      desc: 'Connect with expert tutors from around the world, anytime, anywhere.',
    },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat py-20 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: "url('/images/light-pattern-bg.png')",
      }}
    >
      <div className="backdrop-blur-sm bg-white/80 rounded-2xl p-10">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              How Rapid Revise Express Works
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Start your learning journey in a few simple steps with expert tutors and flexible sessions.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-indigo-50 border border-indigo-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {step.icon}
                <h3 className="text-xl font-semibold text-indigo-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Why Choose Us */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-indigo-800 mb-6">Why Choose Us?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((f, idx) => (
                <div key={idx} className="bg-indigo-50 p-6 rounded-2xl text-left shadow">
                  {f.icon}
                  <h4 className="mt-4 text-lg font-semibold text-indigo-800">{f.title}</h4>
                  <p className="text-gray-600 mt-2 text-sm">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* What its  Changing */}
          <div className="mb-24">
            <h2 className="text-center text-3xl font-bold text-indigo-800 mb-4">What its Changing?</h2>
            <p className="text-center text-gray-700 text-lg mb-10 max-w-3xl mx-auto">
              It’s a revolution in the education industry — empowering students with smarter tools, improved access, and enhanced learning experiences.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {changes.map((change, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow text-left border border-gray-100">
                  {change.icon}
                  <h4 className="text-lg font-semibold text-indigo-700 mt-4">{change.title}</h4>
                  <p className="text-gray-600 text-sm mt-2">{change.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-indigo-100 p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold text-indigo-800 mb-4">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Join thousands of students already improving with Rapid Revise Express.
            </p>
            <button
              onClick={() => navigate('/register')}
              className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors duration-300"
            >
              Get Started Now
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
