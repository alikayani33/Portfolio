import React from 'react';
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contacts = () => {
  return (
    <>
      <div id= "Contact" className="container contact">
        <h1> CONTACT ME </h1>
        <div className="contact-icon"
         data-aos="zoom-in-up"
      data-aos-duration = "1000"
        >
          <a href="https://www.instagram.com/" target="_blank" className="items">
            <FaInstagramSquare className='icons' />
          </a>
          <a href="https://www.linkedin.com/in/ali-murtaza-kayani-59168b272/" target="_blank"className="items">
            < FaLinkedin className='icons'  />
          </a>
          <a href="https://github.com/alikayani33" target="_blank"className="items">
            < FaGithub className='icons' />
          </a>

          <a href="mailto:a,kspyproduction@gmail.com" target="_blank" className="items">
            <SiGmail className='icons' />
          </a>
          
        </div>
      </div>
    </>


  )
}

export default Contacts
