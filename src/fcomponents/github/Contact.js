// Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="p-5">
      <div className="container">
        <h2 className="text-center mb-4">Contact Information</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="bg-light p-4">
              <p style={{ fontSize: 'medium' }}> You can reach us at:</p>
              <p style={{ fontSize: 'medium' }}>Email: zohaib@737.com</p>
              <p style={{ fontSize: 'medium' }}>Phone: (+92) 336-8865717</p>
            </div>
          </div>
          <div className="col-md-6">
            <form className="bg-light text-dark p-4">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea className="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
