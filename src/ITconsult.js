// pages/ITConsulting.js
import React from "react";
import consultImg from "../src/assets/ITCONSULTmain.jpg";
import "./ServicePages.css";
import { Helmet } from "react-helmet-async";

const ITConsulting = () => {
  return (
    <div className="service-page" style={{ background: "#f0f7f2" }}>
      <Helmet>
  <title>IT Consulting | PT Indo Infotech</title>
  <meta
    name="description"
    content="Expert IT consulting services to guide your business through digital transformation and optimize IT infrastructure."
  />
  <meta property="og:title" content="IT Consulting - PT Indo Infotech" />
  <meta property="og:description" content="Transform your business with expert IT consulting and strategy." />
  <meta property="og:image" content="https://yourdomain.com/assets/it-consult-banner.jpg" />
</Helmet>
      <section className="service-hero" style={{ background: "linear-gradient(135deg, #6549d7ff, #26cf14ff)" }}data-aos="fade-up">
        <h1 data-aos="fade-left"><b>IT Consulting</b></h1>
        <p data-aos="fade-left"><b>Strategic guidance on technology adoption, IT planning, and digital transformation.</b></p>
      </section>

      <section className="service-main" data-aos="fade-up">
        <div className="main-image" data-aos="fade-right">
          <img src={consultImg} alt="IT Consulting" />
        </div>
        <div className="main-text" data-aos="fade-left">
  <h2>Why Choose Our Consulting?</h2>

  <p>
    Technology is at the core of modern business success, but without the right 
    guidance, it can become costly and complex. Our IT consulting services are 
    designed to bridge the gap between business goals and technology solutions, 
    helping you make smarter decisions that drive long-term growth. 
  </p>

  <p>
    We provide <b>strategic IT roadmaps</b> that align technology with your 
    organization’s objectives, ensuring that every investment you make delivers 
    measurable results. Whether you’re looking to modernize infrastructure, 
    migrate to the cloud, enhance security, or adopt new digital tools, our 
    experts guide you at every step. 
  </p>

  <p>
    <b>Optimized Resources:</b> We analyze your current IT landscape to identify 
    inefficiencies, reduce costs, and maximize the value of your technology 
    investments. 
  </p>

  <p>
    <b>Improved Efficiency:</b> By streamlining processes and adopting the right 
    solutions, we help your teams work smarter, faster, and more collaboratively. 
  </p>

  <p>
    <b>Cutting-Edge Solutions:</b> Our consultants stay up to date with emerging 
    technologies such as AI, cloud computing, and automation, ensuring your 
    business remains competitive in a rapidly changing digital world. 
  </p>
</div>
<div data-aos="fade-left" style={{marginTop:"20px"}}>
  
  <p>
    In a world where technology evolves at lightning speed, making the right 
    IT decisions can be challenging. The wrong investment can lead to wasted 
    resources, inefficiency, and lost opportunities. That’s where our IT 
    consulting services make the difference — providing you with the expertise, 
    strategy, and vision to use technology as a true business enabler. 
  </p>

  <p>
    Our consulting approach is centered on <b>aligning technology with your 
    business goals</b>. We take the time to understand your challenges, analyze 
    your current systems, and design a roadmap that supports both short-term 
    improvements and long-term success. 
  </p>
</div>

      </section>

      <section className="service-features" data-aos="fade-up">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-card" data-aos="fade-right">
            <h3>IT Strategy</h3>
            <p>Plan your IT roadmap for future growth and scalability.</p>
          </div>
          <div className="feature-card" data-aos="fade-right">
            <h3>Technology Guidance</h3>
            <p>Expert recommendations for hardware, software, and cloud solutions.</p>
          </div>
          <div className="feature-card" data-aos="fade-right">
            <h3>Risk Assessment</h3>
            <p>Identify IT risks and mitigate potential challenges before they occur.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITConsulting;
