import React from "react";
import "./Home.css"; // custom styles
import main from "./assets/managed.jpg"; // main image
import cloud from "./assets/computing.jpg"; // cloud services image
import "bootstrap/dist/css/bootstrap.min.css";
import cyber from "./assets/cyber.jpg"; // cybersecurity image
import consult from "./assets/consult.webp"; // consulting image
import software from "./assets/software.png"; // software development image
import net from "./assets/net.png"
import technic from "./assets/technic.jpg"
import back from "./assets/back.jpg"
import system from "./assets/integration.jpg"
import Slider from "react-slick";
import software1 from "./assets/coding.png"
import cut from "./assets/Cutting.png"
import medal from "./assets/medals.png"
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Home = () => {
   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true
  };
  return (
    <div>
    <Helmet>
  <title>PT Indo Infotech | Cloud, Cybersecurity & IT Consulting</title>
  <meta
    name="description"
    content="Welcome to PT Indo Infotech. We provide cloud solutions, cybersecurity, IT consulting, and managed IT services to help businesses scale securely."
  />
  <meta property="og:title" content="PT Indo Infotech" />
  <meta property="og:description" content="Secure, scale, and innovate with our IT services." />
  <meta property="og:image" content="https://yourdomain.com/assets/home-banner.jpg" />
</Helmet>
    
    <section className="hero-section" id="home" data-aos="fade-right">
      <div className="hero-overlay">
        <div className="hero-text">
          <h1 data-aos="fade-left"><b>PT.INDO INFOTECH SOLUTION</b></h1>
          <p data-aos="fade-left"><b>Driving digital transformation with reliable and scalable IT services.</b></p>
          <button className="hero-btn">Get Started</button>
        </div>
      </div>
    </section>
    <br/>
        <section className="about-preview" id="about" data-aos="fade-right">
      <div className="about-container">
        <h2>ABOUT US</h2>
        <p>
          We are a trusted IT solutions provider delivering innovative,
          reliable, and scalable services. With a focus on quality and
          security, we help businesses embrace digital transformation and
          achieve long-term growth.
        </p>
        <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
        <button className="about-btn">Learn More</button></Link>  
      </div>
    </section>
        <section className="services-section"data-aos="fade-up">
      <h2 style={{color:"black"}}>Our IT Services</h2>
      <div className="services-container" date-aos="fade-right">
        <Link to="/services/web-development" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="service-card">
          <img src={main} alt="Managed IT Services" />
          <h3>Managed IT Services</h3>
          <p>Outsourced management of IT infrastructure and systems.</p>
        </div></Link>
        <Link to="/services/Services2" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="service-card" data-aos="fade-right">
          <img src={cloud} alt="Cloud Services" />
          <h3>Cloud Services</h3>
          <p>Cloud hosting, storage, computing, and SaaS solutions.</p>
        </div>
        </Link>
        <Link to="/services/Services3" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="service-card" data-aos="fade-right">
          <img src={cyber} alt="Cybersecurity Services" />
          <h3>Cybersecurity Services</h3>
          <p>Protect networks, systems, and data from cyber threats.</p>
        </div>
        </Link>
        <Link to="/services/Services4" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="service-card" data-aos="fade-right">
          <img src={consult} alt="IT Consulting" />
          <h3>IT Consulting</h3>
          <p>Strategic guidance on technology adoption and IT planning.</p>
        </div>
        </Link>
        <Link to="/services/Services5" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="service-card" data-aos="fade-right">
          <img src={software} alt="Software Development" />
          <h3>Software Development</h3>
          <p>Custom applications and software for your business.</p>
        </div>
        </Link>
        <Link to="/services/Services6" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="service-card" data-aos="fade-right">
          <img src={net} alt="Network Management" />
          <h3>Network Management</h3>
          <p>Design, setup, and maintenance of networks.</p>
        </div>
        </Link>
        <Link to="/services/Services7" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="service-card" data-aos="fade-right">
          <img src={technic} alt="Technical Support" />
          <h3>Technical Support</h3>
          <p>Helpdesk support for software, hardware, and IT issues.</p>
        </div>
        </Link>
        <Link to="/services/Services8" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="service-card" data-aos="fade-right">
          <img src={back} alt="Data Backup & Recovery" />
          <h3>Data Backup & Recovery</h3>
          <p>Backup, storage, and disaster recovery solutions.</p>
        </div>
        </Link>
        <Link to="/services/Services9" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="service-card" data-aos="fade-right">
          <img src={system}alt="System Integration" />
          <h3>System Integration</h3>
          <p>Connecting different IT systems seamlessly.</p>
        </div>
        </Link>
      </div>
    </section>
    <br/>
        <section className="why-section" data-aos="fade-left">
      <h2>Why Choose Us</h2>
      <p className="why-intro">
        We provide innovative IT solutions with a focus on quality, security, and customer satisfaction.
      </p>
      <div className="why-container" data-aos="fade-up">
        <div className="why-card" data-aos="fade-right">
          <img src={software1} alt="Expert Team" />
          <h3>Expert Team</h3>
          <p>Our certified professionals bring years of experience to deliver top-notch solutions.</p>
        </div>
        <div className="why-card" data-aos="fade-right">
          <img src="https://cdn-icons-png.flaticon.com/512/942/942751.png" alt="24/7 Support" />
          <h3>24/7 Support</h3>
          <p>Round-the-clock assistance to ensure your business never stops running.</p>
        </div>
        <div className="why-card" data-aos="fade-right">
          <img src={cut} alt="Cutting-Edge Technology" />
          <h3>Cutting-Edge Technology</h3>
          <p>We use the latest tools and technologies to keep you ahead of the competition.</p>
        </div>
        <div className="why-card" data-aos="fade-right">
          <img src={medal} alt="Proven Track Record" />
          <h3>Proven Track Record</h3>
          <p>Trusted by businesses worldwide for delivering reliable IT services and solutions.</p>
        </div>
      </div>
    </section>
    <br/>
    <section className="testimonials-section" data-aos="fade-right">
      <h2 className="text-center mb-5" style={{color:"white"}}>What Our Clients Say</h2>
      <Slider {...settings}>
        <div className="testimonial-card">
          <p>"This IT team transformed our business with their cloud solutions. Reliable and fast!"</p>
          <h5>- John Smith, CEO of TechCorp</h5>
        </div>
        <div className="testimonial-card">
          <p>"The support team is always there when we need them. Couldn’t be happier!"</p>
          <h5>- Sarah Lee, Manager at FinServe</h5>
        </div>
        <div className="testimonial-card">
          <p>"Professional, knowledgeable, and innovative — they delivered beyond expectations."</p>
          <h5>- Michael Brown, Founder of InnovateX</h5>
        </div>
      </Slider>
    </section>

  



    </div>

  );
};

export default Home;
