import React from 'react'
import "./Home.css"
import { Helmet } from "react-helmet-async";

const Contactform = () => {
  return (
    
   <section className="contact-section">
    <Helmet>
  <title>Contact Us | PT Indo Infotech</title>
  <meta
    name="description"
    content="Get in touch with PT Indo Infotech. Contact us today for cloud, cybersecurity, IT consulting, and managed services."
  />
  <meta property="og:title" content="Contact PT Indo Infotech" />
  <meta property="og:description" content="We’d love to hear from you. Reach out for IT services and support." />
  <meta property="og:image" content="https://yourdomain.com/assets/contact-banner.jpg" />
</Helmet>

  <div className="container">
    <h2 className="text-center mb-4">Contact Us</h2>
    <p className="text-center mb-5">
      We’d love to hear from you. Fill out the form below and we’ll get back to you shortly.
    </p>

    <div className="contact-row">
      {/* Map on the left */}
      <div className="contact-map" data-aos="fade-right">
        <iframe
          title="Company Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5441107841525!2d106.82674407531144!3d-6.191699693795916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f423561498d1%3A0x54dc8507d17324ba!2sJl.%20Yusuf%20Adiwinata%20No.32%2C%20RT.2%2FRW.3%2C%20Gondangdia%2C%20Kec.%20Menteng%2C%20Kota%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2010350%2C%20Indonesia!5e0!3m2!1sen!2sin!4v1757312092657!5m2!1sen!2sin" width="600" height="450"  style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
         
        ></iframe>
      </div>

      {/* Contact Form on the right */}
      <div className="contact-form" data-aos="fade-left">
        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" placeholder="Your Name" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Your Email" />
          </div>
          <div className="mb-3">
            <label className="form-label">Subject</label>
            <input type="text" className="form-control" placeholder="Subject" />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea rows="5" className="form-control" placeholder="Write your message"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  </div>
</section>

  )
}

export default Contactform