/* eslint-disable */
import React, { useRef, useState } from 'react'
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

  let [display , setDisplay] =  useState('flex')
  let [display2 , setDisplay2] =  useState('none')
  let [right , setRight] = useState('-100%')

  const handleclick = () =>{
    setDisplay('none')
    setDisplay2('flex')
    setRight('0')
  }
  const handleclick2 = () =>{
    setDisplay2('none')
    setDisplay('flex')
    setRight('-100%')
  }
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
      <ul style={{right:right}}>
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
      <div className="hidebar">
        <div onClick={handleclick} className='menu' style={{display:display}}>
          <div className="hr" id='hr'></div>
          <div className="hr2" id='hr2'></div>
          <div className="hr3" id='hr3'></div>
        </div>
        <div onClick={handleclick2} className='menuClose' style={{display:display2}}>
          <div className="hrClose" id='hr'></div>
          <div className="hrClose2" id='hr2'></div>
          <div className="hrClose3" id='hr3'></div>
        </div>
      </div>
    </div>

    <Firstpage ref={homeRef} />
    <Marquee />
    <About ref={aboutRef} />
    <Eyes />
    <Project />
    <Skills ref={contactRef} />
    <Footer />
    {/* <FullAbout /> */}
  </>
  )
}

export default Navbar
