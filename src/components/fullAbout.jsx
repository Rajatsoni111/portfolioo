import gsap from 'gsap'
import React, { useEffect } from 'react'
import './fullAbout.css'

function FullAbout() {
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
            delay: 2,
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
    })
    return (
        <div className='fullAbout w-full h-screen bg-white'>
            <div className=' w-full h-min flex justify-center  overflow-hidden'>
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
        </div>
    )
}

export default FullAbout
