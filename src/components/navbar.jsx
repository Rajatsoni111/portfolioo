import React from 'react'
import "./navbar.css"
import { motion } from 'framer-motion'

function Navbar() {


  return (
    <div className='navbar'> 
      <div className='logo'>logo.</div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact us</li>
      </ul>
    </div>
  )
}

export default Navbar
