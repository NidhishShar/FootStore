import Navigation from "./Navigation";


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
export default function ContactForm() {
  return (
    <div>
      <Navigation/>
   
    <div className="container mx-auto px-4 py-12">
    
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Form Section */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Have you any question?</h2>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, ratione! Laboriosam est, assumenda.
            Perferendis, quo alias quaerat aliquid. Corporis ipsum minus voluptate? Dolore, esse natus!
          </p>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="tel"
                placeholder="Phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            
            <textarea
              placeholder="Message"
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>
            
            <button
              type="submit"
              className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-colors"
            >
              SUBMIT
            </button>
          </form>
        </div>
        
        {/* Contact Information Section */}
        <div className="space-y-8">
          {/* Shop Address */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-4">
              <span className="text-orange-500">📍</span> Shop Address
            </h3>
            <address className="not-italic text-gray-600 space-y-1">
              <p>24-A Barcelona Street</p>
              <p>Barcelona</p>
              <p>Spain</p>
            </address>
          </div>
          
          {/* Shop Hours */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-4">
              <span className="text-orange-500">🕒</span> Shop Hours
            </h3>
            <div className="text-gray-600 space-y-1">
              <p>MON - FRIDAY: 8 to 9 PM</p>
              <p>SAT - SUN: 10 to 8 PM</p>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-4">
              <span className="text-orange-500">📞</span> Contact
            </h3>
            <div className="text-gray-600 space-y-1">
              <p>Phone: +00 111 222 3333</p>
              <p>Email: support@footstore.com</p>
            </div>
          </div>
          
        </div>
        
      </div>
      
    </div>
    <Footer/>
    </div>
  )
}

