import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#000" : "#fff")};
  color:${({ scrollNav }) => (scrollNav ? "#fff" : "#fff")};
  opacity: 0.9;
  height: 70px;
  margin-top:0px;
  position:fixed;
  top:0;
  left:0;
  
  z-index: 10;
  font-size: 20px;
  width: 100%;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }

  
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  /* width: 100%; */
  padding: 0 24px;
  padding-right: 0;
  max-width: 1100px;
 
`;

export const NavLogo = styled(LinkR)`
  color:black;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: black;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items:center;
  list-style: none;
  text-align: center;
  /* margin-right: -300px; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItems = styled.li`
  height: 80px;

`;

export const NavLinks = styled(LinkS)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
  &:hover {
    border-bottom: 3px solid #01bf71;
    transition: 0.2 ease-in-out;
  }
`;

export const NavRoute = styled(LinkR)`
   /* color: ${({ scrollNav }) => (scrollNav ? "#fff" : "#000")}; */
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
  &:hover {
    border-bottom: 3px solid #01bf71;
    transition: 0.2 ease-in-out;
  }
`;
