import React from "react";
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarWrapper, sidebarRoute} from "./SideBar.elements";

const SideBar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen ={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon></CloseIcon>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
          <SidebarLink to="discover" onClick={toggle}>Discover</SidebarLink>
          <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
        </SidebarMenu>
   
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SideBar;
