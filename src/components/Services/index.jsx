import React from "react";

import icon1 from'../../Images/agriculture.png'
import icon2 from'../../Images/agriculture (2).png'
import icon3 from'../../Images/agriculture (3).png'
import {Button2} from '../Button2Elements'


import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  PhotoBackground,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      
      <ServicesH1> Our services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={icon1} />
          <ServicesH2> Expertise</ServicesH2>
         
           <ServicesP> Lorem ipsum dolor sit amet consectetur, adipisicing elit.</ServicesP>
           <Button2> More </Button2>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={icon2} />
          <ServicesH2> You're the man</ServicesH2>
          <ServicesP> Lorem ipsum dolor sit amet consectetur adipisicing elit. </ServicesP>
          <Button2> More </Button2>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={icon3} />
          <ServicesH2> Proficiency</ServicesH2>
          <ServicesP> Lorem ipsum dolor sit amet consectetur adipisicing elit. </ServicesP>
          <Button2> More </Button2>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
