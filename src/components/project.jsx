/* eslint-disable */
import React, { useState } from 'react'
import "./project.css"
import { motion, useAnimate, useAnimation } from 'framer-motion'
import { LuExternalLink } from "react-icons/lu";

function Project() {
   const [hover, setHover] = useState()
   const cards =  [useAnimation() , useAnimation()]

   const handleHover =(index)=>{
    cards[index].start({y:"0%"})
   }
   const handleHoverOver =(index)=>{
    cards[index].start({y:"100%"})
   }

    return (
        <div  className='project'>
            <div className='discription '>
                <p>Projects</p>
            </div>
            <div className='projects'>
                <div  className="project-1">
                    <motion.div onHoverStart={()=>handleHover(0)} onHoverEnd={()=>handleHoverOver(0)} className='baat-cheet flex flex-col items-center justify-center'>
                       <div className="w-[50%} h-[50%] flex items-center justify-center">
                       <img className="w-[50%} h-[50%] scale-95" src="./logo.png" alt="" />
                       </div>
                        <button className='p-3 flex gap-3 text-3xl text-white  border-[1px]  mb-5 rounded'> <a href="https://baat-cheet-production.up.railway.app/" className='flex gap-4'>Demo <LuExternalLink/> </a></button>
                    </motion.div>

                    <motion.div onHoverStart={()=>handleHover(1)} onHoverEnd={()=>handleHoverOver(1)} className='blog-app flex flex-col items-center justify-center'>
                    <img className="w-[50%} h-[50%] scale-95" src="./bloge.png" alt="" />
                    <button className='p-3 flex gap-3 text-3xl text-black  border-[1px] border-zinc-950  mb-5 rounded'>Demo <LuExternalLink/> </button>
                    </motion.div>

                    <div  className='project-name'>
                    {"Baat-cheet".split("").map((item,index)=>{
                        return <motion.h1 initial={{y:"100%"}} animate={cards[0]} transition={{ease: [0.22, 1, 0.36,1], delay: index*.06}}>{item}</motion.h1>
                    })}
                    
                </div>
                <div  className='project-name'>
                    {"Blogger".split("").map((item,index)=>{
                        return <motion.h1 initial={{y:"100%"}} animate={cards[1]} transition={{ease: [0.22, 1, 0.36,1], delay: index*.06}}>{item}</motion.h1>
                    })}
                </div>
                </div>
                {/* <div  className="project-2">
                    
                </div> */}
                {/* <div  className="mini-project">
                    <motion.div onHoverStart={()=>handleHover(1)} onHoverEnd={()=>handleHoverOver(1)} className='w[100%] h-[70%] flex flex-col items-center justify-center'>
                        <h1 className='text-white text-lg'>Mini Projects</h1>
                        <div className='card selection mt-5 w-[100%] flex flex-col text-white items-center justify-center h-[60%] '>
                            <img className='w-[50%] h-[50%]' src="./notes.png" alt="" />
                            <h3>notes_hub</h3>
                        <button  className='p-2 mt-2 flex gap-3 text-lg text-black  border-[1px] border-zinc-900  mb-5 rounded'> <a className='flex items-center gap-5' href='https://rajatsoni111.github.io/nootes-hub/'> Demo <LuExternalLink/> </a></button>
                        </div>
                        <div className='card mt-5 w-[100%] flex flex-col items-center justify-center h-[60%] '>
                        <img className='w-[50%] h-[50%]' src="./notes.png" alt="" />
                            <h3>calculator</h3>
                        <button  className='p-2 flex mt-2 gap-3 text-lg text-black  border-[1px] border-zinc-900  mb-5 rounded'> <a className='flex items-center gap-5' href='https://rajatsoni111.github.io/calculator/'> Demo <LuExternalLink/> </a> </button>
                        </div>
                    </motion.div>
                </div> */}
                
                    
            </div>

        </div>
    )
}

export default Project
