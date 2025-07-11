export interface Teacher {
  id: string;
  name: string;
  email: string;
  phone: string;
  department: string;
  subject: string;
  experience: number;
  status: 'active' | 'inactive' | 'on-leave';
  avatar: string;
  joinDate: string;
  studentsCount: number;
  rating: number;
}

export interface Stats {
  totalTeachers: number;
  activeTeachers: number;
  onLeave: number;
  newThisMonth: number;
}