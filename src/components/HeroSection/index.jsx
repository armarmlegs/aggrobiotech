import React, {useState} from "react";
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowFwd, ArrowRight } from "./HeroSectionElements";
import Video from "../../Video/video.mp4";
import {Button} from "../ButtonElement"

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () =>{
        setHover(!hover)
    }


  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
          <HeroH1>We love plants how about you</HeroH1>
          <HeroP>Learn about us</HeroP>
          <HeroBtnWrapper >
          <Button to='about' onMouseEnter={onHover} onMouseLeave={onHover}
          >
            Let's Go {hover ?<ArrowFwd/> : <ArrowRight/> }

          </Button>
      </HeroBtnWrapper>
      </HeroContent>
      
      
    </HeroContainer>
    
  );
};

export default HeroSection;