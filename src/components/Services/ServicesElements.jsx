import styled from "styled-components";
import back from "../../Images/harshil-gudka-0prglfrYY08-unsplash.jpg";

export const ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
 
  /* background-image:url(${back});
 background-size:cover; */
 @media screen and (max-width: 768px) {
    height: auto;
    padding-top:70px
   
  }

  @media screen and (max-width: 480px) {
    height:auto;
    padding-top:70px
  }


`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 50px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  /* background : #fff; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 400px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0, 2);
  padding: 30px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesIcon = styled.img`
  height: 80px;
  width: 80px;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  font-weight: 10;
  text-transform: uppercase;
  text-align: center;
  border-bottom: 1px solid #000;
  margin-bottom: 25px;

  margin-bottom: 64px;
  margin-top: 15px;

  @media screen and(max-width: 480px) {
    margin-top: 30px;
    font-size: 2rem;
    font-weight: 10;
  }
`;

export const ServicesH2 = styled.h2`
  border-bottom: 1px solid #000;
  font-size: 2rem;
  margin-bottom: 25px;
  color: #000;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #000;
  margin-bottom: 40px;
  font-size: 1.5rem;
`;
