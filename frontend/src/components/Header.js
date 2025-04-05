import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Button } from "antd";


function Header() {
  const navigate = useNavigate();
  const bookNow = () => {
    navigate('/reservation');
  };
  return (
    <div>
             {/* Header Section */}
      <header className="sticky top-0 bg-gray-800 w-full h-20 flex justify-between items-center shadow-md z-50">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-10">
          {/* Navigation Links */}
          <div className="flex space-x-6">
            <Link to="/" className="font-bold text-white text-lg hover:text-gray-700">
              Home
            </Link>
            <Link to="/about" className="font-bold text-white text-lg hover:text-gray-700">
              About me
            </Link>
            <Link to="/services" className="font-bold text-white text-lg hover:text-gray-700">
              Services
            </Link>
            <Link to="/packages" className="font-bold text-white text-lg hover:text-gray-700">
              Packages
            </Link>
            <Link to="/contact" className="font-bold text-white text-lg hover:text-gray-700">
              Contact Us
            </Link>
          </div>

          {/* Book Now Button */}
          <Button
            type="primary"
            className="bg-red-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-600"
            onClick={bookNow}
          >
            BOOK NOW
          </Button>
        </div>
      </header>
    </div>
  )
}

export default Header