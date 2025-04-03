import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import image1 from '../Images/image_E.jpg';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function AboutUs() {
  const navigate = useNavigate();

  const bookNow = () => {
    navigate('/reservation');
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col" style={{ backgroundImage: `url(${image1})` }}>
       {/* Header Section */}
       <Header/>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold italic text-white mb-6">
              About Us Autocare Oasis
            </h1>
            <div className="bg-gray-800 bg-opacity-75 p-6 rounded-lg shadow-lg">
              <p className="text-white text-lg leading-relaxed">
                Autocare Oasis being Sri Lanka's largest and the best auto service network, 
                also has the most diverse service portfolio. Autocare Oasis is your one stop 
                station for all of your maintenance work, repairs, and services. Autocare 
                Oasis's updated state-of-the-art equipment present at all our sites, powered 
                by our skilled personnel, has a proven track-record of delivering the finest 
                preventive maintenance and care to all our clients this includes expertise in 
                servicing the very latest vehicle types as well. Leveraging our commitment to 
                excellence, we have entered into strategic partnerships with many leading global 
                brands Company, contributing more to our goal of providing our clients with the 
                very best services.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-8">
            <img 
              src="/images/image_7.jpg" 
              alt="About Autocare Oasis" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}