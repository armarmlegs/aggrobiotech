import React from "react";

import NavBar from '../components/NavBar/index';
import Footer from '../components/Footer/index';
import InfoSection from "../components/InfoSection";
import { homeObjOne } from "../components/InfoSection/Data";
import ProductCards from "../components/ProductCards/ProductCards";
import { CardData } from "../components/ProductCards/Data";
import { useState } from "react";
import Sidebar from "../components/SideBar";
import {motion} from 'framer-motion'
import { animationOne, Animationtwo, transition } from "../components/Animations/Animations";



const CommercialCrops = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <motion.div
    initial="in" animate="out" exit="end"  variants={Animationtwo} transition={transition}>
    <div>
     
    <Sidebar isOpen={isOpen} toggle={toggle} />
        <NavBar toggle={toggle}/>
       
      
      <InfoSection  {...homeObjOne}/>
      <ProductCards data={CardData}/>

      <Footer />

      
     
    </div>
    </motion.div>
  );
};

export default CommercialCrops;
