import gsap from 'gsap'
import React, { useEffect } from 'react'
import './fullAbout.css'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

function FullAbout() {
    gsap.registerPlugin(ScrollTrigger)
    useEffect(() => {
        gsap.to(".text", {
            y: 0,
            duration: 0.5,
            stagger: 0.2
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
            duration: 1,
            stagger: 1,
            scrollTrigger: {
                trigger: "experience",
                start: "top 50%",
                end: "bottom 50%",
                scrub: true
            }
        })
        // gsap.to(".calculator", {
        //      x: 0,
        //     opacity:0,
        //     duration: 10,
        //     stagger: 0.5,
        //     scrollTrigger: {
        //         trigger: "experience",
        //         start: "top 10%",
        //         end: "bottom 80%",
        //         scrub: true
        //     }
        // })
    })
    return (
        <>
            <div className='fullAbout w-full h-screen bg-white'>
                <div className="cir1"></div>
                <div className="cir2"></div>

                {/* <div className="main-content"> */}
                <div className=' w-full h-min flex justify-center overflow-hidden'>
                    {"Hi,There".split("").map((item, index) => {
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

                {/* </div> */}
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
