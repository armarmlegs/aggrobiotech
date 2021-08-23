import React from "react";

import NavBar from '../components/NavBar/index';
import Footer from '../components/Footer/index';
import InfoSection from "../components/InfoSection";
import { homeObjOne } from "../components/InfoSection/Data";
import ProductCards from "../components/ProductCards/ProductCards";
import { CardData } from "../components/ProductCards/Data";
import { useState, useEffect } from "react";
import Sidebar from "../components/SideBar";




const CommercialCrops = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // useEffect(() => {
  //   window.addEventListener("home", [toggle]);
  //   console.log("homeclose");
  // }, []);
  return (
   
    <div>
     
    <Sidebar isOpen={isOpen} toggle={toggle} />
        <NavBar toggle={toggle}/>
       
      
      <InfoSection  {...homeObjOne}/>
      <ProductCards data={CardData}/>

      <Footer />

      
     
    </div>
    
  );
};

export default CommercialCrops;
