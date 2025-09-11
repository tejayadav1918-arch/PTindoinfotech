// pages/DataBackupRecovery.js
import React from "react";
import backupImg from "../src/assets/Datamain.jpg";
import "./ServicePages.css";
import { Helmet } from "react-helmet-async";

const DataBackupRecovery = () => {
  return (
    <div className="service-page" style={{ background: "#fffaf0" }}>
      <Helmet>
  <title>Data Backup & Recovery | PT Indo Infotech</title>
  <meta
    name="description"
    content="Ensure business continuity with our secure data backup and recovery solutions. Protect your critical business data."
  />
  <meta property="og:title" content="Data Backup & Recovery - PT Indo Infotech" />
  <meta property="og:description" content="Keep your business safe with automated backup and disaster recovery." />
  <meta property="og:image" content="https://yourdomain.com/assets/data-backup-banner.jpg" />
</Helmet>
      <section className="service-hero" style={{ background: "linear-gradient(135deg, #fff0d0, #ffd090)" }}data-aos="fade-up">
        <h1 data-aos="fade-right"><b>Data Backup & Recovery</b></h1>
        <p data-aos="fade-left"><b>Backup, storage, and disaster recovery solutions to safeguard your critical business data.</b></p>
      </section>

      <section className="service-main" data-aos="fade-up">
        <div className="main-image" data-aos="fade-right">
          <img src={backupImg} alt="Data Backup & Recovery" />
        </div>
        <div className="main-text" data-aos="fade-left">
  <h2>Why Backup & Recovery?</h2>

  <p>
    Data is one of the most valuable assets of any business — but it’s also one 
    of the most vulnerable. Accidental deletions, hardware failures, ransomware 
    attacks, and natural disasters can all lead to sudden data loss, causing 
    downtime, financial loss, and damage to your reputation. 
  </p>

  <p>
    Our Backup & Recovery solutions are designed to give you peace of mind by 
    ensuring that your critical information is always <b>protected, accessible, 
    and recoverable</b> when you need it most. We go beyond simple backups, 
    delivering a complete strategy to keep your business running even in the 
    face of unexpected events. 
  </p>

  <p>
    <b>Automated Backups:</b> Regular, automated backups ensure that your files, 
    applications, and databases are always up to date without relying on manual 
    processes. 
  </p>

  <p>
    <b>Fast Recovery:</b> In the event of data loss or system failure, our 
    recovery solutions minimize downtime by restoring your data quickly and 
    efficiently. 
  </p>
</div>
<div data-aos="fade-left" style={{marginTop:"20px"}}>
  <p>
    <b>Secure Storage:</b> We use advanced encryption and secure storage options, 
    including both on-premises and cloud-based systems, to keep your data safe 
    from unauthorized access. 
  </p>

  <p>
    <b>Disaster Recovery Planning:</b> Beyond backups, we design disaster 
    recovery strategies that prepare your business for large-scale disruptions, 
    ensuring continuity and resilience. 
  </p>

  <p>
    <b>Scalable Solutions:</b> As your business grows, our backup and recovery 
    systems scale with you, providing flexible options to match your changing 
    needs. 
  </p>

  <p>
    Choosing our Backup & Recovery services means your business is always ready 
    for the unexpected. With secure, reliable, and fast recovery options, you 
    can operate with confidence knowing that your data — and your business — is 
    protected at all times. 
  </p>
</div>

      </section>

      <section className="service-features"data-aos="fade-up">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-card" data-aos="fade-right">
            <h3>Automated Backup</h3>
            <p>Regular scheduled backups to prevent accidental loss.</p>
          </div>
          <div className="feature-card" data-aos="fade-right">
            <h3>Disaster Recovery</h3>
            <p>Quick recovery of data in case of emergencies or failures.</p>
          </div>
          <div className="feature-card" data-aos="fade-right">
            <h3>Cloud Storage</h3>
            <p>Secure off-site storage accessible from anywhere.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataBackupRecovery;
