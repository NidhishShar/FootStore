'use client'

import React, { useState, useEffect } from 'react'
import Navigation from './Navigation'


const teamMembers = [
  { name: 'John Doe', role: 'Founder & CEO', image: '', bio: 'John has over 15 years of experience in tech and is passionate about creating innovative solutions.' },
  { name: 'Jane Smith', role: 'Co-founder & CTO', image: '', bio: 'Jane is a brilliant engineer with a knack for turning complex problems into elegant solutions.' },
]

const Header = () => (
  <header className="bg-white shadow-md">
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
    </div>
  </header>
)

const Introduction = ({ isVisible }) => (
  <section className={`mb-16 text-center transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
    <h2 className="text-3xl font-semibold text-gray-900 mb-6">Our Story</h2>
    <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
      Founded in 2024, we're a dynamic duo on a mission to revolutionize the tech industry. 
      With our combined expertise and shared vision, we're creating cutting-edge solutions 
      that make a real difference in people's lives.
    </p>
    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      Learn More
    </button>
  </section>
)





const MissionStatement = ({ isVisible }) => (
  <section className={`text-center transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
    <h2 className="text-3xl font-semibold text-gray-900 mb-6">Our Mission</h2>
    <blockquote className="text-2xl text-gray-700 italic mb-8 max-w-3xl mx-auto">
      "To Complete our IWT project and get good marks."
    </blockquote>
    
  </section>
)

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8 mt-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
      <p className="mb-4 md:mb-0">&copy; 2024 Lavesh & Malay. All rights reserved.</p>
      <div className="flex space-x-4">
        <a href="https://twitter.com/" className="hover:text-blue-400 transition-colors duration-300">Twitter</a>
        <a href="https://www.linkedin.com/in/lavesh-vyas/" className="hover:text-blue-400 transition-colors duration-300">LinkedIn</a>
        <a href="https://github.com/Lavesh20" className="hover:text-blue-400 transition-colors duration-300">GitHub</a>
      </div>
    </div>
  </footer>
)

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* <Header /> */}
      <Navigation/>
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <Introduction isVisible={isVisible} />
       
        <MissionStatement isVisible={isVisible} />
      </main>
      <Footer />
    </div>
  )
}

