/* eslint-disable */
import React from 'react'
import "./marque.css"
import {motion} from "framer-motion"

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.01"
    className='marque w-full flex rounded-t-3xl items-center h-[35%] overflow-hidden' >
        <div  className='flex border-t-[1px] border-b-[1px] h-[70%] text-4xl'>
        <motion.div initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat: Infinity, ease: "linear", duration:10}}  className='flex w-full  items-center whitespace-nowrap'>
          <p className='ml-2 text-white leading-none uppercase text-9xl'>React</p>
          <p className='ml-10 text-white leading-none uppercase text-9xl'>JavaScript</p>
          <p className='ml-10 text-white leading-none uppercase text-9xl'>Figma</p>
          <p className='ml-10 text-white leading-none uppercase text-9xl'>Git</p>
          <p className='ml-10 text-white leading-none uppercase text-9xl'>Gsap</p>
          <p className='ml-10 text-white leading-none uppercase text-9xl'>three js</p>
          <p className='ml-10 text-white text-9xl'></p>
                   {/* <motion.p initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat: Infinity, ease: "linear", duration:10}} className='marque-tags'>Git React JavaScrpt Figma Html Css Tailwind Css Painting</motion.p> */}
             
      </motion.div>
      <motion.div initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat: Infinity, ease: "linear", duration:10}}  className='flex w-full  items-center whitespace-nowrap'>
          <p className='ml-2 text-white leading-none uppercase text-9xl'>React</p>
          <p className='ml-10 text-white leading-none uppercase text-9xl'>JavaScript</p>
          <p className='ml-10 text-white leading-none uppercase text-9xl'>Figma</p>
          <p className='ml-10 text-white leading-none uppercase text-9xl'>Git</p>
          <p className='ml-10 text-white leading-none uppercase text-9xl'>Gsap</p>
          <p className='ml-10 text-white leading-none uppercase text-9xl'>three js</p>
          <p className='ml-10 text-white text-9xl'></p>
                   {/* <motion.p initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat: Infinity, ease: "linear", duration:10}} className='marque-tags'>Git React JavaScrpt Figma Html Css Tailwind Css Painting</motion.p> */}
             
      </motion.div>
      </div>
    </div>
  )
}

export default Marquee
