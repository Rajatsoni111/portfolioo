import React, { useEffect, useState } from 'react'
import "./about.css"
import { FaInstagram, FaRegObjectUngroup } from "react-icons/fa";
import { FaGithub , FaLinkedinIn} from "react-icons/fa6";
import { LuExternalLink } from "react-icons/lu";
import { color } from 'framer-motion';
import gsap from 'gsap';

function About() {

    useEffect(()=>{
        gsap.to(".tag-name",{
            y:0,
            stagger:0.2,
            duration:1,
            scrollTrigger:{
        trigger:".tag",
        start:"top 80%",
        end:"bottom 80%"
    }
        })
    })
   
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.08"
        className='about w-full h-screen'>
            <div className='tag flex gap-4 justify-center overflow-hidden'>
                {"who i am".split("").map((item,index)=>{
                return <h1 className='tag-name'>{item}</h1>
            })}</div>

            <div className="about-section">
                <div className="about-para  w-[50%] text-white ">
                    <h2 className='text-6xl '>About Me</h2>
                    <p className='text-2xl mt-10 ' id='detail'>Hello, I'm Front end developer or Motivated web designer with a passion for crafting beautiful, user-friendly websites. Skilled in HTML, CSS, JavaScript, and design tools (Photoshop, Sketch). Eager to contribute to impactful projects and grow my design career.</p>
                    <div className='icons flex gap-10 justify-center ml-[10rem] scale-150 mt-10'>
                       <a href="https://www.instagram.com/rajat__soni7"><FaInstagram /></a>
                       <a href="https://www.linkedin.com/in/rajat-soni7205/"><FaGithub/></a>
                       <a href="https://github.com/Rajatsoni111"><FaLinkedinIn/></a>
                        </div>
                        <button className='mt-6 border-[1px] rounded-sm p-3 gap-4 flex items-center' >Lerne More<LuExternalLink/></button>
                </div>
                <div className="about-image">
                    <div className='img-back'></div>
                    <img className="" src="./my-image1.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default About
