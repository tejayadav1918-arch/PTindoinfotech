// pages/SystemIntegration.js
import React from "react";
import systemImg from "../src/assets/Systemmain.jpg";
import "./ServicePages.css";
import { Helmet } from "react-helmet-async";

const SystemIntegration = () => {
  return (
    <div className="service-page" style={{ background: "#f9f9ff" }}>
      <Helmet>
  <title>System Integration | PT Indo Infotech</title>
  <meta
    name="description"
    content="Integrate software, hardware, and networking systems to streamline workflows and boost efficiency."
  />
  <meta property="og:title" content="System Integration - PT Indo Infotech" />
  <meta property="og:description" content="Seamlessly integrate your IT systems for better performance." />
  <meta property="og:image" content="https://yourdomain.com/assets/system-banner.jpg" />
</Helmet>
      <section className="service-hero" style={{ background: "linear-gradient(135deg, #e5d6e3ff, #176dcaff)" }}data-aos="fade-down">
        <h1 data-aos="fade-right"><b>System Integration</b></h1>
        <p data-aos="fade-left"><b>Connecting different IT systems seamlessly to optimize operations and productivity.</b></p>
      </section>

      <section className="service-main"data-aos="fade-up">
        <div className="main-image" data-aos="fade-right">
          <img src={systemImg} alt="System Integration" />
        </div>
       <div className="main-text">
  <h2>Why System Integration?</h2>

  <p>
    In today’s digital landscape, businesses rely on multiple tools, 
    applications, and platforms to manage operations. Without proper integration, 
    these systems often work in isolation, leading to data silos, inefficiencies, 
    and miscommunication across departments. 
  </p>

  <p>
    Our System Integration services bring all your technology together into a 
    unified ecosystem — seamlessly connecting <b>software, hardware, and network 
    systems</b> so they work as one. This not only improves efficiency but also 
    ensures consistency, accuracy, and smooth collaboration throughout your 
    organization. 
  </p>

  <p>
    <b>Improved Efficiency:</b> By eliminating duplicate processes and automating 
    workflows, integration reduces manual tasks and accelerates decision-making. 
  </p>

  <p>
    <b>Data Consistency:</b> Integrated systems ensure that data is accurate, 
    up-to-date, and available in real-time across departments, preventing 
    errors and miscommunication. 
  </p>
</div>
<div data-aos="fade-left" style={{marginTop:"20px"}}>
  <p>
    <b>Enhanced Collaboration:</b> Teams can work more effectively with shared 
    access to information, applications, and resources, improving overall 
    productivity. 
  </p>

  <p>
    <b>Scalability:</b> As your business grows, our integration solutions allow 
    you to connect new tools, applications, and platforms without disrupting 
    existing workflows. 
  </p>

  <p>
    <b>Cost Savings:</b> With optimized processes and reduced redundancies, 
    integration helps cut operational costs while maximizing the return on 
    existing technology investments. 
  </p>

  <p>
    Choosing our System Integration services means gaining a connected, 
    future-ready IT environment that empowers your business to operate more 
    intelligently, efficiently, and competitively. 
  </p>
</div>

      </section>

      <section className="service-features"data-aos="fade-up">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-card" data-aos="fade-right"> 
            <h3>Seamless Integration</h3>
            <p>Connect systems without disrupting existing processes.</p>
          </div>
          <div className="feature-card" data-aos="fade-right">
            <h3>Data Synchronization</h3>
            <p>Ensure all systems have consistent and accurate data.</p>
          </div>
          <div className="feature-card" data-aos="fade-right">
            <h3>Improved Efficiency</h3>
            <p>Reduce manual work and improve productivity with integrated systems.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SystemIntegration;
