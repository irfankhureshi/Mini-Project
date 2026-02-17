import { Icon, icons } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const About2 = () => {
  const technologies = [
    { name: 'React', description: 'Modern JavaScript library for building user interfaces', icon: '⚛️' },
    { name: 'Vite', description: 'Fast build tool and development server', icon: '⚡' },
    { name: 'Tailwind CSS', description: 'Utility-first CSS framework for rapid UI development', icon: '🎨' },
    { name: 'React Router', description: 'Declarative routing for React applications', icon: ' 🗺️' },
    { name: 'ESLint', description: 'Tool for identifying and fixing code issues', icon: '🔍' }
  ]

  const features = [
    'Interactive component demonstrations',
    'State management examples',
    'API integration showcases',
    'Form validation patterns',
    'Responsive design implementations',
    'Dark/Light theme support',
    'Modern React hooks usage',
    'Performance optimization techniques'
  ]

  return (
    <div className="min-h-screen bg-gray-900 w-full mt-4 mx-2 md:mx-4">

      <div className="bg-gray-700 shadow-sm">
        <div className="max-w-4xl md:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              About This Project
            </h1>
            <p className="text-base md:text-lg text-gray-300">
              A comprehensive React learning and demonstration platform
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl md:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        
        <div className="bg-gray-800 rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Project Overview
          </h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            This website serves as a comprehensive showcase of modern React development practices and techniques.
            Built as a learning platform, it demonstrates various React concepts, from basic state management to
            advanced patterns like context API, custom hooks, and API integration.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Each component represents a real-world use case, providing practical examples that developers can
            reference and adapt for their own projects. The site emphasizes clean code, responsive design,
            and modern development workflows.
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-md p-8 mb-8"> 
          <h2 className="text-2xl font-semibold text-white mb-6">
            Technologies & Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">{tech.icon}</div>
                <h3 className="font-semibold text-white mb-1">{tech.name}</h3>
                <p className="text-sm text-gray-300">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Key Features Demonstrated
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full "></div>
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Learning Objectives
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-white mb-2">Component Architecture</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Understanding how to structure React applications with reusable components, proper prop passing,
                and component composition patterns.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">State Management</h3>
              <p className="text-gray-300">
                Implementing local state with useState, global state with Context API, and understanding
                when to use different state management approaches.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Modern React Patterns</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Utilizing hooks like useEffect, useContext, useReducer, and custom hooks to create
                maintainable and efficient React applications.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to=""
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Main About
            </Link>
            <Link
              to="/"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Alternative Home
            </Link>
            <Link
              to="/counter"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Try Components
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About2
