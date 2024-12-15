import Center from "./Center";
import Navigation from "./Navigation";


import React from 'react'

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

const Home = () => {
  return (
    <div>
        <Navigation></Navigation>
        <Center></Center>
        <Footer/>
    </div>
  )
}

export default Home