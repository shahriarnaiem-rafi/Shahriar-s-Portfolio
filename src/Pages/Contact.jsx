import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    if (!formData.name) {
      formIsValid = false;
      errors.name = 'Name is required';
    }

    if (!formData.email) {
      formIsValid = false;
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formIsValid = false;
      errors.email = 'Email is invalid';
    }

    if (!formData.message) {
      formIsValid = false;
      errors.message = 'Message is required';
    }

    setFormErrors(errors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Handle form submission, e.g., send data to a server
      alert('Form submitted successfully!');
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }
  };

  return (
    <>
      <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Contact Me
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {formErrors.name && (
              <p className="text-red-500 text-sm mt-2">{formErrors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {formErrors.email && (
              <p className="text-red-500 text-sm mt-2">{formErrors.email}</p>
            )}
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            {formErrors.message && (
              <p className="text-red-500 text-sm mt-2">{formErrors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Footer Section */}
      <footer className="bg-base-200 text-base-content py-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-primary mb-4">Get in Touch</h2>
          <p className="text-lg mb-6">
            I’m always open to new opportunities and collaborations. Feel free
            to contact me, and let's create something great together!
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-focus text-3xl transition-colors"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-focus text-3xl transition-colors"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="mailto:your-email@example.com"
              className="text-primary hover:text-primary-focus text-3xl transition-colors"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>

          <div className="text-lg text-neutral">
            <p>
              If you'd like to discuss a project or need more information, don’t
              hesitate to reach out!
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
