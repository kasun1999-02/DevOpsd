import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
              {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-lg font-bold mb-2">AutoCare Oasis</h3>
              <p className="text-sm">Providing superior auto care services since 2025</p>
            </div>
            <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
              <h4 className="text-md font-semibold mb-2">Quick Links</h4>
              <div className="flex justify-center space-x-4">
                <Link to="/about" className="text-sm hover:text-gray-300">About</Link>
                <Link to="/services" className="text-sm hover:text-gray-300">Services</Link>
                <Link to="/contact" className="text-sm hover:text-gray-300">Contact</Link>
              </div>
            </div>
            <div className="w-full md:w-1/3 text-center md:text-right">
              <p className="text-sm">&copy; 2025 AutoCare Oasis. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer