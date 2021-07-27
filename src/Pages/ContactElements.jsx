import styled from "styled-components";

export const ContactWrapper = styled.form`
  display: flex;

  width: 100%;
  height: 100%;
  margin-bottom:0; 

  /* z-index: -1; */
  @media screen and (max-width: 960px) {
    max-width: 960px;
    transition: 0.8s all ease;
  }
`;

export const ContactLeft = styled.img`
  /* position: absolute; */
  width: 45vw;
  top: 80;
  height: 100%;
  object-fit: cover;
`;

export const ContactRight = styled.div`
  width: 50vw;
  height: 100vh;
  padding: 5rem 3.5rem;
  color: black;
`;

export const ContactH1 = styled.h1`
  text-transform: uppercase;
  font-size: 50px;
  letter-spacing: 0.5rem;
  font-weight: 300;
  color: black;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const ContactP = styled.p`
  font-size: 15px;
  font-weight: 300;
  width: 40vw;
  margin: 0.25rem 0;
`;
export const ContactFormX = styled.form`
  width: 31.25rem;
  position: relative;
  margin-top: 2rem;
  padding: 1rem 0;
`;
export const ContactLabel = styled.label`
  text-transform: uppercase;
  display: block;
  padding: 20px 0;
  font-size: 15px;
  margin-bottom: 2px;
`;

export const ContactInput = styled.input`
  font-weight: 500;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  font-size: 18px;
`;
export const ContactArea = styled.textarea`
  font-weight: 500;
  width: 600px;

  border: none;
  border-bottom: 1px solid black;
  outline: none;
  font-size: 18px;
  resize: none;
`;
