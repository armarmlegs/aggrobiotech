import React, {useState} from 'react';
import Navbar from '../components/NavBar';
import Service from "../components/Services";
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';

const Services = () => {
    const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
    return (
        <>
        <SideBar isOpen={isOpen} toggle={toggle} />

        <Navbar toggle={toggle} />

        <Service />

        <Footer />
            
        </>
    )
}

export default Services
