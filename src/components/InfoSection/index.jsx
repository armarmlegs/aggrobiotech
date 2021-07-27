import React from "react";
// import { Button } from "../ButtonElement";
import {Button2} from '../Button2Elements'
// import { Link } from 'react-router-dom'

import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img} from './InfoElements'
// import picture from '../../Images/svg-1.svg'

const InfoSection = ({lightBg, ImgStart, topLine, lightText, darkText, buttonLabel, alt, description, id, img, headLine, primary, dark, dark2, buttonLink } ) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow ImgStart = {ImgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button2 to={buttonLink}
                  smooth='true'
                  duration={500}
                  spy="true"
                  exact='true'
                  offset={-20}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                  dark2={dark2 ? 1 : 0}>{buttonLabel}</Button2>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
              <Img src={img} alt={alt} />
              </ImgWrap>
             </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
