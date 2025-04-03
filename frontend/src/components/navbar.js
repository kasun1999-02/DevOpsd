import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

const NavigationBar = () => {
  // Define your styles here
  const headerStyle = {
    height: '100px',
    background: 'linear-gradient(to bottom, #0074d9, white)',
    borderRadius: '20% 20% 0 0',
  };

  const linkStyle = {
    margin: '20px',
    marginTop: '50px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '20px',
    color: 'inherit',
  };

  const bookNow = {
    margin: '20px',
    marginRight: '150px',
    marginTop: '10px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '20px',
    color: 'inherit',
    float: 'right',
  };

  // Add any other styles you need

  return (
    <div>
      <header style={headerStyle}>
        <div className="container">
          <Link to="/" className="navbar-item" style={linkStyle}>
            Home
          </Link>
          <Link to="/about" className="navbar-item" style={linkStyle}>
            About Us
          </Link>
          <Link to="/services" className="navbar-item" style={linkStyle}>
            Services
          </Link>
           
          <Link to="/packages" className="navbar-item" style={linkStyle}>
            Packages
          </Link>
          <Link to="/contact" className="navbar-item" style={linkStyle}>
            Contact Us
          </Link>
          <Button type="primary" danger style={book_now} onClick={bookNow}>
            BOOK NOW
          </Button>
        </div>
      </header>
      </div>)
      }

export default NavigationBar;
