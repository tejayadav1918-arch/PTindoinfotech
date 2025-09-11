import React, { useEffect } from "react";
import CustomNavbar from "./CustomNavbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Home from "./Home";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Footer";
import {  Route, Routes } from "react-router-dom";
import { AboutUs } from "./Aboutus";
import ManagedIT from "./ManagedIt";
import Contactform from "./Contactform";
import CloudServices from "./Cloud";
import Cybersecurity from "./Cybersecurity";
import ITConsulting from "./ITconsult";
import SoftwareDevelopment from "./Software";
import NetworkManagement from "./Network";
import TechnicalSupport from "./Technical";
import DataBackupRecovery from "./Data&backup";
import SystemIntegration from "./System";
import AOS from "aos";
import "aos/dist/aos.css";
import Preloader from "./Preloader";
import { useLocation } from "react-router-dom";
import { useState } from "react";


import ScrollToTop from "./Scrolltotop";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timer);
  }, [location]);

    
  useEffect(() => {
    AOS.init({ duration: 1000,
      once: true
     });
  }, []);
  return (
    <>
   
   
     {loading && <Preloader />}
     <ScrollToTop />
      <CustomNavbar />
      <Routes>
      <Route path="/" element={<Home/>}  />
      <Route path="/about" element={<AboutUs/>} />
      <Route path="/services/web-development" element={<ManagedIT/>} />
      <Route path="/services/Services2" element={<CloudServices/>} />
      <Route path="/services/Services3" element={<Cybersecurity/>} />
      <Route path="/services/Services4" element={<ITConsulting/>} />
      <Route path="/services/Services5" element={<SoftwareDevelopment/>} />
      <Route path="/services/Services6" element={<NetworkManagement/>} />
      <Route path="/services/Services7" element={<TechnicalSupport/>} />
      <Route path="/services/Services8" element={<DataBackupRecovery/>} />
      <Route path="/services/Services9" element={<SystemIntegration/>} />
      </Routes>
      <Contactform />
      <Footer />
    
    
    
      
  
    </>
  );
}

export default App;
