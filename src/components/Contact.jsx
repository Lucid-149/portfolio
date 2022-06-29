import React from 'react'
import ContactCard from './ContactCard'
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from 'react-icons/si';

export default function Contact() {
  return (
    <div className=' flex flex-col items-center justify-center my-20'>
      <div>
        <h1 className='title text-5xl'>Contact Me</h1>
      </div>
    <div className=' mx-auto container flex-wrap justify-center items-center w-full flex'>
      
        <ContactCard link="https://wa.me/254748091207" icon={<FaWhatsapp  className="text-2xl m-2 text-gray-600 dark:text-red-600"/> } detail="James Kennedy"/>
        <ContactCard link="tel: +254769107529" icon={<FaPhoneAlt  className="text-2xl m-2 text-gray-600 dark:text-red-600"/> } detail="+254 748 091207"/>
        <ContactCard link="mailto:muema31jk@gmail.com" icon={<SiGmail className="text-2xl m-2 text-gray-600 dark:text-red-600"/> } detail="Email"/>
    </div>
    </div>
  )
}