'use client';

import React, { useState } from 'react';
import {
  Search,
  Filter,
  Plus,
  Edit,
  Trash2,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Users,
  BookOpen,
  Award,
  MoreVertical,
  Eye,
  Download,
  Settings
} from 'lucide-react';
import TeacherCard from '../components/TeacherCard';
import TeacherTable from '../components/TeacherTable';
import StatCard from '../components/StatCard';
import { Teacher } from '../types/teacher';
import { teachers, departments } from '../constants/teachers';
import { getStatusColor } from '../utils/helpers';

const TeacherManagementInterface: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');
  const [view, setView] = useState<'grid' | 'table'>('grid');

  const stats = {
    totalTeachers: 156,
    activeTeachers: 142,
    onLeave: 8,
    newThisMonth: 12
  };

  const filteredTeachers = teachers.filter(teacher => {
    const matchesSearch = teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || teacher.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-200 via-blue-200 to-purple-200 font-sans">
      <header className="bg-yellow-50 shadow-md border-b border-black-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className='overflow-hidden'>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent tracking-tight leading-normal">
                 Teacher Management</h1>
            <p className="text-sm lg:text-lg md:text-md text-black-500 mt-1 lg:ml-1">Monitor, manage, and celebrate your teaching staff</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition">
              <Settings className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition">
              <Download className="w-5 h-5" />
            </button>
            <button className="bg-indigo-600 text-white px-5 py-2 rounded-xl shadow hover:bg-indigo-700 transition flex items-center gap-2">
              <Plus className="w-4 h-4" />
              <span className="font-medium">Add Teacher</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <StatCard title="Total Teachers" value={stats.totalTeachers} icon={<Users className="w-6 h-6 text-indigo-600" />} color="bg-indigo-50" />
          <StatCard title="Active Teachers" value={stats.activeTeachers} icon={<Users className="w-6 h-6 text-green-600" />} color="bg-green-50" />
          <StatCard title="On Leave" value={stats.onLeave} icon={<Calendar className="w-6 h-6 text-yellow-600" />} color="bg-yellow-50" />
          <StatCard title="New This Month" value={stats.newThisMonth} icon={<Plus className="w-6 h-6 text-purple-600" />} color="bg-purple-50" />
        </div>

        <div className="bg-yellow-50  border border-black-100 rounded-xl shadow-sm p-6 mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search teachers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              >
                {departments.map(dept => (
                  <option key={dept} value={dept}>
                    {dept === 'all' ? 'All Departments' : dept}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-3">
              <button className="p-2 text-black-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition">
                <Filter className="w-4 h-4" />
              </button>
              <div className="flex bg-black-100 rounded-lg p-1">
                <button
                  onClick={() => setView('grid')}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                    view === 'grid' ? 'bg-white text-indigo-700 shadow-sm' : 'text-black-600 hover:text-indigo-700'
                  }`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setView('table')}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                    view === 'table' ? 'bg-white text-indigo-700 shadow-sm' : 'text-black-600 hover:text-indigo-700'
                  }`}
                >
                  Table
                </button>
              </div>
            </div>
          </div>
        </div>

        {view === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTeachers.map(teacher => (
              <TeacherCard key={teacher.id} teacher={teacher} />
            ))}
          </div>
        ) : (
          <TeacherTable teachers={filteredTeachers} />
        )}
      </main>
    </div>
  );
};

export default TeacherManagementInterface;
