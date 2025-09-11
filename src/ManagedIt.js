// pages/ManagedIT.js
import React from "react";
import managedImg from "./assets/Managedmain.webp"; // replace with your image path
import "./ServicePages.css"; // single CSS file for all service pages
import { Helmet } from "react-helmet-async";

const ManagedIT = () => {
  return (
    <div className="service-page" style={{ background: "#f0f4ff" }}>
      <Helmet>
  <title>Managed IT Services | PT Indo Infotech</title>
  <meta
    name="description"
    content="Focus on your business while we manage your IT infrastructure, support, and maintenance with 24/7 reliability."
  />
  <meta property="og:title" content="Managed IT Services - PT Indo Infotech" />
  <meta property="og:description" content="Reliable and proactive IT support for businesses of all sizes." />
  <meta property="og:image" content="https://yourdomain.com/assets/managed-it-banner.jpg" />
</Helmet>
      {/* Hero Section */}
      <section className="service-hero" style={{ background: "linear-gradient(135deg, #e8eaf0ff, #22448eff)" }}data-aos="right">
        <h1 data-aos="fade-right" ><b>Managed IT Services</b></h1>
        <p data-aos="fade-right"><b>Outsourced management of IT infrastructure and systems to keep your business running smoothly.</b></p>
      </section>

      {/* Main Section */}
      <section className="service-main"data-aos="fade-up">
        <div className="main-image" data-aos="fade-right">
          <img src={managedImg} alt="Managed IT Services" />
        </div>
       <div className="main-text" data-aos="fade-left">
  <h2>Why Choose Our Managed IT Services?</h2>
  <p>
    We provide proactive IT support and 24/7 monitoring to prevent downtime, 
    safeguard data, and ensure your systems always perform at their best. 
  </p>
  <p>
    Our dedicated team keeps your infrastructure secure, updated, and optimized 
    with the latest technologies, minimizing risks and unexpected disruptions. 
  </p>
  <p>
    From network management and cloud integration to cybersecurity and disaster 
    recovery planning, we deliver tailored solutions that align with your 
    business goals. 
  </p>
  <p>
    Partnering with us means reducing IT costs, improving efficiency, and gaining 
    the peace of mind to focus on growing your business while we handle the 
    technical complexities. 
  </p>
  
</div>
<div data-aos="fade-left">
   <p>
    In today’s fast-paced digital world, businesses can’t afford unexpected 
    downtime or security vulnerabilities. That’s why our Managed IT Services 
    are designed to deliver reliable, secure, and scalable solutions that keep 
    your operations running smoothly 24/7. 
  </p>
  <p>
    We don’t just fix issues after they happen — we proactively monitor and 
    maintain your entire IT infrastructure to identify and resolve potential 
    problems before they impact your business. Our approach reduces risks, 
    maximizes uptime, and helps your team stay productive without interruptions. 
  </p>
  <p>
    Security is at the core of what we do. From implementing next-generation 
    firewalls and endpoint protection to ensuring data backups and disaster 
    recovery plans are in place, we safeguard your business from cyber threats 
    and data loss. Regular updates, security patches, and system optimizations 
    mean your environment stays ahead of evolving risks. 
  </p>
  <p>
    Whether you need network management, cloud migration, software integration, 
    or dedicated IT helpdesk support, our services are customized to match your 
    unique needs. We understand that every business is different, so we build 
    flexible IT strategies that grow with you. 
  </p>
  <p>
    Choosing us as your IT partner gives you more than technical support — 
    it gives you peace of mind. With reduced operational costs, improved 
    efficiency, and expert guidance at every step, you can focus on innovation 
    and growth while we take care of the technology that powers your success. 
  </p>
</div>

      </section>

      {/* Features Section */}
      <section className="service-features"data-aos="fade-up">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-card" data-aos="fade-right">
            <h3>24/7 Monitoring</h3>
            <p>Continuous monitoring of all your IT systems to prevent issues before they occur.</p>
          </div>
          <div className="feature-card"data-aos="fade-right">
            <h3>Proactive Maintenance</h3>
            <p>Regular updates and maintenance to ensure smooth operations and security.</p>
          </div>
          <div className="feature-card"data-aos="fade-right">
            <h3>Dedicated Support</h3>
            <p>Expert IT professionals ready to resolve any issues quickly and efficiently.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManagedIT;
