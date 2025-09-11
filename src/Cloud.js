// pages/CloudServices.js
import React from "react";
import cloudImg from "../src/assets/cloud.jpg"; // replace with your image path
import "./ServicePages.css";
import { Helmet } from "react-helmet-async";

const CloudServices = () => {
  return (
    <div className="service-page" style={{ background: "#f0f8ff" }}>
      <Helmet>
  <title>Cloud Solutions | PT Indo Infotech</title>
  <meta
    name="description"
    content="PT Indo Infotech provides scalable cloud solutions to improve business efficiency, security, and performance."
  />
  <meta property="og:title" content="Cloud Solutions - PT Indo Infotech" />
  <meta property="og:description" content="Optimize your business with secure and scalable cloud solutions." />
  <meta property="og:image" content="https://yourdomain.com/assets/cloud-banner.jpg" />
</Helmet>
      {/* Hero Section */}
      <section className="service-hero" style={{ background: "linear-gradient(135deg, #e88247ff, #f1dccbff)" }} data-aos="fade-down">
        <h1 data-aos="fade-right"><b>Cloud Services</b></h1>
        <p data-aos="fade-right"><b>Scalable, secure cloud hosting, storage, and SaaS solutions tailored to your business needs.</b></p>
      </section>

      {/* Main Section */}
      <section className="service-main">
        <div className="main-image"data-aos="fade-right">
          <img src={cloudImg} alt="Cloud Services" />
        </div>
        <div className="main-text" data-aos="fade-left">
  <h2><b>Why Our Cloud Services?</b></h2>
  <p>
    Our cloud solutions are designed to be flexible, scalable, and cost-efficient, 
    ensuring your business can adapt quickly to changing needs without heavy 
    upfront investments in hardware or infrastructure.
  </p>
  <p>
    From secure data storage and virtual hosting to SaaS integration and 
    collaborative workspaces, we make it easy for your team to access 
    information and applications anytime, anywhere. 
  </p>
  <p>
    Security is a top priority — with advanced encryption, compliance-ready 
    solutions, and disaster recovery options, your data remains protected 
    and accessible even during unexpected events. 
  </p>
  <p>
    Whether you’re moving to the cloud for the first time or optimizing 
    existing systems, our experts provide a smooth migration process with 
    minimal downtime and maximum efficiency. 
  </p>
  <p>
    By leveraging our cloud services, your business gains increased agility, 
    reduced costs, and the freedom to scale resources as you grow — empowering 
    you to stay competitive in today’s digital-first world.
  </p>
</div>
<div data-aos="fade-left" style={{marginTop:"20px"}}>
  <p>
    Cloud computing is no longer an option — it’s the backbone of modern 
    businesses. Our Cloud Services are designed to give your organization 
    the flexibility, security, and efficiency needed to thrive in today’s 
    competitive digital landscape. 
  </p>
  <p>
    We offer end-to-end cloud solutions, from secure data storage and 
    application hosting to full-scale SaaS integration and cloud-native 
    infrastructure. Whether you’re a growing startup or an established 
    enterprise, our services adapt seamlessly to your unique requirements. 
  </p>
  <p>
    <b>Unmatched Security:</b> With enterprise-grade encryption, multi-factor 
    authentication, and compliance-ready platforms, your sensitive business 
    data is protected at every layer. Our disaster recovery and backup 
    strategies ensure business continuity even during unexpected challenges. 
  </p>
  <p>
    <b>Seamless Collaboration:</b> Empower your team with anytime, anywhere 
    access to files, applications, and shared workspaces. Our cloud 
    environment improves collaboration across departments and boosts 
    productivity without sacrificing security. 
  </p>
  <p>
    <b>Scalability & Cost Savings:</b> Say goodbye to heavy hardware expenses. 
    Our pay-as-you-grow model allows you to scale storage, computing power, 
    and applications on demand — ensuring you only pay for what you use. 
  </p>
  <p>
    <b>Smooth Migration:</b> Transitioning to the cloud can be complex, but our 
    expert team ensures a hassle-free migration with minimal downtime. From 
    planning to execution, we handle the technical complexities so you can 
    stay focused on running your business. 
  </p>
  <p>
    <b>Future-Ready Solutions:</b> We don’t just set up your cloud — we 
    continuously optimize it with the latest innovations, so your business 
    stays ahead of the curve in a rapidly evolving market. 
  </p>
  <p>
    Choosing our Cloud Services means gaining more than technology — it means 
    gaining a trusted partner who ensures reliability, agility, and growth 
    every step of the way. 
  </p>
</div>
      </section>

      {/* Features Section */}
      <section className="service-features" data-aos="fade-up">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-card" data-aos="fade-right">
            <h3>Cloud Hosting</h3>
            <p>Reliable and scalable hosting for all your applications.</p>
          </div>
          <div className="feature-card"   data-aos="fade-right">
            <h3>Data Storage</h3>
            <p>Secure storage solutions with easy access from anywhere.</p>
          </div>
          <div className="feature-card"  data-aos="fade-right">
            <h3>SaaS Solutions</h3>
            <p>Integrate software as a service for seamless operations.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudServices;
