import { Teacher, Stats } from '../types/teacher';

export const stats: Stats = {
  totalTeachers: 156,
  activeTeachers: 142,
  onLeave: 8,
  newThisMonth: 12
};

export const teachers: Teacher[] =  [
    {
      id: '1',
      name: 'Dr. Sara Sawant',
      email: 'sara.sawant@school.edu',
      phone: '+1 (555) 123-4567',
      department: 'Mathematics',
      subject: 'Advanced Calculus',
      experience: 8,
      status: 'active',
      avatar: '/api/placeholder/64/64',
      joinDate: '2019-08-15',
      studentsCount: 125,
      rating: 4.8
    },
    {
      id: '2',
      name: 'Prof. Hemant Patil',
      email: 'hemantpatil@school.edu',
      phone: '+1 (555) 987-6543',
      department: 'Computer Science',
      subject: 'Data Structures',
      experience: 12,
      status: 'active',
      avatar: '/api/placeholder/64/64',
      joinDate: '2015-01-20',
      studentsCount: 98,
      rating: 4.9
    },
    {
      id: '3',
      name: 'Dr. Akash Sharma',
      email: 'akash.sharma@school.edu',
      phone: '+1 (555) 456-7890',
      department: 'Physics',
      subject: 'Quantum Mechanics',
      experience: 15,
      status: 'on-leave',
      avatar: '/api/placeholder/64/64',
      joinDate: '2012-09-10',
      studentsCount: 76,
      rating: 4.7
    },
    {
      id: '4',
      name: 'Prof. Sarang Joshi',
      email: 'sarang.joshi@school.edu',
      phone: '+1 (555) 321-9876',
      department: 'Chemistry',
      subject: 'Organic Chemistry',
      experience: 10,
      status: 'active',
      avatar: '/api/placeholder/64/64',
      joinDate: '2017-03-05',
      studentsCount: 110,
      rating: 4.6
    },
    {
      id: '5',
      name: 'Dr. Leena Kadam',
      email: 'leena.kadam@school.edu',
      phone: '+1 (555) 654-3210',
      department: 'Biology',
      subject: 'Molecular Biology',
      experience: 6,
      status: 'active',
      avatar: '/api/placeholder/64/64',
      joinDate: '2021-07-12',
      studentsCount: 87,
      rating: 4.5
    },
    {
      id: '6',
      name: 'Prof. Kiran Kadam ',
      email: 'kiran.kadam@school.edu',
      phone: '+1 (555) 789-0123',
      department: 'History',
      subject: 'World History',
      experience: 20,
      status: 'active',
      avatar: '/api/placeholder/64/64',
      joinDate: '2008-11-30',
      studentsCount: 134,
      rating: 4.8
    }
  ];

export const departments = [
  'all',
  'Mathematics',
  'Computer Science',
  'Physics',
  'Chemistry',
  'Biology',
  'History'
];