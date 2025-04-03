import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import image1 from '../Images/image_E.jpg';
import Footer from '../components/Footer';
import Header from '../components/Header';

const ServiceCard = ({ title, imageSrc }) => (
  <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
    <div className="bg-purple-200 rounded-lg p-4 text-center h-full">
      <h3 className="text-lg font-bold mb-2 text-black">{title}</h3>
      <img src={imageSrc} alt={title} className="w-full h-40 object-cover rounded-md" />
    </div>
  </div>
);

export default function Services() {
  const navigate = useNavigate();

  const bookNow = () => {
    navigate('/reservation');
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col" style={{ backgroundImage: `url(${image1})` }}>
      {/* Header Section */}
      <Header/>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold italic text-left mb-8">
          We Provide High Quality and Cost Effective Services
        </h1>

        <div className="flex flex-wrap -mx-2">
          {[
            { title: "Disk Brakes", image: "/images/image_8.jpg" },
            { title: "Painting", image: "/images/image_9.jpg" },
            { title: "Battery Change", image: "/images/image_10.jpg" },
            { title: "Engine Diagnostics", image: "/images/image_11.jpg" },
            { title: "Tyres Replacement", image: "/images/image_12.jpg" },
            { title: "Oil Change", image: "/images/image_13.jpg" }
          ].map((service, index) => (
            <ServiceCard key={index} title={service.title} imageSrc={service.image} />
          ))}
        </div>
      </main>

      <Footer/>
    </div>
  );
}