import React from "react";
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

const Navbar = ({toggle}) => {
  return (
    <div>
      <>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">AggroBiotech</NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItems>
                <NavLinks to="about"> About</NavLinks>
              </NavItems>
              <NavItems>
                <NavLinks to="discover"> Discover</NavLinks>
              </NavItems>
              <NavItems>
                <NavLinks to="services"> Services</NavLinks>
              </NavItems>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </>
    </div>
  );
};

export default Navbar;
