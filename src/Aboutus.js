import React from "react";
import "./Aboutus.css";
import mission from "./assets/mision.png"
import Vision from "./assets/Vision.png"
import team from "./assets/Team.jpg"
import { Helmet } from "react-helmet-async";
export const AboutUs = () => {
    return (
  <div className="about-page" >
    <Helmet>
  <title>About Us | PT Indo Infotech</title>
  <meta
    name="description"
    content="Learn about PT Indo Infotech — our mission, values, and commitment to delivering innovative IT services worldwide."
  />
  <meta property="og:title" content="About PT Indo Infotech" />
  <meta property="og:description" content="Our mission is to empower businesses with secure, scalable IT solutions." />
  <meta property="og:image" content="https://yourdomain.com/assets/about-banner.jpg" />
</Helmet>
      {/* Hero Banner */}
      <section className="about-hero"data-aos="fade-left">
        <div className="about-hero-overlay">
          <div className="about-hero-text">
            <h1 data-aos="fade-right"><b>ABOUT US</b></h1>
            <p data-aos="fade-right"><b>
              We are committed to delivering innovative IT solutions that empower businesses to succeed in the digital world.
            </b></p>
          </div>
        </div>
      </section>

      {/* Zig-Zag Sections */}
      <section className="about-zigzag"data-aos="fade-up">
        {/* Section 1: Mission */}
        <div className="zigzag-item">
          <div className="zigzag-image" data-aos="fade-right">
            <img src={mission} alt="Our Mission" />
          </div>
          <div className="zigzag-text" data-aos="fade-left">
            <h2>Our Mission</h2>
            <p>
              Our mission is to deliver innovative IT solutions that help businesses grow efficiently and securely.
            </p>
            <p>
              We focus on understanding our clients’ unique challenges and providing customized solutions that drive measurable results.  
              By combining advanced technology with expert insights, we aim to streamline operations and improve business performance.
            </p>
            <ul>
              <li>Deliver high-quality software solutions tailored to business needs</li>
              <li>Ensure security, scalability, and reliability in all projects</li>
              <li>Empower businesses with digital transformation strategies</li>
              <li>Provide continuous support and expert consulting services</li>
            </ul>
            <p>
              Our team works closely with clients to ensure that each project aligns with their long-term goals, fostering trust and lasting partnerships.
            </p>
          </div>
        </div>

        {/* Section 2: Vision */}
        <div className="zigzag-item reverse" data-aos="fade-up">
          <div className="zigzag-image" data-aos="fade-left">
            <img src={Vision} alt="Our Vision" />
          </div>
          <div className="zigzag-text" data-aos="fade-right">
            <h2>Our Vision</h2>
            <p>
              We envision a world where technology seamlessly empowers every business to reach its full potential.
            </p>
            <p>
              Our goal is to create solutions that not only meet current business needs but also anticipate future challenges.  
              Innovation, agility, and strategic thinking are at the core of everything we do.
            </p>
            <ul>
              <li>Transform traditional workflows with modern IT solutions</li>
              <li>Enable smarter decision-making through data-driven insights</li>
              <li>Foster sustainable growth and efficiency</li>
              <li>Build technology that adapts to evolving business landscapes</li>
            </ul>
            <p>
              We continuously explore emerging technologies and industry trends to ensure our clients remain competitive and future-ready.
            </p>
          </div>
        </div>

        {/* Section 3: Team */}
        <div className="zigzag-item"data-aos="fade-up">
          <div className="zigzag-image" data-aos="fade-right">
            <img src={team} alt="Our Team" />
          </div>
          <div className="zigzag-text" data-aos="fade-left">
            <h2>Our Team</h2>
            <p>
              Our team is composed of skilled professionals dedicated to providing innovative solutions and excellent service.
            </p>
            <p>
              Each member brings expertise in their field, from software development and cloud solutions to cybersecurity and IT consulting.
            </p>
            <ul>
              <li>Experienced developers and engineers</li>
              <li>Strategic consultants and project managers</li>
              <li>Creative designers and UX specialists</li>
              <li>Support and maintenance experts</li>
            </ul>
            <p>
              We believe collaboration, continuous learning, and a passion for technology are key to delivering exceptional results for our clients.
            </p>
          </div>
        </div>
      </section>
    </div>


  );
};

export default AboutUs;
