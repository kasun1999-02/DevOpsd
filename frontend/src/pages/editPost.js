import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Button, Input, Form, Select, DatePicker, Row, Col } from 'antd';

const { Option } = Select;

function EditPost() {
  // Declare state variables
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [vehicaletype, setVehicaletype] = useState("");
  const [vehicalenumber, setVehicalenumber] = useState("");
  const [selectservice, setSelectservice] = useState("");
  const [branch, setBranch] = useState("");
  const [fromdate, setFromdate] = useState("");
  const [comments, setComments] = useState("");

  // Retrieve the 'id' parameter from the route
  const { id } = useParams();

  // Check if 'id' is available before making the API call
  useEffect(() => {
    axios.get(`http://localhost:5000/post/${id}`).then((res) => {
      if (res.data.success) {
        const postDetails = res.data.post;

        // Set state variables with data from the response
        setFullname(postDetails.fullname);
        setEmail(postDetails.email);
        setPhonenumber(postDetails.phonenumber);
        setVehicaletype(postDetails.vehicaletype);
        setVehicalenumber(postDetails.vehicalenumber);
        setSelectservice(postDetails.selectservice);
        setBranch(postDetails.branch);
        setFromdate(postDetails.fromdate);
        setComments(postDetails.comments);
      }
    });
  }, [id]);

  const titleStyle = {
    paddingLeft: '50px',
    fontSize: '40px',
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: '20px',
    textAlign: 'left',
  };

  const contactInfoStyle = {
    flex: '1',
    marginRight: '20px',
    padding: '20px',
    paddingLeft: '30px',
    backgroundColor: 'lightgray',
    borderRadius: '10px',
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Update the state variables based on input field name
    if (name === 'fullname') {
      setFullname(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'phonenumber') {
      setPhonenumber(value);
    } else if (name === 'vehicaletype') {
      setVehicaletype(value);
    } else if (name === 'vehicalenumber') {
      setVehicalenumber(value);
    } else if (name === 'selectservice') {
      setSelectservice(value);
    } else if (name === 'branch') {
      setBranch(value);
    } else if (name === 'fromdate') {
      setFromdate(value);
    } else if (name === 'comments') {
      setComments(value);
    }
  };

  const formRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    
    // You can use the state variables here to submit the data to the server
    const data = {
      fullname: fullname,
      email: email,
      phonenumber: phonenumber,
      vehicaletype: vehicaletype,
      vehicalenumber: vehicalenumber,
      selectservice: selectservice,
      branch: branch,
      fromdate: fromdate,
      comments: comments
    };

    axios.put(`http://localhost:5000/posts/${id}`, data).then((res) => {
      if (res.data.success) {

        alert("Post Updated Successfully");
        formRef.current.reset();
     
        setFullname("");
        setEmail("");
        setPhonenumber("");
        setVehicaletype("");
        setVehicalenumber("");
        setSelectservice("");
        setBranch("");
        setFromdate("");
        setComments("");
      }
    });
  
  };

  return (
    <div >
      <section className="section">
        <div className="container"  style={{marginTop:'40px', width: '1200px', height: '500px', padding: '40px', backgroundColor: 'rgba(255, 165, 10, 0.6)', borderRadius: '20px', boxShadow: '2px 2px 10px 1px' }}>
          <div style={titleStyle}>
            <h1>Appointment Reservation</h1>
          </div>

          <Form className='needs-validation' noValidate ref={formRef} >
            <Row gutter={16}>
              <Col span={12}>
                <div style={contactInfoStyle}>
                  <div className='form-group' >
                    <label style={{marginBottom:'5px'}} >Full Name</label>
                    <Input name="fullname" value={fullname}  onChange={handleInputChange} />
                  </div>
                  <div className='form-group' >
                    <label style={{marginBottom:'5px'}} >Email</label>
                    <Input name="email" value={email} onChange={handleInputChange} />
                  </div>
                  <div className='form-group' >
                    <label style={{marginBottom:'5px'}} >Phone Number</label>
                    <Input name="phonenumber" value={phonenumber} onChange={handleInputChange} />
                  </div>
                  <div className='form-group' >
                    <label style={{marginBottom:'5px'}} >Vehicle Type</label>
                    <Input name="vehicaletype" value={vehicaletype} onChange={handleInputChange} />
                  </div>
                  <div className='form-group' >
                    <label style={{marginBottom:'5px'}} >Vehicle Number</label>
                    <Input name="vehiclenumber" value={vehicalenumber} onChange={handleInputChange} />
                  </div>
                </div>
                
              </Col>

              <Col span={12}>
                <div style={contactInfoStyle}>
                  <div name="selectservice" >
                  <label style={{marginBottom:'5px'}}>Select Service</label>
                    <Select
                      name="selectservice"
                      value={selectservice}
                      onChange={(value) => handleInputChange({ target: { name: 'selectservice', value } })}
                    >
                      <Option value="service1">Service 1</Option>
                      <Option value="service2">Service 2</Option>
                      <Option value="service3">Service 3</Option>
                    </Select>
                  </div>
                  <div name="branch">
                  <label style={{marginBottom:'5px'}}>Branch</label>
                    <Input name="branch" value={branch} onChange={handleInputChange} />
                  </div>
                  <Form.Item name="fromdate" label="Date/Time">
                    <DatePicker
                      showTime
                      format="YYYY-MM-DD HH:mm:ss"
                      name="fromdate"
                      value={fromdate}
                      onChange={(date, dateString) => handleInputChange({ target: { name: 'fromdate', value: dateString } })}
                    />
                  </Form.Item>
                  <div name="comments">
                  <label style={{marginBottom:'5px'}}>Comments</label>
                    <Input.TextArea rows={4} name="comments" value={comments} onChange={handleInputChange} />
                  </div>
                </div>
              </Col>
            </Row>

            <div style={{ textAlign: 'center' }}>
              <Button type="primary" htmlType="submit" onClick={onSubmit} style={{marginTop:'80px'}}>
                <i className='far fa-check-square'></i> &nbsp;Get Appointment
              </Button>
              <Button className="btn btn-success" style={{marginLeft:'20px',marginTop:'-6px'}}>
                <a href="/create" style={{ textDecoration: 'none', color: 'white' }}>save</a>
              </Button>
            </div>
          </Form>
        </div>
      </section>
    </div>
  );
};

export default EditPost;
