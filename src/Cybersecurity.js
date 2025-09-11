// pages/Cybersecurity.js
import React from "react";
import cyberImg from "../src/assets/Cybermain.jpg";
import "./ServicePages.css";
import { Helmet } from "react-helmet-async";


const Cybersecurity = () => {
  return (
    <div className="service-page" style={{ background: "#f9f9f9" }}>
      <Helmet>
  <title>Cybersecurity Services | PT Indo Infotech</title>
  <meta
    name="description"
    content="Protect your business from cyber threats with PT Indo Infotech’s cybersecurity solutions — firewalls, threat monitoring, and data protection."
  />
  <meta property="og:title" content="Cybersecurity - PT Indo Infotech" />
  <meta property="og:description" content="Stay secure with advanced cybersecurity solutions for your business." />
  <meta property="og:image" content="https://yourdomain.com/assets/cybersecurity-banner.jpg" />
</Helmet>
      {/* Hero Section */}
      <section className="service-hero" style={{ background: "linear-gradient(135deg, #d24c4cff, #bba6a6ff)" }} data-aos="fade-down">
        <h1 data-aos="fade-right"><b>Cybersecurity Services</b></h1>
        <p data-aos="fade-right"><b>Protect your networks, systems, and data from cyber threats with our expert solutions.</b></p>
      </section>

      {/* Main Section */}
      <section className="service-main"  >
        <div className="main-image" data-aos="fade-right">
          <img src={cyberImg} alt="Cybersecurity Services" />
        </div>
       <div className="main-text" data-aos="fade-left">
  <h2>Why Cybersecurity Matters</h2>
  <p>
    In today’s digital age, cybersecurity is no longer optional — it is a 
    critical foundation for every business. Cyber threats such as data breaches, 
    ransomware attacks, phishing, and insider risks can cause financial loss, 
    damage your reputation, and disrupt operations.
  </p>
  <p>
    Our cybersecurity services are designed to protect your organization against 
    evolving threats by providing proactive monitoring, advanced threat detection, 
    and rapid incident response. We safeguard your sensitive data, ensure business 
    continuity, and build trust with your customers.
  </p>
  <p>
    We go beyond basic protection by implementing multi-layered security measures, 
    including firewalls, intrusion prevention systems, encryption, access control, 
    and continuous vulnerability assessments. 
  </p>
  <p>
    Compliance is also a key priority. Our team helps you meet industry-specific 
    standards such as GDPR, HIPAA, and ISO, ensuring your business stays compliant 
    and avoids costly penalties. 
  </p>
  <p>
    With us as your cybersecurity partner, you gain peace of mind knowing that 
    your digital environment is secure, resilient, and future-ready — so you can 
    focus on growth while we protect what matters most. 
  </p>
</div>
<div><p>
    Every business, regardless of size, is a potential target for cybercrime. 
    From phishing scams and ransomware to insider threats and data theft, the 
    risks are growing more sophisticated every day. A single breach can result 
    in financial loss, reputational damage, regulatory fines, and loss of 
    customer trust.
  </p>

  <p>
    Our Cybersecurity Services are built to address these challenges with a 
    proactive, layered approach. We combine advanced technology, proven 
    strategies, and expert guidance to secure your digital infrastructure 
    against both internal and external threats.
  </p>

  <p>
    <b>Comprehensive Protection:</b> We provide real-time monitoring, intrusion 
    detection, endpoint security, and threat intelligence to identify and 
    neutralize risks before they cause harm.
  </p>

  <p>
    <b>Data Privacy & Compliance:</b> Staying compliant with industry standards 
    such as GDPR, HIPAA, PCI-DSS, and ISO is critical. Our solutions ensure your 
    business meets these requirements while keeping sensitive data fully 
    protected.
  </p>

  <p>
    <b>Disaster Recovery & Continuity:</b> We prepare your business for the 
    unexpected by implementing backup strategies, disaster recovery planning, 
    and rapid response measures to minimize downtime in case of a breach.
  </p>

  <p>
    <b>Employee Awareness:</b> Human error is one of the biggest security risks. 
    We provide training and awareness programs to empower your staff to identify 
    suspicious activity and practice safe digital habits.
  </p>

  <p>
    <b>Future-Ready Security:</b> As cyber threats evolve, so do our defenses. 
    We continuously update and optimize your security environment with the latest 
    tools and best practices, ensuring you stay one step ahead of attackers.
  </p>

  <p>
    Partnering with us means more than just installing firewalls and antivirus. 
    It means gaining a trusted cybersecurity partner dedicated to protecting 
    your business, your data, and your reputation — so you can operate with 
    confidence in today’s digital landscape.
  </p>
</div>

      </section>

      {/* Features Section */}
      <section className="service-features"data-aos="fade-right">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-card" data-aos="fade-right">
            <h3>Network Security</h3>
            <p>Protect your internal and external network from unauthorized access.</p>
          </div>
          <div className="feature-card" data-aos="fade-right">
            <h3>Data Protection</h3>
            <p>Secure your sensitive business data against loss or theft.</p>
          </div>
          <div className="feature-card" data-aos="fade-right">
            <h3>Threat Analysis</h3>
            <p>Continuous monitoring and assessment to prevent attacks.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cybersecurity;
