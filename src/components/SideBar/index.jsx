import React from "react";
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarWrapper} from "./SideBar.elements";

const SideBar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen ={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon></CloseIcon>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/about" onClick={toggle}>About</SidebarLink>
          <SidebarLink to="/ComCrops" onClick={toggle}>Commercial Crops</SidebarLink>
          <SidebarLink to="/FoodCrops" onClick={toggle}>Food Crops</SidebarLink>
          <SidebarLink to="/FruitsVeggies" onClick={toggle}>Fruits & Vegetables</SidebarLink>
          <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
          <SidebarLink to="/ContactForm" onClick={toggle}>Contact Form</SidebarLink>
        </SidebarMenu>
   
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SideBar;
