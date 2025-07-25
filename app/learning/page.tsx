
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';

export default function Learning() {
  const [selectedSystem, setSelectedSystem] = useState<'bp' | 'general' | null>(null);

  const courses = [
    {
      level: 'Beginner',
      description: 'Master the fundamentals of debate structure and basic argumentation',
      lessons: 8,
      quizzes: 2,
      color: 'green',
      icon: 'ri-seedling-line',
      bgColor: 'bg-green-600',
      hoverColor: 'hover:bg-green-700'
    },
    {
      level: 'Intermediate', 
      description: 'Develop advanced techniques for evidence analysis and rebuttal',
      lessons: 8,
      quizzes: 2,
      color: 'blue',
      icon: 'ri-plant-line',
      bgColor: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700'
    },
    {
      level: 'Advanced',
      description: 'Perfect your skills with complex strategies and tournament-level techniques',
      lessons: 8,
      quizzes: 2,
      color: 'purple',
      icon: 'ri-trophy-line',
      bgColor: 'bg-purple-600',
      hoverColor: 'hover:bg-purple-700'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header />
      
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Learning Center</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Choose your debate system and start your journey from beginner to advanced level mastery.
          </p>
        </div>

        {/* System Selection */}
        {!selectedSystem ? (
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div 
              onClick={() => setSelectedSystem('bp')}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all cursor-pointer border-2 border-transparent hover:border-red-500"
            >
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-government-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-white">British Parliamentary</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
                Learn the world&apos;s most popular competitive debate format with four-team dynamics and advanced strategies.
              </p>
              <div className="text-center">
                <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-3 py-1 rounded-full text-sm font-medium">
                  International Standard
                </span>
              </div>
            </div>

            <div 
              onClick={() => setSelectedSystem('general')}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all cursor-pointer border-2 border-transparent hover:border-blue-500"
            >
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-chat-3-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-white">General Basic System</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
                Master fundamental debate skills with the classic two-sided format and evidence-based reasoning.
              </p>
              <div className="text-center">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                  Foundation Level
                </span>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Selected System Header */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-8 shadow-lg transition-colors duration-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 ${selectedSystem === 'bp' ? 'bg-red-600' : 'bg-blue-600'} rounded-full flex items-center justify-center`}>
                    <i className={`${selectedSystem === 'bp' ? 'ri-government-line' : 'ri-chat-3-line'} text-xl text-white`}></i>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {selectedSystem === 'bp' ? 'British Parliamentary' : 'General Basic System'}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">Choose your learning level below</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedSystem(null)}
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors cursor-pointer"
                >
                  <i className="ri-arrow-left-line text-xl"></i>
                  <span className="ml-2">Change System</span>
                </button>
              </div>
            </div>

            {/* Course Levels */}
            <div className="grid md:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className={`w-16 h-16 ${course.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <i className={`${course.icon} text-2xl text-white`}></i>
                  </div>
                  
                  <h3 className="text-xl font-bold text-center mb-3 text-gray-900 dark:text-white">{course.level}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center mb-6">{course.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Lessons</span>
                      <span className="font-medium text-gray-900 dark:text-white">{course.lessons}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Quizzes</span>
                      <span className="font-medium text-gray-900 dark:text-white">{course.quizzes}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Duration</span>
                      <span className="font-medium text-gray-900 dark:text-white">2-3 hours</span>
                    </div>
                  </div>
                  
                  <Link 
                    href={`/learning/${selectedSystem}/${course.level.toLowerCase()}`}
                    className={`w-full ${course.bgColor} text-white py-3 rounded-lg ${course.hoverColor} transition-colors whitespace-nowrap cursor-pointer block text-center font-medium`}
                  >
                    Start {course.level} Course
                  </Link>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Benefits Section */}
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg transition-colors duration-300">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">What You&apos;ll Gain</h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="ri-lightbulb-line text-xl text-white"></i>
              </div>
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Critical Thinking</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Develop analytical skills and logical reasoning abilities</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="ri-mic-line text-xl text-white"></i>
              </div>
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Public Speaking</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Build confidence in presenting arguments clearly</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="ri-search-line text-xl text-white"></i>
              </div>
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Research Skills</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Learn to find and evaluate credible sources</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="ri-team-line text-xl text-white"></i>
              </div>
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Collaboration</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Master teamwork and strategic communication</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
