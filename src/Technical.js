// pages/TechnicalSupport.js
import React from "react";
import supportImg from "../src/assets/Technicalmain.jpg";
import "./ServicePages.css";
import { Helmet } from "react-helmet-async";

const TechnicalSupport = () => {
  return (
    <div className="service-page" style={{ background: "#f9fafaff" }}>
      <Helmet>
  <title>Technical Support | PT Indo Infotech</title>
  <meta
    name="description"
    content="Get expert technical support for your IT systems, ensuring minimal downtime and maximum productivity."
  />
  <meta property="og:title" content="Technical Support - PT Indo Infotech" />
  <meta property="og:description" content="24/7 IT technical support to keep your business running smoothly." />
  <meta property="og:image" content="https://yourdomain.com/assets/technical-banner.jpg" />
</Helmet>

      <section className="service-hero" style={{ background: "linear-gradient(135deg, #eae7edff, #6620f3ff)" }}data-aos="fade-down">
        <h1 data-aos="fade-right"><b>Technical Support</b></h1>
        <p data-aos="fade-left"><b>Helpdesk support for software, hardware, and IT issues, ensuring minimal downtime.</b></p>
      </section>

      <section className="service-main"data-aos="fade-up">
        <div className="main-image" data-aos='fade-right'>
          <img src={supportImg} alt="Technical Support" />
        </div>
        <div className="main-text">
  <h2>Why Our Support?</h2>

  <p>
    In today’s fast-paced business environment, even the smallest IT issue can 
    disrupt operations, reduce productivity, and create unnecessary stress for 
    your team. That’s why having reliable IT support isn’t just an option — it’s 
    a necessity for keeping your business running smoothly. 
  </p>

  <p>
    Our support services are built on the promise of <b>speed, reliability, and 
    expertise</b>. Whether it’s a minor software glitch, hardware malfunction, 
    or a critical system failure, our team is ready to resolve issues quickly so 
    your operations face minimal downtime. 
  </p>

  <p>
    <b>Comprehensive Troubleshooting:</b> From desktops and servers to cloud 
    platforms and mobile devices, we handle all kinds of IT problems across 
    hardware and software environments. 
  </p>

  <p>
    <b>24/7 Availability:</b> Technology doesn’t sleep, and neither do we. Our 
    round-the-clock support ensures help is always available when you need it 
    most. 
  </p>
  </div>
  <div data-aos="fade-left" style={{marginTop:"20px"}}>

  <p>
    <b>Proactive Assistance:</b> We don’t just fix problems after they occur — 
    we monitor systems, identify potential issues, and take preventive measures 
    to avoid disruptions. 
  </p>

  <p>
    <b>Expert Guidance:</b> Beyond troubleshooting, our team provides advice and 
    recommendations on improving efficiency, upgrading systems, and optimizing 
    performance for long-term growth. 
  </p>

  <p>
    <b>User-Friendly Support:</b> We understand that IT can be complex, so we 
    explain solutions in clear, simple terms to make sure your team feels 
    confident and supported at every step. 
  </p>

  <p>
    Choosing our IT support means more than just resolving technical issues — it 
    means gaining a trusted partner dedicated to keeping your business connected, 
    productive, and future-ready. 
  </p>
</div>

      </section>

      <section className="service-features" data-aos="fade-up">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-card" data-aos="fade-right">
            <h3>24/7 Helpdesk</h3>
            <p>Always available support team to resolve your issues fast.</p>
          </div>
          <div className="feature-card" data-aos="fade-right">
            <h3>Remote Assistance</h3>
            <p>Resolve technical issues without waiting for on-site visits.</p>
          </div>
          <div className="feature-card" data-aos="fade-right">
            <h3>Expert Team</h3>
            <p>Certified professionals to ensure accurate solutions every time.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnicalSupport;
