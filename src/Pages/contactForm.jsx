// import React from "react";
// import NavBar from "../components/NavBar";
// import { useState } from "react";
// import Sidebar from "../components/SideBar/index";
// import emailjs from "emailjs-com";
// import {
//   ContactH1,
//   ContactLeft,
//   ContactRight,
//   ContactWrapper,
//   ContactP,
//   ContactFormX,
//   ContactLabel,
//   ContactInput,
//   ContactArea,
// } from "./ContactElements";
// import background from "../Images/pexels-maarten-van-den-heuvel-2284170.jpg";
// import { Button3 } from "../components/Button3";

// const serviceId = "service_zbztet6";
// const templateId = "template_xsdfrjk";
// const userId = "user_JL9GE8VrBLeAvhPzsvHB3";

// const ContactForm = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggle = () => {
//     setIsOpen(!isOpen);
//   };

//   function sendEmail(e) {
//     console.log("hellooooo")
//     e.preventDefault();

//     emailjs.sendForm(serviceId, templateId, e.target, userId).then(
//       (result) => {
//         console.log(result.text);
//       },
//       (error) => {
//         console.log(error.text);
//       }
//     );
//   }

//   return (
//     <div>
//       <Sidebar isOpen={isOpen} toggle={toggle} />
//       <NavBar toggle={toggle} />

     

//       <ContactWrapper>
//         <ContactLeft src={background} />
//         <ContactRight>
//           <ContactH1> Contact us</ContactH1>
//           <ContactP>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
//           </ContactP>
//           <ContactFormX onSubmit={sendEmail}>
//             <ContactLabel>Full Name</ContactLabel>

//             <ContactInput
//               type="text"
//               name="name"
//               // placeholder="Your Full Name"
//               // required
//             ></ContactInput>
//             <ContactLabel>Email</ContactLabel>

//             <ContactInput
//               type="email"
//               name="email"
//               // placeholder="Your Email address"
//               // required
//             ></ContactInput>
//             <ContactLabel>Message</ContactLabel>

//             <ContactArea
//               rows="6"
//               name="message"
//               // placeholder="Your Message"
//               // required
//             ></ContactArea>

//             <Button3 type="submit" value="send" />
//           </ContactFormX>
//         </ContactRight>
//       </ContactWrapper>
//       <form onSubmit={sendEmail}>
//         <input type="hidden" name="contact_number" />
//         <label>Name</label>
//         <input type="text" name="name" />
//         <label>Email</label>
//         <input type="email" name="email" />
//         <label>Message</label>
//         <textarea name="message" />
//         <input type="submit" value="Send" />
//       </form>
//     </div>
//   );
// };

// export default ContactForm;



import React, {useState, useEffect} from 'react'
import Dropdown from '../components/dropdown'
import NavBar from '../components/NavBar'
import Contact from '../components/contactForm/Contact'
import Footer from '../components/Footer'
import SideBar from '../components/SideBar'


const ContactForm = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // useEffect(() => {
  //   window.addEventListener("home", toggle);
  //   console.log("homeclose");
  // }, []);

  return (
  
<div>
<SideBar  isOpen={isOpen} toggle={toggle}/>

<NavBar toggle={toggle} />

<Contact />

<Footer />
</div>



   
  )
}

export default ContactForm
