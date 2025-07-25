
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';

interface CourseContentProps {
  system: string;
  level: string;
}

export default function CourseContent({ system, level }: CourseContentProps) {
  const [currentLesson, setCurrentLesson] = useState(1);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<{[key: number]: string}>({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [showCertificate, setShowCertificate] = useState(false);
  const [certificateName, setCertificateName] = useState('');
  const [showLessonComplete, setShowLessonComplete] = useState(false);
  const [showQuizAnimation, setShowQuizAnimation] = useState(false);

  const systemName = system === 'bp' ? 'British Parliamentary' : 'General Basic System';
  const levelName = level.charAt(0).toUpperCase() + level.slice(1);

  const lessons = {
    bp: {
      beginner: [
        'Introduction to British Parliamentary Debate',
        'Understanding the Four Positions',
        'Government vs Opposition Dynamics',
        'Basic Argument Structure',
        'Opening Half Strategies',
        'Closing Half Techniques',
        'Time Management and Speaking Order',
        'Beginner Practice Rounds'
      ],
      intermediate: [
        'Advanced Case Building',
        'Clash and Engagement Techniques',
        'Extension Strategies for Closing Half',
        'POI (Point of Information) Mastery',
        'Rebuttal and Defense Methods',
        'Strategic Positioning',
        'Advanced Research Techniques',
        'Tournament Preparation'
      ],
      advanced: [
        'Expert Case Analysis',
        'Complex Extension Building',
        'Advanced POI Strategy',
        'Championship-Level Techniques',
        'Judge Adaptation Skills',
        'Cross-Examination Mastery',
        'Tournament Psychology',
        'Professional Debate Standards'
      ]
    },
    general: {
      beginner: [
        'Introduction to Debate Fundamentals',
        'Constructing Strong Arguments',
        'Evidence and Support Systems',
        'Basic Rebuttal Techniques',
        'Structure of Opening Statements',
        'Cross-Examination Basics',
        'Closing Argument Strategies',
        'Practice Debate Sessions'
      ],
      intermediate: [
        'Advanced Argumentation',
        'Complex Evidence Analysis',
        'Strategic Questioning',
        'Counter-Argument Development',
        'Logical Fallacy Recognition',
        'Persuasion Techniques',
        'Debate Flow Management',
        'Intermediate Practice Rounds'
      ],
      advanced: [
        'Expert Argumentation Skills',
        'Advanced Research Methods',
        'Sophisticated Rebuttal Strategies',
        'Professional Presentation Skills',
        'Complex Case Analysis',
        'Advanced Persuasion Techniques',
        'Expert-Level Practice',
        'Mastery Assessment'
      ]
    }
  };

  const quizQuestions = [
    { question: `What is the primary goal of ${systemName} debate?`, options: ['To win at all costs', 'To present logical arguments', 'To entertain audience', 'To confuse opponents'], correct: 1 },
    { question: 'How many main arguments should a strong case typically have?', options: ['1-2', '2-3', '4-5', '6+'], correct: 1 },
    { question: 'What makes evidence credible in debate?', options: ['Popular opinion', 'Personal experience', 'Reliable sources', 'Emotional appeal'], correct: 2 },
    { question: 'When should you address opposing arguments?', options: ['Never', 'Only at the end', 'Throughout your speech', 'Only if asked'], correct: 2 },
    { question: 'What is the most important aspect of delivery?', options: ['Speaking loudly', 'Clarity and organization', 'Using big words', 'Speaking fast'], correct: 1 },
    { question: 'How should you handle questions during debate?', options: ['Ignore them', 'Answer briefly and clearly', 'Ask questions back', 'Refuse to answer'], correct: 1 },
    { question: 'What is the purpose of a rebuttal?', options: ['To attack personally', 'To address counter-arguments', 'To repeat your points', 'To confuse audience'], correct: 1 },
    { question: 'Which is most important in argument structure?', options: ['Length', 'Complexity', 'Logic and evidence', 'Emotion'], correct: 2 },
    { question: 'How should you conclude your argument?', options: ['With a joke', 'Summarize key points', 'Introduce new ideas', 'Ask questions'], correct: 1 },
    { question: 'What defines a strong debater?', options: ['Loud voice', 'Preparation and logic', 'Personal attacks', 'Emotional appeals'], correct: 1 }
  ];

  const currentLessons = lessons[system as 'bp' | 'general'][level as 'beginner' | 'intermediate' | 'advanced'];

  const playSuccessSound = () => {
    try {
      const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBzuY1+2dkz8C');
      audio.play().catch(() => {});
    } catch {
      // Silently handle audio error
    }
  };

  const handleNextLesson = () => {
    if (!completedLessons.includes(currentLesson)) {
      setCompletedLessons([...completedLessons, currentLesson]);
    }

    // Show lesson completion animation
    setShowLessonComplete(true);

    setTimeout(() => {
      setShowLessonComplete(false);

      if (currentLesson === 4 || currentLesson === 8) {
        setShowQuiz(true);
      } else if (currentLesson < 8) {
        setCurrentLesson(currentLesson + 1);
      } else if (level === 'advanced' && completedLessons.length === 7) {
        setShowCertificate(true);
      }
    }, 2000);
  };

  const handleQuizAnswer = (questionIndex: number, answer: string) => {
    setQuizAnswers({...quizAnswers, [questionIndex]: answer});
  };

  const submitQuiz = () => {
    let score = 0;
    quizQuestions.forEach((q, index) => {
      if (quizAnswers[index] === q.options[q.correct]) {
        score++;
      }
    });

    setQuizScore(score);
    setQuizCompleted(true);

    // Show quiz completion animation with sound
    setShowQuizAnimation(true);
    if (score >= 6) {
      playSuccessSound();
    }

    setTimeout(() => {
      setShowQuizAnimation(false);

      if (score >= 6) {
        if (currentLesson < 8) {
          setTimeout(() => {
            setShowQuiz(false);
            setQuizCompleted(false);
            setQuizAnswers({});
            setCurrentLesson(currentLesson + 1);
          }, 1000);
        } else if (level === 'advanced') {
          setTimeout(() => {
            setShowCertificate(true);
          }, 1000);
        }
      }
    }, 3000);
  };

  const generateCertificate = () => {
    if (certificateName.trim()) {
      alert(`Congratulations ${certificateName}! Your certificate has been generated.`);
    }
  };

  // Lesson Completion Animation
  if (showLessonComplete) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center transition-colors duration-300">
        <div className="text-center animate-pulse">
          <div className="w-32 h-32 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <i className="ri-check-line text-5xl text-white"></i>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Lesson Completed!
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Great job! Moving to the next step...
          </p>
        </div>
      </div>
    );
  }

  if (showCertificate) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg text-center transition-colors duration-300">
            <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-award-line text-3xl text-white"></i>
            </div>
            <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Congratulations!</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              You have successfully completed the {levelName} level of {systemName} debate course.
            </p>

            <div className="max-w-md mx-auto">
              <label className="block text-left font-medium mb-2 text-gray-700 dark:text-gray-300">Enter your name for the certificate:</label>
              <input
                type="text"
                value={certificateName}
                onChange={(e) => setCertificateName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Your full name"
              />
              <button
                onClick={generateCertificate}
                className="w-full bg-yellow-500 text-black py-3 rounded-lg hover:bg-yellow-400 transition-colors font-semibold whitespace-nowrap cursor-pointer"
              >
                Generate Certificate
              </button>
            </div>

            <div className="mt-8">
              <Link 
                href="/learning"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-pointer"
              >
                Return to Learning Center
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showQuiz) {
    const quizSuccessStyle = quizScore >= 6 ? 'bg-green-500 animate-bounce' : 'bg-red-500 animate-pulse';
    const quizIconStyle = quizScore >= 6 ? 'ri-check-line animate-ping' : 'ri-close-line';
    const quizBgStyle = quizScore >= 6 ? 'bg-green-500' : 'bg-red-500';
    const quizIconCompleteStyle = quizScore >= 6 ? 'ri-check-line' : 'ri-close-line';

    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Header />
        
        {/* Quiz Animation Overlay */}
        {showQuizAnimation && (
          <div className="fixed inset-0 bg-black bg-black/80 flex items-center justify-center z-50">
            <div className="text-center">
              <div className={`w-40 h-40 ${quizSuccessStyle} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <i className={`${quizIconStyle} text-6xl text-white`}></i>
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">
                {quizScore >= 6 ? 'Quiz Passed!' : 'Quiz Failed'}
              </h2>
              <p className="text-2xl text-white">
                Score: {quizScore}/10
              </p>
              {quizScore >= 6 && (
                <div className="mt-4 animate-bounce">
                  <i className="ri-star-fill text-yellow-400 text-3xl mx-1"></i>
                  <i className="ri-star-fill text-yellow-400 text-3xl mx-1"></i>
                  <i className="ri-star-fill text-yellow-400 text-3xl mx-1"></i>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg transition-colors duration-300">
            <h1 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
              Quiz {currentLesson === 4 ? '1' : '2'} - {systemName} ({levelName})
            </h1>

            {!quizCompleted ? (
              <>
                <div className="space-y-6">
                  {quizQuestions.map((q, index) => (
                    <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4">
                      <h3 className="font-medium mb-3 text-gray-900 dark:text-white">{index + 1}. {q.question}</h3>
                      <div className="space-y-2">
                        {q.options.map((option, optionIndex) => (
                          <label key={optionIndex} className="flex items-center cursor-pointer">
                            <input
                              type="radio"
                              name={`question-${index}`}
                              value={option}
                              onChange={() => handleQuizAnswer(index, option)}
                              className="mr-3"
                            />
                            <span className="text-gray-700 dark:text-gray-300">{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <button
                    onClick={submitQuiz}
                    disabled={Object.keys(quizAnswers).length < 10}
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
                  >
                    Submit Quiz
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center">
                <div className={`w-20 h-20 ${quizBgStyle} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <i className={`${quizIconCompleteStyle} text-3xl text-white`}></i>
                </div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  {quizScore >= 6 ? 'Quiz Passed!' : 'Quiz Failed'}
                </h2>
                <p className="text-xl mb-4 text-gray-700 dark:text-gray-300">Your Score: {quizScore}/10</p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {quizScore >= 6 
                    ? 'Great job! You can continue to the next lesson.' 
                    : 'You need at least 6 correct answers to continue. Please review the lessons and try again.'
                  }
                </p>

                {quizScore < 6 && (
                  <div className="space-x-4">
                    <button
                      onClick={() => {
                        setShowQuiz(false);
                        setQuizCompleted(false);
                        setQuizAnswers({});
                        setCurrentLesson(currentLesson === 4 ? 1 : 5);
                      }}
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
                    >
                      Review Lessons
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header />

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Course Header */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-8 shadow-lg transition-colors duration-300">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{systemName} - {levelName}</h1>
              <p className="text-gray-600 dark:text-gray-400">Lesson {currentLesson} of 8</p>
            </div>
            <Link 
              href="/learning"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-pointer"
            >
              <i className="ri-arrow-left-line mr-2"></i>
              Back to Learning
            </Link>
          </div>

          {/* Progress Bar */}
          <div className="mt-4">
            <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-500 ease-in-out"
                style={{ width: `${(completedLessons.length / 8) * 100}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{completedLessons.length}/8 lessons completed</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Lesson List */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transition-colors duration-300">
              <h3 className="font-bold mb-4 text-gray-900 dark:text-white">Course Outline</h3>
              <div className="space-y-2">
                {currentLessons.map((lesson, index) => {
                  const isCurrentLesson = index + 1 === currentLesson;
                  const isCompleted = completedLessons.includes(index + 1);
                  
                  let lessonStyle = 'bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-400';
                  if (isCurrentLesson) {
                    lessonStyle = 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 border-l-4 border-blue-600';
                  } else if (isCompleted) {
                    lessonStyle = 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200';
                  }

                  return (
                    <div 
                      key={index}
                      className={`p-3 rounded-lg text-sm transform transition-all duration-300 hover:scale-105 ${lessonStyle}`}
                    >
                      <div className="flex items-center">
                        {isCompleted && (
                          <i className="ri-check-line text-green-600 dark:text-green-400 mr-2 animate-pulse"></i>
                        )}
                        <span className="font-medium">Lesson {index + 1}</span>
                      </div>
                      <div className="mt-1 text-xs">{lesson}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg transition-colors duration-300">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Lesson {currentLesson}: {currentLessons[currentLesson - 1]}
              </h2>

              {/* Lesson Content */}
              <div className="prose max-w-none mb-8">
                <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    Welcome to Lesson {currentLesson} of the {systemName} {levelName} course. 
                    In this lesson, you will learn about {currentLessons[currentLesson - 1].toLowerCase()}.
                  </p>

                  <h4 className="text-lg font-semibold mt-6 mb-3 text-gray-900 dark:text-white">Learning Objectives</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Understand the core concepts of {currentLessons[currentLesson - 1].toLowerCase()}</li>
                    <li>Apply theoretical knowledge to practical debate scenarios</li>
                    <li>Develop skills that will enhance your overall debate performance</li>
                    <li>Prepare for upcoming quiz assessments and advanced lessons</li>
                  </ul>

                  <h4 className="text-lg font-semibold mt-6 mb-3 text-gray-900 dark:text-white">Key Concepts</h4>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <p>
                      This lesson covers essential {system === 'bp' ? 'British Parliamentary' : 'general debate'} 
                      principles that form the foundation for effective argumentation and strategic thinking in competitive debate environments.
                    </p>
                  </div>

                  <h4 className="text-lg font-semibold mt-6 mb-3 text-gray-900 dark:text-white">Practical Applications</h4>
                  <p>
                    Throughout this lesson, you&apos;ll explore real-world examples and practice scenarios that demonstrate 
                    how these concepts apply in actual debate rounds. Pay close attention to the strategic considerations 
                    and tactical approaches discussed.
                  </p>

                  <h4 className="text-lg font-semibold mt-6 mb-3 text-gray-900 dark:text-white">Next Steps</h4>
                  <p>
                    After completing this lesson, you&apos;ll be ready to move forward in your debate education journey. 
                    {currentLesson === 4 || currentLesson === 8 
                      ? ' Remember, you\'ll need to pass a quiz before continuing to ensure you\'ve mastered the material.'
                      : ' Continue building on these concepts in the next lesson.'
                    }
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                <div>
                  {currentLesson > 1 && (
                    <button
                      onClick={() => setCurrentLesson(currentLesson - 1)}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-pointer"
                    >
                      <i className="ri-arrow-left-line mr-2"></i>
                      Previous Lesson
                    </button>
                  )}
                </div>

                <button
                  onClick={handleNextLesson}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
                >
                  {currentLesson === 4 || currentLesson === 8 ? 'Take Quiz' : 
                   currentLesson === 8 ? 'Complete Course' : 'Next Lesson'
                  }
                  <i className="ri-arrow-right-line ml-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
