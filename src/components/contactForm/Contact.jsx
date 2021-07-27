import React from "react";



// import Sidebar from "../SideBar/index";
import emailjs from "emailjs-com";
import {
  ContactH1,
  ContactLeft,
  ContactRight,
  ContactWrapper,
  ContactP,
  ContactFormX,
  ContactLabel,
  ContactInput,
  ContactArea,
} from "./contactElements";
import background from "../../Images/pexels-maarten-van-den-heuvel-2284170.jpg";
import { Button3 } from "../../components/Button3";
const serviceId = "service_zbztet6";
const templateId = "template_xsdfrjk";
const userId = "user_JL9GE8VrBLeAvhPzsvHB3";

const Contact = () => {
 
  function sendEmail(e) {
      console.log('wassup')
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, e.target, userId)

      .then((result) => {
          alert("success");
      }, (error) => {
          console.log("error");
      });
  }





  return (
    <ContactWrapper>
      <ContactLeft src={background} />
      <ContactRight>
        <ContactH1> Contact us</ContactH1>
        <ContactP>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
        </ContactP>
        <ContactFormX onSubmit={sendEmail}>
         <ContactInput  type="hidden" name="contact_number" />
         <ContactLabel >Name</ContactLabel>
         <ContactInput  type="text" name="name" />
         <ContactLabel >Email</ContactLabel>
         <ContactInput  type="email" name="email" />
         <ContactLabel >Message</ContactLabel>
         <ContactArea  name="message" />
         <Button3 type="submit" value="Send" />
       </ContactFormX>
     
      </ContactRight>
    </ContactWrapper>
  );
};

export default Contact;
