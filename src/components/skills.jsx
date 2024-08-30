import React, { useEffect } from 'react'
import "./skills.css"
import { motion } from 'framer-motion'
import gsap from 'gsap'

function Skills() {
useEffect(()=>{
    gsap.to('.progressbar-1',{
        x:0,
        stagger:0.5,
        duration:1,
        scrollTrigger:{
            trigger:'.progressbar-1',
            start:"Top 70%",
            end:"Bottom 60%"
        }
    })
})

    return (
        <div  className='w-full h-screen skills'>
            <div className='skills-text'>
                <h1>skills</h1>
            </div>
            <div className='skills-bar-div '>
                <div className="skill-bar ">
                    <div className='skill-bar-1'>
                    <h1>Html</h1>
                        <div className='progressbar '>
                        {/* initial={{x:"-90%"}} animate={{x:0}} transition={{duration:2}} */}
                            <div  className='progressbar-1 '>
                                {/* <div className="glowing-circle"></div> */}
                            </div>
                            <p>90%</p>
                        </div>
                        <h1>CSS</h1>
                        <div className='progressbar flex'> 
                            <div  className='progressbar-1 CSS'></div>
                            <p>90%</p>
                        </div>
                        <h1>JAVASCRIPT</h1>
                        <div className='progressbar'>
                            <div  className='progressbar-1 JAVASCRIPT'></div>
                            <p>70%</p>

                        </div>
                        <h1>REACT</h1>
                        <div className='progressbar'>
                            <div  className='progressbar-1 REACT'></div>
                            <p>60%</p>
                        </div>
                        <h1>Figma</h1>
                        <div className='progressbar'>
                            <div  className='progressbar-1 Figma'></div>
                            <p>80%</p>
                        </div>
                        
                    </div>
                </div>
                <div className='contact-form text-white'>
                    <form action="">
                        <label htmlFor="">Email id</label>
                        <input className='text-black' type="email" placeholder='enter email'/>
                        <label className='mt-4' htmlFor="">Massage me</label>
                        <textarea className='text-black' name="" id="" placeholder='give me feedback'></textarea>
                        <button className='mt-6 border-[1px] rounded-sm p-3'>send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Skills
