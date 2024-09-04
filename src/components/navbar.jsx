import React, { useRef } from 'react'
import "./navbar.css"
// import { motion } from 'framer-motion'
import Firstpage from './firstpage';
import Marquee from './marquee';
import About from './about';
import Eyes from './eyes';
import Project from './project';
import Skills from './skills';
import Footer from './footer';
import FullAbout from './fullAbout';


function Navbar() {
  const aboutRef = useRef(null);
  const homeRef = useRef(null);
  const contactRef = useRef(null);

  const aboutClick = () => {
      aboutRef.current?.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
  };
  const homeClick = () => {
      homeRef.current?.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
  };
  const contactClick = () => {
      contactRef.current?.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
  };

  return (<>
    <div className='navbar'>
      <div className='logo'>Portfolio.</div>
      <ul>
        <li onClick={homeClick}>
          {/* <NavLink to="/firstPage">Home</NavLink> */}
          Home
        </li>
        <li onClick={aboutClick}>
          {/* <NavLink to="/fullAbout">About</NavLink> */}
          About
        </li>
        <li onClick={contactClick}>
          {/* <NavLink to="/contact">Contact us</NavLink> */}
          Contact us
        </li>
      </ul>
    </div>
    <Firstpage ref={homeRef}/>
    <Marquee />
    <About ref={aboutRef}/>
    <Eyes />
    <Project />
    <Skills ref={contactRef}/>
    <Footer />
    {/* <FullAbout /> */}
    </>
  )
}

export default Navbar
