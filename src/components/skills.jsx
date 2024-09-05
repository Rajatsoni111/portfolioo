/* eslint-disable */
import React, { useEffect } from 'react'
import "./skills.css"
import { motion } from 'framer-motion'
import gsap from 'gsap'

function Skills({ props }, ref) {
    useEffect(() => {
        gsap.to('.progressbar-1', {
            x: 0,
            stagger: 0.2,
            duration: 1,
            scrollTrigger: {
                trigger: '.progressbar-1',
                start: "Top 90%",
                end: "Bottom 60%",
                scrub: true
            }
        })
    })

    return (
        <div data-scroll data-scroll-speed="-0.01" className='w-full h-screen skills' ref={ref}>
            <div className='skills-text'>
                <h1>skills</h1>
            </div>
            <div className='skills-bar-div '>
                <div className="skill-bar ">
                    <div className='skill-bar-1'>
                        <h1>Html</h1>
                        <div className='progressbar '>
                            {/* initial={{x:"-90%"}} animate={{x:0}} transition={{duration:2}} */}
                            <div className='progressbar-1 '>
                                {/* <div className="glowing-circle"></div> */}
                            </div>
                            <p>90%</p>
                        </div>
                        <h1>CSS</h1>
                        <div className='progressbar flex'>
                            <div className='progressbar-1 CSS'></div>
                            <p>90%</p>
                        </div>
                        <h1>JAVASCRIPT</h1>
                        <div className='progressbar'>
                            <div className='progressbar-1 JAVASCRIPT'></div>
                            <p>70%</p>

                        </div>
                        <h1>REACT</h1>
                        <div className='progressbar'>
                            <div className='progressbar-1 REACT'></div>
                            <p>60%</p>
                        </div>
                        <h1>Figma</h1>
                        <div className='progressbar'>
                            <div className='progressbar-1 Figma'></div>
                            <p>80%</p>
                        </div>

                    </div>
                </div>
                <div className='contact-form '>
                    <form action="https://formspree.io/f/manwkoda" method='POST'>
                        <label htmlFor="">Name</label>
                        <input className='text-black' id='name' name='name' type="text" placeholder='enter Name' required />
                        <label className='mt-4' htmlFor="">Email id</label>
                        <input className='text-black'id='email' name='email' type="email" placeholder='enter email' required />
                        <label className='mt-4' htmlFor="">Massage me</label>
                        <textarea className='text-black' name="massage" id="massage" placeholder='give me feedback' required></textarea>
                        <button type='submit' className='mt-6 border-[1px] rounded-sm p-3'>send</button>
                    </form>
                </div>
                {/* <h1>Email: Rishisoni1918@gmail.com</h1> */}
            </div>
        </div>
    )
}

export default React.forwardRef(Skills)
