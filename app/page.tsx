
'use client';

import Link from 'next/link';
import Image from 'next/image'; // Import Image component
import Header from '@/components/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 py-20 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Master the Art of
                <span className="text-blue-600 dark:text-blue-400 block">Debate</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Build critical thinking skills, learn structured argumentation, and become a confident debater 
                with our comprehensive learning platform featuring British Parliamentary and General Basic systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/learning"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors text-center whitespace-nowrap cursor-pointer"
                >
                  Start Learning Today
                </Link>
                <Link
                  href="#features"
                  className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors text-center whitespace-nowrap cursor-pointer"
                >
                  Discover Features
                </Link>
              </div>
            </div>
            <div className="lg:text-right">
              <Image
                src="https://readdy.ai/api/search-image?query=Professional%20debate%20competition%20scene%20with%20diverse%20students%20engaged%20in%20structured%20argumentation%2C%20modern%20university%20setting%20with%20clean%20background%2C%20bright%20lighting%2C%20academic%20atmosphere%2C%20focus%20on%20communication%20and%20critical%20thinking&width=600&height=400&seq=hero&orientation=landscape"
                alt="Debate Learning Platform"
                className="rounded-xl shadow-2xl w-full max-w-lg ml-auto object-top"
                width={600}
                height={400}
                priority // Optimize LCP for hero image
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Debatolearno?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our platform combines structured learning with practical application to help you become 
              a skilled debater and critical thinker.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'ri-book-open-line',
                title: 'Structured Learning',
                description: 'Progressive courses from beginner to advanced levels with comprehensive lesson plans and clear learning objectives.'
              },
              {
                icon: 'ri-quiz-line',
                title: 'Interactive Quizzes',
                description: 'Test your knowledge with engaging quizzes after every 4 lessons to ensure you master each concept.'
              },
              {
                icon: 'ri-award-line',
                title: 'Skill Certification',
                description: 'Earn certificates upon completion of advanced courses to showcase your debate and critical thinking skills.'
              },
              {
                icon: 'ri-group-line',
                title: 'Two Debate Systems',
                description: 'Learn both British Parliamentary and General Basic debate formats to become a versatile debater.'
              },
              {
                icon: 'ri-dashboard-line',
                title: 'Progress Tracking',
                description: 'Monitor your learning journey with detailed progress tracking and achievement systems.'
              },
              {
                icon: 'ri-money-dollar-circle-line',
                title: 'Completely Free',
                description: 'Access all features, courses, and certifications at no cost. Quality education should be accessible to everyone.'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${feature.icon} text-2xl text-blue-600 dark:text-blue-400`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Choose Your Learning Path</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Select the debate system that matches your goals and interests
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mr-4">
                  <i className="ri-flag-line text-2xl text-red-600 dark:text-red-400"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">British Parliamentary</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Master the world&apos;s most popular competitive debate format. Learn advanced techniques including 
                government/opposition dynamics, extension strategies, and Points of Information.
              </p>
              <ul className="space-y-2 mb-8">
                {['4-person team format', 'Opening & Closing Half strategies', 'Advanced case building', 'Tournament preparation'].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                    <i className="ri-check-line text-green-500 mr-3"></i>
                    {item}
                  </li>
                ))}
              </ul>
              <Link 
                href="/learning"
                className="block w-full bg-red-600 text-white text-center py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold whitespace-nowrap cursor-pointer"
              >
                Start BP Course
              </Link>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                  <i className="ri-discuss-line text-2xl text-green-600 dark:text-green-400"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">General Basic System</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Build foundational debate skills with traditional argumentation techniques. Perfect for beginners 
                and those interested in general critical thinking and persuasion skills.
              </p>
              <ul className="space-y-2 mb-8">
                {['Fundamental argumentation', 'Evidence-based reasoning', 'Cross-examination skills', 'Persuasion techniques'].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                    <i className="ri-check-line text-green-500 mr-3"></i>
                    {item}
                  </li>
                ))}
              </ul>
              <Link 
                href="/learning"
                className="block w-full bg-green-600 text-white text-center py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold whitespace-nowrap cursor-pointer"
              >
                Start General Course
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Communication Skills?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join thousands of learners who have improved their critical thinking and argumentation abilities. 
            Start your debate journey today - completely free!
          </p>
          <Link 
            href="/learning"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
          >
            Get Started Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-12 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 font-pacifico">Debatolearno</h3>
              <p className="text-gray-400 leading-relaxed">
                Empowering learners worldwide with comprehensive debate education and critical thinking skills.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Learning</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/learning" className="hover:text-white transition-colors cursor-pointer">British Parliamentary</Link></li>
                <li><Link href="/learning" className="hover:text-white transition-colors cursor-pointer">General Basic System</Link></li>
                <li><Link href="/learning" className="hover:text-white transition-colors cursor-pointer">Beginner Courses</Link></li>
                <li><Link href="/learning" className="hover:text-white transition-colors cursor-pointer">Advanced Training</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/dashboard" className="hover:text-white transition-colors cursor-pointer">Dashboard</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors cursor-pointer">Progress Tracking</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors cursor-pointer">Certificates</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors cursor-pointer">Community</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors cursor-pointer">Help Center</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors cursor-pointer">Contact Us</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors cursor-pointer">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors cursor-pointer">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Debatolearno. All rights reserved. Empowering critical thinking through structured debate education.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
