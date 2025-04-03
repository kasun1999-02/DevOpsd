import React, { useState } from 'react';
import { Button, Input, Select, DatePicker, Form } from 'antd';
import axios from 'axios';
import Header from "../components/Header";
import Footer from "../components/Footer";

const { Option } = Select;

const ReservationForm = () => {
  const [form] = Form.useForm();
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onFinish = async (values) => {
    try {
      const res = await axios.post(`http://${process.env.REACT_APP_API_BASE_URL}:5000/post`, {
        ...values,
        fromdate: values.fromdate.format(),
      });
      if (res.data.success) {
        form.resetFields();
        setSuccessMessage("Reservation Submitted Successfully");
        setErrorMessage(''); // Clear any previous error message
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("An error occurred while submitting the reservation. Please try again.");
      setSuccessMessage(''); // Clear any previous success message
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow bg-gray-800 flex items-center justify-center p-4">
        <div className="bg-gray-700 rounded-lg shadow-xl p-8 max-w-4xl w-full">
          <h2 className="text-3xl font-bold text-center text-white mb-8">Appointment Reservation</h2>
          <Form
            form={form}
            name="reservation"
            onFinish={onFinish}
            layout="vertical"
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                name="fullname"
                label={<span className="text-white">Full Name</span>}
                rules={[{ required: true, message: 'Please input your full name!' }]}
              >
                <Input className="bg-gray-600 border-gray-500" />
              </Form.Item>
              <Form.Item
                name="email"
                label={<span className="text-white">Email</span>}
                rules={[
                  { required: true, message: 'Please input your email!' },
                  { type: 'email', message: 'Please enter a valid email!' }
                ]}
              >
                <Input className="bg-gray-600 border-gray-500" />
              </Form.Item>
              <Form.Item
                name="phonenumber"
                label={<span className="text-white">Phone Number</span>}
                rules={[{ required: true, message: 'Please input your phone number!' }]}
              >
                <Input className="bg-gray-600 border-gray-500" />
              </Form.Item>
              <Form.Item
                name="vehicaletype"
                label={<span className="text-white">Vehicle Type</span>}
                rules={[{ required: true, message: 'Please select a service!' }]}
              >
                <Select className="bg-gray-600 border-gray-500">
                  <Option value="diskbrakes">Car/Van</Option>
                  <Option value="painting">Bus/Lorry</Option>
                  <Option value="batterychange">Motor Bike</Option>
                  <Option value="enginediagnostics">Three Wheel</Option>
                  <Option value="tyresreplacement">Others</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="vehicalenumber"
                label={<span className="text-white">Vehicle Number</span>}
                rules={[{ required: true, message: 'Please input your vehicle number!' }]}
              >
                <Input className="bg-gray-600 border-gray-500 text-black" />
              </Form.Item>
              <Form.Item
                name="selectservice"
                label={<span className="text-white">Select Service</span>}
                rules={[{ required: true, message: 'Please select a service!' }]}
              >
                <Select className="bg-gray-600 border-gray-500">
                  <Option value="diskbrakes">Disk Brakes</Option>
                  <Option value="painting">Painting</Option>
                  <Option value="batterychange">Battery Change</Option>
                  <Option value="enginediagnostics">Engine Diagnostics</Option>
                  <Option value="tyresreplacement">Tyres Replacement</Option>
                  <Option value="oilchange">Oil Change</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="branch"
                label={<span className="text-white">Branch</span>}
                rules={[{ required: true, message: 'Please input the branch!' }]}
              >
                <Input className="bg-gray-600 border-gray-500 text-black" />
              </Form.Item>
              <Form.Item
                name="fromdate"
                label={<span className="text-white">Date/Time</span>}
                rules={[{ required: true, message: 'Please select a date and time!' }]}
              >
                <DatePicker
                  showTime
                  format="YYYY-MM-DD HH:mm:ss"
                  className="w-full bg-gray-600 text-white border-gray-500"
                />
              </Form.Item>
            </div>
            <Form.Item
              name="comments"
              label={<span className="text-white">Anything else?</span>}
            >
              <Input.TextArea rows={4} className="bg-gray-600 border-gray-500" />
            </Form.Item>

            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            {successMessage && <p className="text-green-500">{successMessage}</p>}
            <Form.Item className="text-center">
              <Button 
                type="primary" 
                htmlType="submit" 
                className="bg-red-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-600"
              >
                Get Appointment
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReservationForm;
