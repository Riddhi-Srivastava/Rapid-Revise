export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'tutor';
  subjects?: string[];
  bio?: string;
  hourlyRate?: number;
  location?: string;
  profileImage?: string;
}

export interface Booking {
  id: string;
  studentId: string;
  tutorId: string;
  subject: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
}