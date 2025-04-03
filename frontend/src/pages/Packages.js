import { Link, useNavigate } from "react-router-dom";
import { Button } from "antd";
import React from "react";
import image1 from "../Images/image_E.jpg";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Packages() {
  const navigate = useNavigate();

  const bookNow = () => {
    navigate("/reservation");
  };

  return (
    <div>
      {/* Header Section */}
      <Header />
      <div
        className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${image1})` }}
      >
        {/* Packages Page Content */}
        <section className="w-full my-20 px-5">
          {" "}
          {/* Added top margin to adjust for fixed header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold italic drop-shadow-2xl">
              Service Packages
            </h1>
          </div>
          {/* Card Row */}
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Packages */}
            <div className="bg-blue-100 p-5 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold">Econo Plus</h2>
              <h4 className="text-blue-600 mt-3 font-semibold">INCLUDES:</h4>
              <ul className="list-disc ml-5 mt-2">
                <li>Oil & Filter change along with filter inspection</li>
                <li>Preventive Maintenance</li>
                <li>Wash & Vacuum</li>
                <li>Aubrite Top Goss Liquid Wax</li>
                <li>Inspection Report - 17 points</li>
              </ul>
              <h4 className="text-blue-600 mt-3 font-semibold">
                VALUE ADDITIONS:
              </h4>
              <ul className="list-disc ml-5 mt-2">
                <li>Battery Test Report</li>
                <li>Scan Report</li>
                <li>Battery Terminal Protector and Door Hinge treatment</li>
              </ul>
            </div>

            {/* More packages */}
            <div className="bg-gray-100 p-5 rounded-lg shadow-lg relative">
              <h2 className="text-2xl font-bold">Auto Service Plus</h2>
              <h4 className="text-blue-600 mt-3 font-semibold">INCLUDES:</h4>
              <ul className="list-disc ml-5 mt-2">
                <li>Oil & Filter change along with filter inspection</li>
                <li>Preventive Maintenance</li>
                <li>Wash & Vacuum</li>
                <li>Aubrite Top Goss Liquid Wax</li>
                <li>Inspection Report - 17 points</li>
              </ul>
              <h4 className="text-blue-600 mt-3 font-semibold">
                VALUE ADDITIONS:
              </h4>
              <ul className="list-disc ml-5 mt-2">
                <li>Battery Test Report</li>
                <li>Scan Report</li>
                <li>Battery Terminal Protector and Door Hinge treatment</li>
              </ul>
            </div>

            <div className="bg-blue-100 p-5 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold">Euro Total Plus</h2>
              <h4 className="text-blue-600 mt-3 font-semibold">INCLUDES:</h4>
              <ul className="list-disc ml-5 mt-2">
                <li>Oil & Filter change along with filter inspection</li>
                <li>Preventive Maintenance</li>
                <li>Wash & Vacuum</li>
                <li>Aubrite Top Goss Liquid Wax</li>
                <li>Inspection Report - 17 points</li>
              </ul>
              <h4 className="text-blue-600 mt-3 font-semibold">
                VALUE ADDITIONS:
              </h4>
              <ul className="list-disc ml-5 mt-2">
                <li>Battery Test Report</li>
                <li>Scan Report</li>
                <li>Battery Terminal Protector and Door Hinge treatment</li>
              </ul>
            </div>

            <div className="bg-gray-100 p-5 rounded-lg shadow-lg relative">
              <h2 className="text-2xl font-bold">Total Care Plus</h2>
              <h4 className="text-blue-600 mt-3 font-semibold">INCLUDES:</h4>
              <ul className="list-disc ml-5 mt-2">
                <li>Oil & Filter change along with filter inspection</li>
                <li>Preventive Maintenance</li>
                <li>Wash & Vacuum</li>
                <li>Aubrite Top Goss Liquid Wax</li>
                <li>Inspection Report - 17 points</li>
              </ul>
              <h4 className="text-blue-600 mt-3 font-semibold">
                VALUE ADDITIONS:
              </h4>
              <ul className="list-disc ml-5 mt-2">
                <li>Battery Test Report</li>
                <li>Scan Report</li>
                <li>Battery Terminal Protector and Door Hinge treatment</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Packages;
