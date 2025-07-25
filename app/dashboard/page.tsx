'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const progressData = {
    bp: {
      beginner: { completed: 8, total: 8, quizzes: 2, score: 85 },
      intermediate: { completed: 4, total: 8, quizzes: 1, score: 78 },
      advanced: { completed: 0, total: 8, quizzes: 0, score: 0 }
    },
    general: {
      beginner: { completed: 8, total: 8, quizzes: 2, score: 92 },
      intermediate: { completed: 6, total: 8, quizzes: 1, score: 88 },
      advanced: { completed: 2, total: 8, quizzes: 0, score: 0 }
    }
  };

  const achievements = [
    { title: 'First Steps', description: 'Complete your first lesson', icon: 'ri-footprint-line', earned: true },
    { title: 'Quiz Master', description: 'Pass 5 quizzes with 80%+ score', icon: 'ri-trophy-line', earned: true },
    { title: 'Dedicated Learner', description: 'Study for 7 consecutive days', icon: 'ri-calendar-check-line', earned: false },
    { title: 'Course Completer', description: 'Complete an entire course', icon: 'ri-graduation-cap-line', earned: true },
    { title: 'Debate Expert', description: 'Complete advanced level', icon: 'ri-award-line', earned: false },
    { title: 'Perfect Score', description: 'Get 100% on any quiz', icon: 'ri-star-line', earned: false }
  ];

  const recentActivity = [
    { action: 'Completed Lesson 4', course: 'BP Intermediate', time: '2 hours ago', icon: 'ri-book-mark-line' },
    { action: 'Passed Quiz 1', course: 'General Intermediate', time: '1 day ago', icon: 'ri-checkbox-circle-line' },
    { action: 'Started New Course', course: 'BP Intermediate', time: '3 days ago', icon: 'ri-play-circle-line' },
    { action: 'Earned Achievement', course: 'Quiz Master', time: '5 days ago', icon: 'ri-trophy-line' },
    { action: 'Completed Course', course: 'General Beginner', time: '1 week ago', icon: 'ri-graduation-cap-line' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Learning Dashboard</h1>
          <p className="text-gray-600">Track your progress and continue your debate education journey</p>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-xl shadow-lg mb-8">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-4 font-medium transition-colors cursor-pointer ${
                activeTab === 'overview' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('progress')}
              className={`px-6 py-4 font-medium transition-colors cursor-pointer ${
                activeTab === 'progress' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Course Progress
            </button>
            <button
              onClick={() => setActiveTab('achievements')}
              className={`px-6 py-4 font-medium transition-colors cursor-pointer ${
                activeTab === 'achievements' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Achievements
            </button>
          </div>

          <div className="p-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Stats Cards */}
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                      <i className="ri-book-line text-xl text-white"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900">28</h3>
                    <p className="text-blue-700">Lessons Completed</p>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-6">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                      <i className="ri-quiz-line text-xl text-white"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-green-900">5</h3>
                    <p className="text-green-700">Quizzes Passed</p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-6">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                      <i className="ri-trophy-line text-xl text-white"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-purple-900">3</h3>
                    <p className="text-purple-700">Achievements</p>
                  </div>
                  
                  <div className="bg-yellow-50 rounded-lg p-6">
                    <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mb-4">
                      <i className="ri-time-line text-xl text-white"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-yellow-900">24</h3>
                    <p className="text-yellow-700">Hours Studied</p>
                  </div>
                </div>

                {/* Recent Activity */}
                <div>
                  <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                          <i className={`${activity.icon} text-blue-600`}></i>
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{activity.action}</p>
                          <p className="text-sm text-gray-600">{activity.course}</p>
                        </div>
                        <span className="text-sm text-gray-500">{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div>
                  <h3 className="text-xl font-bold mb-4">Continue Learning</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <h4 className="font-bold mb-2">British Parliamentary - Intermediate</h4>
                      <p className="text-gray-600 mb-4">Continue with Lesson 5: Advanced Case Building</p>
                      <div className="flex items-center justify-between">
                        <div className="flex-1 bg-gray-200 rounded-full h-2 mr-4">
                          <div className="bg-blue-600 h-2 rounded-full" style={{width: '50%'}}></div>
                        </div>
                        <span className="text-sm text-gray-600">4/8</span>
                      </div>
                      <Link 
                        href="/learning/bp/intermediate"
                        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer inline-block"
                      >
                        Continue
                      </Link>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <h4 className="font-bold mb-2">General Basic - Intermediate</h4>
                      <p className="text-gray-600 mb-4">Continue with Lesson 7: Debate Flow Management</p>
                      <div className="flex items-center justify-between">
                        <div className="flex-1 bg-gray-200 rounded-full h-2 mr-4">
                          <div className="bg-green-600 h-2 rounded-full" style={{width: '75%'}}></div>
                        </div>
                        <span className="text-sm text-gray-600">6/8</span>
                      </div>
                      <Link 
                        href="/learning/general/intermediate"
                        className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap cursor-pointer inline-block"
                      >
                        Continue
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Progress Tab */}
            {activeTab === 'progress' && (
              <div className="space-y-8">
                {/* British Parliamentary Progress */}
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <i className="ri-government-line text-red-600 mr-2"></i>
                    British Parliamentary System
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {Object.entries(progressData.bp).map(([level, data]) => (
                      <div key={level} className="border border-gray-200 rounded-lg p-6">
                        <h4 className="font-bold mb-3 capitalize">{level}</h4>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Lessons</span>
                              <span>{data.completed}/{data.total}</span>
                            </div>
                            <div className="bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-red-600 h-2 rounded-full transition-all"
                                style={{width: `${(data.completed / data.total) * 100}%`}}
                              ></div>
                            </div>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Quizzes Passed</span>
                            <span>{data.quizzes}/2</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Average Score</span>
                            <span>{data.score > 0 ? `${data.score}%` : 'N/A'}</span>
                          </div>
                        </div>
                        {data.completed < data.total && (
                          <Link 
                            href={`/learning/bp/${level}`}
                            className="mt-4 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors whitespace-nowrap cursor-pointer block text-center"
                          >
                            Continue
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* General Basic Progress */}
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <i className="ri-chat-3-line text-blue-600 mr-2"></i>
                    General Basic System
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {Object.entries(progressData.general).map(([level, data]) => (
                      <div key={level} className="border border-gray-200 rounded-lg p-6">
                        <h4 className="font-bold mb-3 capitalize">{level}</h4>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Lessons</span>
                              <span>{data.completed}/{data.total}</span>
                            </div>
                            <div className="bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-blue-600 h-2 rounded-full transition-all"
                                style={{width: `${(data.completed / data.total) * 100}%`}}
                              ></div>
                            </div>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Quizzes Passed</span>
                            <span>{data.quizzes}/2</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Average Score</span>
                            <span>{data.score > 0 ? `${data.score}%` : 'N/A'}</span>
                          </div>
                        </div>
                        {data.completed < data.total && (
                          <Link 
                            href={`/learning/general/${level}`}
                            className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer block text-center"
                          >
                            Continue
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Achievements Tab */}
            {activeTab === 'achievements' && (
              <div>
                <h3 className="text-xl font-bold mb-6">Your Achievements</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {achievements.map((achievement, index) => (
                    <div 
                      key={index} 
                      className={`p-6 rounded-lg border-2 ${
                        achievement.earned 
                          ? 'border-yellow-300 bg-yellow-50' 
                          : 'border-gray-200 bg-gray-50'
                      }`}
                    >
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                        achievement.earned 
                          ? 'bg-yellow-500' 
                          : 'bg-gray-300'
                      }`}>
                        <i className={`${achievement.icon} text-2xl ${
                          achievement.earned ? 'text-white' : 'text-gray-500'
                        }`}></i>
                      </div>
                      <h4 className={`font-bold text-center mb-2 ${
                        achievement.earned ? 'text-yellow-800' : 'text-gray-600'
                      }`}>
                        {achievement.title}
                      </h4>
                      <p className={`text-center text-sm ${
                        achievement.earned ? 'text-yellow-700' : 'text-gray-500'
                      }`}>
                        {achievement.description}
                      </p>
                      {achievement.earned && (
                        <div className="text-center mt-3">
                          <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                            Earned
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}