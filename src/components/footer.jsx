/* eslint-disable */
import React from 'react'
import { FaRegCopyright } from "react-icons/fa";
import "./footer.css"

function Footer() {
  return (
    <div className=' w-full gap-3 text-white h-[20%] bg-[#8f8f8f] flex items-center justify-center'>
        <h1 className=' text-xl '>All right reserverd </h1>
        <FaRegCopyright/> 
        <h1 className=' text-xl '> Rajat soni</h1>
    </div>
  )
}

export default Footer
