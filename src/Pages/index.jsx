import React, { useState, useEffect } from "react";
import Sidebar from "../components/SideBar";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection/index";
import InfoSection from "../components/InfoSection";

import {
  homeObjOne,
  // homeObjThree,
  // homeObjTwo,
  // homeObjFour,
} from "../components/InfoSection/Data";
import Services from "../components/Services";
import Footer from "../components/Footer";



const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);

  };

  useEffect(() => {
    window.addEventListener("home", [toggle]);
    console.log("homeclose");
  }, []);

  return (
    <>
    
    
      <Sidebar isOpen={isOpen} toggle={toggle} />

      <NavBar toggle={toggle} />

     

      <HeroSection />
      <InfoSection {...homeObjOne} />
      <Services />
      
      {/* <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} /> */}
      

      <Footer />
    {/* </motion.div> */}
    
    </>
  );
};

export default Home;
