import React, { useState } from "react";
import Sidebar from "../components/SideBar";
import NavBar from "../components/NavBar";
import InfoSection from "../components/InfoSection";
import Footer from "../components/Footer";
import { homeObjOne } from "../components/InfoSection/Data";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <InfoSection {...homeObjOne} />
      <Footer />
    </>
  );
};

export default About;
