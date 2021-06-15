import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavItems,
  NavMenu,
  NavLinks,
} from "./NavBarElements";
import { FaBars } from "react-icons/fa";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 100) {
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

  return (
    <div>
      <>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              AgroBiotech
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItems>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-20}
                  activeClass="active"
                >
                  {" "}
                  About
                </NavLinks>
              </NavItems>
              <NavItems>
                <NavLinks to="discover" smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-20}> Discover</NavLinks>
              </NavItems>
              <NavItems>
                <NavLinks to="services" smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-20}> Services</NavLinks>
              </NavItems>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </>
    </div>
  );
};

export default Navbar;
