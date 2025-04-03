import React from 'react';
import { Button, Input, Form } from 'antd';
import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactUs = () => {
  const onFinish = async (values) => {
    try {
      // Implement your form submission logic here
      console.log("Form values:", values);
      alert("Message sent successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
        <Header/>
      <div className="flex-grow bg-gray-800 flex items-center justify-center p-4">
        <div className="bg-gray-700 rounded-lg shadow-xl p-8 max-w-6xl w-full">
          <h1 className="text-4xl font-bold text-center text-white mb-8">Contact Us</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-white">
                  <PhoneOutlined style={{ fontSize: '24px' }} />
                  <span className="text-lg">Phone: +1234567890</span>
                </div>
                <div className="flex items-center space-x-4 text-white">
                  <MailOutlined style={{ fontSize: '24px' }} />
                  <span className="text-lg">Email: example@example.com</span>
                </div>
                <div className="flex items-center space-x-4 text-white">
                  <EnvironmentOutlined style={{ fontSize: '24px' }} />
                  <span className="text-lg">Address: 123 Street, City, Country</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Send Us a Message</h2>
              <Form
                name="contact"
                onFinish={onFinish}
                layout="vertical"
                className="space-y-4"
              >
                <Form.Item
                  name="fullName"
                  rules={[{ required: true, message: 'Please enter your full name' }]}
                >
                  <Input placeholder="Full Name" className="bg-gray-600 text-white border-gray-500" />
                </Form.Item>
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: 'Please enter your email' },
                    { type: 'email', message: 'Please enter a valid email' }
                  ]}
                >
                  <Input placeholder="Email" className="bg-gray-600 text-white border-gray-500" />
                </Form.Item>
                <Form.Item
                  name="message"
                  rules={[{ required: true, message: 'Please enter your message' }]}
                >
                  <Input.TextArea 
                    placeholder="Your Message" 
                    rows={4} 
                    className="bg-gray-600 text-white border-gray-500" 
                  />
                </Form.Item>
                <Form.Item>
                  <Button 
                    type="primary" 
                    htmlType="submit" 
                    className="bg-red-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-600"
                  >
                    Send Message
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ContactUs;