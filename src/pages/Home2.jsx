import React from 'react'
import { Link } from 'react-router-dom'

const Home2 = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white mt-10 w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Authentication UI</h1>
          <p className="text-lg text-gray-300">
            Learn about designing effective and secure user authentication interfaces
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">What is Authentication UI?</h2>
            <p className="text-gray-300 leading-relaxed">
              Authentication UI refers to the user interface components and flows that allow users to prove their identity and gain access to protected resources. 
              This includes login forms, registration pages, password reset flows, and multi-factor authentication interfaces.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Key Components</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-2">Login Form</h3>
                <p className="text-gray-300">Email/password input fields with remember me option and forgot password link.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-2">Registration</h3>
                <p className="text-gray-300">User signup with validation, terms acceptance, and email verification.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-2">Password Reset</h3>
                <p className="text-gray-300">Secure password recovery with email/SMS verification.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-2">Multi-Factor Auth</h3>
                <p className="text-gray-300">Additional security layer with SMS, authenticator apps, or biometrics.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Use clear, concise labels and helpful error messages</li>
              <li>Implement real-time validation for better user experience</li>
              <li>Provide multiple authentication methods (social login, etc.)</li>
              <li>Ensure accessibility with proper ARIA labels and keyboard navigation</li>
              <li>Use HTTPS and secure password policies</li>
              <li>Include loading states and feedback for user actions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Example Implementation</h2>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Login Form</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Password</label>
                  <input 
                    type="password" 
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Remember me</span>
                  </label>
                  <Link to="/forgot-password" className="text-blue-400 hover:text-blue-300 text-sm">
                    Forgot password?
                  </Link>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200"
                >
                  Sign In
                </button>
              </form>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Explore More</h2>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/login2" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition duration-200"
              >
                Login Demo
              </Link>
              <Link 
                to="/dashboard" 
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition duration-200"
              >
                Dashboard
              </Link>
              <Link 
                to="/formvalidation" 
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition duration-200"
              >
                Form Validation
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Home2
