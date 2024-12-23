import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const [formSubmitted, setFormSubmitted] = useState(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        setFormSubmitted(true);
        // Reset form after submission
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      };
    
      return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-2 mb-2">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Contact Us</h2>
          {formSubmitted ? (
            <div className="text-center text-green-500 m-8">
              <p>Thank you for contacting us! We will get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 border rounded-md"
                  placeholder="Enter your full name"
                  required
                />
              </div>
    
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 border rounded-md"
                  placeholder="Enter your email"
                  required
                />
              </div>
    
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 border rounded-md"
                  placeholder="Enter your message"
                  rows="4"
                  required
                ></textarea>
              </div>
    
              <div className="text-center">
                <button type="submit" className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 ">
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      );
    }

export default Contact
