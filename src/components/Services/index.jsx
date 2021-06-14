import React from "react";

import icon1 from'../../Images/svg-1.svg'
import icon2 from'../../Images/undraw_workout_gcgu.png'
import icon3 from'../../Images/svg-1.svg'

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1> Our services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={icon1} />
          <ServicesH2> Top notch Seeds</ServicesH2>
          <ServicesP> What what in the butt</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={icon2} />
          <ServicesH2> You're the man</ServicesH2>
          <ServicesP> Legoland</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={icon3} />
          <ServicesH2> Proficiency</ServicesH2>
          <ServicesP> Hannnnnh ??</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
