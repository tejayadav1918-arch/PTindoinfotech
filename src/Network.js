// pages/NetworkManagement.js
import React from "react";
import netImg from "../src/assets/Networkmain.jpg";
import "./ServicePages.css";
import { Helmet } from "react-helmet-async";

const NetworkManagement = () => {
  return (
    
    <div className="service-page" style={{ background: "#f4f8ff" }}>
      <Helmet>
  <title>Networking Solutions | PT Indo Infotech</title>
  <meta
    name="description"
    content="Build a secure and reliable IT network infrastructure with PT Indo Infotech. From setup to monitoring and maintenance."
  />
  <meta property="og:title" content="Networking Solutions - PT Indo Infotech" />
  <meta property="og:description" content="Strengthen your business with secure and scalable networking solutions." />
  <meta property="og:image" content="https://yourdomain.com/assets/network-banner.jpg" />
</Helmet>
      <section className="service-hero" style={{ background: "linear-gradient(135deg, #d0e4ff, #a0c4ff)" }}data-aos="fade-down">
        <h1 data-aos="fade-right"><b>Network Management</b></h1>
        <p data-aos="fade-right"><b>Design, setup, and maintenance of reliable and secure networks for your business.</b></p>
      </section>

      <section className="service-main"data-aos="fade-up">
        <div className="main-image" data-aos="fade-right">
          <img src={netImg} alt="Network Management" />
        </div>
        <div className="main-text" data-aos="fade-left">
  <h2>Why Network Management?</h2>

  <p>
    A reliable network is the backbone of every modern business. From smooth 
    communication and collaboration to secure data transfer and uninterrupted 
    operations, your network directly impacts productivity and customer 
    satisfaction. Without proper management, networks can face downtime, 
    security risks, and performance bottlenecks that slow down growth. 
  </p>

  <p>
    Our Network Management services ensure that your IT infrastructure is 
    always running at peak efficiency. We provide <b>end-to-end setup, 
    monitoring, and optimization</b> of your network systems — covering 
    everything from switches and routers to firewalls and wireless 
    connections. 
  </p>

  <p>
    <b>24/7 Monitoring:</b> Continuous tracking of network activity allows us to 
    detect and resolve issues before they cause downtime or affect performance. 
  </p>

  <p>
    <b>Performance Optimization:</b> We analyze traffic patterns, bandwidth 
    usage, and system loads to fine-tune your network for speed, scalability, 
    and reliability. 
  </p>

  <p>
    <b>Security & Compliance:</b> With firewalls, intrusion prevention systems, 
    and regular updates, we safeguard your network against cyber threats while 
    ensuring compliance with industry standards. 
  </p>
</div>
<div data-aos="fade-left" style={{marginTop:"20px"}}>
  
  <p>
    <b>Proactive Maintenance:</b> Regular health checks, firmware updates, and 
    configuration reviews keep your network infrastructure robust and up to date. 
  </p>
  <p>
    <b>Scalable Solutions:</b> As your business grows, your network grows with 
    it. We design flexible architectures that adapt to increased workloads, 
    remote users, and cloud integrations. 
  </p>

  <p>
    <b>Expert Support:</b> Our team of specialists is always available to provide 
    fast response, troubleshooting, and strategic guidance for long-term 
    reliability. 
  </p>

  <p>
    With our network management approach, you gain more than technical support — 
    you gain a resilient, secure, and high-performing network that keeps your 
    business connected and competitive. 
  </p>
</div>

      </section>

      <section className="service-features"data-aos="fade-up">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-card" data-aos="fade-right">
            <h3>Network Setup</h3>
            <p>Install and configure wired and wireless networks efficiently.</p>
          </div>
          <div className="feature-card" data-aos="fade-right">
            <h3>Monitoring</h3>
            <p>Continuous monitoring to ensure performance and reliability.</p>
          </div>
          <div className="feature-card" data-aos="fade-right">
            <h3>Maintenance</h3>
            <p>Regular updates and troubleshooting for seamless network operation.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NetworkManagement;
