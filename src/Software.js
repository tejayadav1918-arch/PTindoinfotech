// pages/SoftwareDevelopment.js
import React from "react";
import softwareImg from "../src/assets/Softwaremain.jpg";
import "./ServicePages.css";
import { Helmet } from "react-helmet-async";

const SoftwareDevelopment = () => {
  return (
    <div className="service-page" style={{ background: "#fff8f0" }}>
      <Helmet>
  <title>Software Development | PT Indo Infotech</title>
  <meta
    name="description"
    content="Custom software development services to build innovative and scalable solutions for your business needs."
  />
  <meta property="og:title" content="Software Development - PT Indo Infotech" />
  <meta property="og:description" content="We build scalable software solutions tailored to your business." />
  <meta property="og:image" content="https://yourdomain.com/assets/software-banner.jpg" />
</Helmet>
      <section className="service-hero" style={{ background: "linear-gradient(135deg, #ed9e77ff, #dcec2bff)" }}data-aos="fade-down">
        <h1 data-aos="fade-right">Software Development</h1>
        <p data-aos="fade-right">Custom applications and software solutions built for your unique business needs.</p>
      </section>

      <section className="service-main"data-aos="fade-up">
        <div className="main-image" data-aos="fade-right">
          <img src={softwareImg} alt="Software Development" />
        </div>
        <div className="main-text" data-aos="fade-left">
  <h2>Our Development Approach</h2>

  <p>
    Building software isn’t just about writing code — it’s about creating 
    reliable, scalable, and secure solutions that solve real business 
    challenges. Our development approach combines technical expertise with 
    a strong focus on quality, collaboration, and innovation. 
  </p>

  <p>
    We follow a structured process that covers every stage of the software 
    lifecycle, ensuring your project is delivered on time, within budget, and 
    tailored to your unique requirements. From the initial planning phase to 
    deployment and ongoing support, our team works closely with you to build 
    solutions that grow with your business. 
  </p>

  <p>
    <b>Planning & Strategy:</b> We begin by understanding your vision, defining 
    clear goals, and creating a roadmap that aligns with your business 
    objectives. 
  </p>
</div>
<div data-aos="fade-left" style={{marginTop:"20px"}}>
  <p>
    <b>Agile Development:</b> Using modern methodologies like Agile and DevOps, 
    we ensure rapid development cycles, continuous testing, and early feedback 
    so the final product truly matches your expectations. 
  </p>

  <p>
    <b>Quality & Security:</b> Every application we deliver is tested for 
    performance, scalability, and security. We follow industry best practices to 
    safeguard data and ensure compliance with global standards. 
  </p>

  <p>
    <b>Innovation & Scalability:</b> We leverage the latest technologies — from 
    cloud platforms to AI and automation — to build solutions that are not only 
    innovative but also ready to scale as your business grows. 
  </p>

  <p>
    <b>Deployment & Support:</b> Our job doesn’t end at delivery. We provide 
    smooth deployment, ongoing monitoring, and dedicated support to ensure 
    long-term success and adaptability. 
  </p>

  <p>
    With our development approach, you don’t just get software — you get a 
    reliable, future-ready solution built to drive business value, reduce 
    risks, and accelerate growth. 
  </p>
</div>
      </section>

      <section className="service-features"data-aos="fade-up">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-card" data-aos="fade-right">
            <h3>Custom Applications</h3>
            <p>Tailored software to meet your business requirements precisely.</p>
          </div>
          <div className="feature-card" data-aos="fade-right">
            <h3>Agile Development</h3>
            <p>Iterative development with fast delivery and feedback integration.</p>
          </div>
          <div className="feature-card" data-aos="fade-right">
            <h3>Secure Code</h3>
            <p>Ensuring all applications are secure and compliant with industry standards.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoftwareDevelopment;
