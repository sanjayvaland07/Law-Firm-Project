import React, { useState } from 'react';
import './getTouch.css';

const GetTouch = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    emailAddress: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  return (
    <div className="contact-form-container">
      <h1>Get in touch</h1>
      <p className="description">
      "Reach out to us for legal assistance. Fill out the form below with your contact details and message, and our team will respond promptly."
      </p>
       <div className="form-container">
                  <form>
                      <div className="form-row">
                          <input type="text" placeholder="FIRST NAME" />
                          <div className="vertical-line"></div>
                          <input type="text" placeholder="LAST NAME" />
                      </div>
                      <div className="form-row">
                          <input type="text" placeholder="PHONE NUMBER" />
                          <div className="vertical-line"></div>
                          <input type="email" placeholder="EMAIL ADDRESS" />
                      </div>
                      <div className="form-row">
                          <input type="text" placeholder="ADD YOUR MESSAGE" style={{ flex: 1 }} />
                      </div>
                      <button type="submit" className="submit-button">SEND MESSAGE</button>
                  </form>
              </div>
    </div>
  );
};

export default GetTouch;
