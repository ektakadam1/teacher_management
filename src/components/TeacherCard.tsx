'use client';
import React from 'react';
import { Mail, BookOpen, Users, Award, Eye, Edit, Trash2 } from 'lucide-react';
import { Teacher } from '../types/teacher';
import { getInitials, getStatusColor } from '../utils/helpers';

const TeacherCard: React.FC<{ teacher: Teacher }> = ({ teacher }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all hover:scale-105">
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
          {getInitials(teacher.name)}
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">{teacher.name}</h3>
          <p className="text-sm text-gray-600">{teacher.department}</p>
        </div>
      </div>
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(teacher.status)}`}>
        {teacher.status.replace('-', ' ')}
      </span>
    </div>

    <div className="space-y-2 mb-4">
      <div className="flex items-center text-sm text-gray-600">
        <Mail className="w-4 h-4 mr-2" />
        {teacher.email}
      </div>
      <div className="flex items-center text-sm text-gray-600">
        <BookOpen className="w-4 h-4 mr-2" />
        {teacher.subject}
      </div>
      <div className="flex items-center text-sm text-gray-600">
        <Users className="w-4 h-4 mr-2" />
        {teacher.studentsCount} students
      </div>
    </div>

    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
      <div className="flex items-center text-sm text-gray-600">
        <Award className="w-4 h-4 mr-1" />
        {teacher.rating}/5.0
      </div>
      <div className="flex space-x-2">
        <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
          <Eye className="w-4 h-4" />
        </button>
        <button className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
          <Edit className="w-4 h-4" />
        </button>
        <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  </div>
);

export default TeacherCard;
