import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import Footer from './pages/footer'; // Correct path to Footer ✅ Import Footer

import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { FindTutor } from './pages/FindTutor';
import { Profile } from './pages/Profile';
import { Features } from './pages/Features';
import { HowItWorks } from './pages/HowItWorks';
import { BookSession } from './pages/BookSession';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Navbar />
          
          <div className="flex-grow">
            <Routes>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/find-tutor" element={<FindTutor />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/features" element={<Features />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/book/:tutorId" element={<BookSession />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </div>

          <Footer /> {/* ✅ Placed outside <Routes>, appears on every page */}
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;