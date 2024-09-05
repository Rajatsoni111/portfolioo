/* eslint-disable */
import gsap from 'gsap'
import React, { useEffect } from 'react'
import './fullAbout.css'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import Navbar from './navbar'
import { IoIosCloudDownload } from "react-icons/io";


function FullAbout() {
    gsap.registerPlugin(ScrollTrigger)
    useEffect(() => {
        gsap.to(".text", {
            y: 0,
            duration: 1,
            stagger: 0.5,
            scrollTrigger:{
                trigger:".fullAbout",
                start:"top 100%",
                end:"bottom 100%",
                scrub:true
            }
        })

        gsap.to(".college", {
            opacity: 1,
            // rotateX: 360,
            duration: 0.5,
            delay: 1.5,
            stagger: 0.2
        })
        gsap.to(".Diploma", {
            opacity: 1,
            // rotateX: 360,
            duration: 0.5,
            delay: 4,
            stagger: 0.2
        })
        gsap.to(".school", {
            opacity: 1,
            // rotateX: 360,
            duration: 0.5,
            delay: 7,
            stagger: 0.2
        })
        gsap.to(".hr", {
            y: 0,
            duration: 12,
            // delay:5,
            stagger: 1
        })
        gsap.to(".ex-text", {
            x: 0,
            duration: 0.2,
            stagger: 0.5,
            scrollTrigger: {
                trigger: ".experience",
                start: "top 100%",
                end: "bottom 100%",
                scrub: true
            }
        })
        gsap.to('.minitext', {
            //  rotateX: "360deg",
            color:"black",
            duration: 1,
            ease:"power3.inOut",
            repeat:Infinity,
            stagger: 0.5
            // delay:5
        })
    })
    return (
        <>
        {/* <Navbar/> */}
        <div className="me w-full h-screen">
            <div className='me-image'>
                <img src="my-image1.png" alt="" />
            </div>
            <div className='me-text'>
                {["Hi,There"].map((item,index)=>{
                    return <h1 className='me-text-h1'>{item}</h1>
                })}
                  <p className='text-2xl mt-10 ' id='detail'>I am <span className='minitext text-4xl text-[#87AAAA]'> Rajat Soni</span>, I'm Front end developer or Motivated web designer with a passion for crafting beautiful, <span className='minitext text-4xl text-[#87AAAA]'>user-friendly</span> websites. Skilled in HTML, CSS, JavaScript, <span className='minitext text-4xl text-[#87AAAA]'>React</span> and design tools (Photoshop, Sketch). Eager to contribute to impactful projects and grow my <span className='minitext text-4xl text-[#87AAAA]'>design career</span>.</p>
                <a href="../rajat-soni.pdf" download="resume">
                <button >Download CV <IoIosCloudDownload/></button></a>
            </div>
        </div>
            <div className='fullAbout w-full h-screen bg-white'>
                <div className="cir1"></div>
                <div className="cir2"></div>
                <div className=' w-full h-min flex justify-center overflow-hidden'>
                    {"STUDY".split("").map((item, index) => {
                        return <h1 className='text'>{item}</h1>
                    })}
                    {/* <span className='hi text-white text-6xl '>Hi, There</span> */}
                </div>
                <div className='back'>
                    <div className="hr"></div>
                    <div className='college'>
                        <img src="./degree.png" alt="" />
                        <div className="">
                            <h1>The Technological Institute of Textile & Sciences</h1>
                            <p>B.Tech (computer Enginering)</p>
                            <p>Cgpa 7.1</p>
                        </div>
                    </div>
                    <div className="Diploma">
                        <img src="./degree.png" alt="" />
                        <div className="">
                            <h1>CH. Bansilal Polytechnique Govt. College</h1>
                            <p>Diploma (computer Enginering)</p>
                            <p>Grade 68%</p>
                        </div>
                    </div>
                    <div className='school'>
                        <img src="./tie.png" alt="" />
                        <div className="">
                            <h1>Seth Kriorimal SR. SEC. School</h1>
                            <p>Matrix </p>
                            <p>Grade 70%</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='experience w-full h-screen bg-white overflow-hidden'>
                <div className="cir3"></div>
                <div className="cir4"></div>
                <h1 className='ex-text'>Experience</h1>
                <div className="about-company">
                    <div className="intern-abt">
                        <h2 className='company-text '>Web Development Internship at Bharat Intern</h2>

                        <h1>About my Role</h1>
                        <ul><li>
                        </li>● Developed and implemented responsive website designs using javascript resulting in a visually appealing
                            and user-friendly interface.
                            <li>● Managed projects and made it authenticated for the future viewership.
                            </li></ul>
                    </div>
                    <div className='exp-project'>
                        <div className='notes-hub'>
                            <img src="./notes.png" alt="" />
                            <h1> Notes-Hub</h1>
                            <button><a href="https://rajatsoni111.github.io/nootes-hub/"> Demo </a></button>
                        </div>
                        <div className='calculator'>
                            <img src="./calculator.png" alt="calculator" />
                            <h1>Calculator</h1>
                            <button><a href="https://rajatsoni111.github.io/calculator/"> Demo </a></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FullAbout
