import React from 'react'
import "./navbar.css"
import { motion } from 'framer-motion'
import {Link} from 'react-router-dom'

function Navbar() {


  return (
    <div className='navbar'> 
      <div className='logo'>Portfolio.</div>
      <ul>
        <li>
        {/* <Link to="/firstPage">Home</Link> */}
        </li>
        <li>About</li>
        <li>Contact us</li>
      </ul>
    </div>
  )
}

export default Navbar
