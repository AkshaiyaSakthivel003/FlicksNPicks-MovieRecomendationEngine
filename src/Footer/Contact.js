// ContactUs.js
import React, { useState, useRef } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    attachment: null,
  });

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    fileInputRef.current.click();
  };

  const handleFileSelected = (e) => {
    const file = e.target.files[0];

    if (file) {
      setFormData({ ...formData, attachment: file });
    } else {
      setFormData({ ...formData, attachment: null });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataForValidation = new FormData();
    formDataForValidation.append('name', formData.name);
    formDataForValidation.append('email', formData.email);
    formDataForValidation.append('message', formData.message);
    formDataForValidation.append('attachment', formData.attachment);

    if (!formData.name || !formData.email || !formData.message) {
        window.alert('Please fill in all required fields.');
      } else if (!formData.attachment) {
        window.alert('Please attach a file.');
      } else {
    
        const popupContainer = document.getElementById('popup-message-container');
        const popupMessage = document.querySelector('.popup-message');
    
        popupContainer.style.display = 'block';
        popupContainer.style.animationPlayState = 'running';
        setTimeout(() => {
            popupContainer.style.animationPlayState = 'running';
            popupContainer.style.animation = 'rollUp 0.5s ease-in-out forwards, fadeOut 0.5s ease-in-out forwards';
          }, 4000);
    
        
        setFormData({
          name: '',
          email: '',
          message: '',
          attachment: null,
        });
      }
  };

  return (
    <div className="contact-container">
      <div className="contact-background"></div>
      <div className="contact-content">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="contact-form">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          </div>
          <div className="contact-form">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          </div>
          <div className="contact-form">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          />
         </div>
         <div className="contact-form">
            <input
              type="file"
              id="attachment"
              name="attachment"
              ref={fileInputRef}
              onChange={(e) => setFormData({ ...formData, attachment: e.target.files[0] })}
              style={{ display: 'none' }} 
            />
            <label htmlFor="attachment">Attach A File:
            <button className="custom-file-button" onClick={handleFileChange}>Choose File</button></label>
            {formData.attachment && (
              <p>Selected File: {formData.attachment.name}</p>
            )}
          </div>
          <button className="but1" type="submit">Submit</button>
        </form>
        <div className="popup-message-container" id="popup-message-container">
        <div className='popup-message'>
  Your query from Contact Us has been submitted successfully.
</div></div>
      </div>
    </div>
  );
};

export default Contact;