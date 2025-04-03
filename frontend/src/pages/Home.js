import { Link, useNavigate } from "react-router-dom";
import { Button } from "antd";
import React from "react";
import image1 from "../Images/image_J.jpg";

import Footer from "../components/Footer";
import Header from "../components/Header";

function Home() {
  const navigate = useNavigate();

  const bookNow = () => {
    navigate("/reservation");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header/>

      {/* Background Section */}
      <section
        className="bg-cover bg-center flex-grow flex items-center justify-center flex-col"
        style={{ backgroundImage: `url(${image1})` }}
      >
        <div className="container mx-auto text-center">
          <div className="bg-gray-700 bg-opacity-50 text-white p-6 rounded-lg shadow-md">
            <p className="text-lg">AutoCare Oasis vehicle service provides</p>
            <p className="text-lg">superior service, cost-effective options, and</p>
            <p className="text-lg">ultra-convenience in an eco-friendly environment</p>

            <div className="mt-4 flex justify-center space-x-4">
              <Link
                to="/signup"
                className="bg-black text-white font-bold py-2 px-6 rounded-lg hover:bg-gray-800"
              >
                SignUp
              </Link>
              <Link
                to="/login"
                className="bg-black text-white font-bold py-2 px-6 rounded-lg hover:bg-gray-800"
              >
                LOGIN
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer/>
    </div>
  );
}

export default Home;