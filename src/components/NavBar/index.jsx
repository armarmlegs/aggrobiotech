import React, { useState, useEffect} from "react";
import { animateScroll as scroll } from "react-scroll";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavItems,
  NavMenu,
  NavLinks,
  NavRoute,
} from "./NavBarElements";
import { FaBars } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import Dropdown from "../dropdown";

const Navbar = ({ toggle }) => {
  const [dropdown, setDropdown] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);

  const droppy = () => {
    setDropdown(!dropdown);
  };

  
  


  const onMouseEnter = () => {
    setDropdown(true);
    // console.log("enter")
    // if (window.width < 860) {
    //   setDropdown(true)

    // } else {
    //   setDropdown(false)
    // }

  


  };

  // useEffect(() => {
  //   window.addEventListener("hover", onMouseEnter);
  //   console.log("droppingbaby");
  // }, []);
  const onMouseLeave = () => {
    setDropdown(false);
    // console.log("leave")
    // if (window.width < 860) {
    //   setDropdown(false)

    // } else {
    //   setDropdown(false)
    // }
  };

  // useEffect(() => {
  //   window.addEventListener("Leave", onMouseLeave);
  //   console.log("droppingbaby");
  // }, []);

  const changeNav = () => {
    if (window.scrollY >= 70) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    console.log("scrolling");
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("home", toggleHome);
    console.log("droppingbaby");
  }, []);

  

  return (
    <div>
      <>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              AgroBiotech
            </NavLogo>
            <MobileIcon>
              <FaBars onClick={toggle} />
            </MobileIcon>
            <NavMenu>
              <NavItems>
                <NavLinks
                  to="about"
                  // smooth={"true"}
                  duration={500}
                  // spy={"true"}
                  exact="true"
                  offset={-20}
                  activeClass="active"
                >
                  {" "}
                  About
                </NavLinks>
              </NavItems>
              {/* <NavItems>
                <NavLinks
                  to="Commercial-Crops"
                  smooth={"true"}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-20}
                  activeClass="active"
                >
                  {" "}
                  Commercial Crops
                </NavLinks>
              </NavItems>
              <NavItems>
                <NavLinks to="foodCrops" smooth={"true"}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-20}> Food Crops</NavLinks>
              </NavItems>
              <NavItems>
                <NavLinks to="FruitsVeggies" smooth={"true"}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-20}> Fruits & vegetables</NavLinks>
              </NavItems> */}
              <NavItems>
                <NavLinks
                  to="services"
                  smooth="true"
                  duration={500}
                  // spy={true}
                  exact="true"
                  offset={-20}
                >
                  {" "}
                  services{" "}
                </NavLinks>
              </NavItems>
              <NavItems>
                <NavRoute to="/ContactForm"> Contact </NavRoute>
              </NavItems>
              <NavItems onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <NavLinks
                  to="/"
                  // smooth={"true"}
                  duration={500}
                  // spy={true}
                  exact="true"
                  offset={-20}
                  // onClick={onMouseEnter}
                >
                  Products <RiArrowDropDownLine />{" "}
                </NavLinks>
                <Dropdown dropdown={dropdown} droppy={droppy} />
              </NavItems>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </>
    </div>
  );
};

export default Navbar;
