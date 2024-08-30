import React, { useEffect, useState } from 'react'
import "./eyes.css"
import { motion } from 'framer-motion'

function Eyes() {
    let [rotate, setRotate] = useState(0)

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX
            let mouseY = e.clientY

            let deltaX = mouseX - window.innerWidth / 2
            let deltaY = mouseY - window.innerHeight / 2

            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)
            setRotate(angle - 180)
        })
    })

    return (
        <div className='eyes-div w-full h-screen'>
            <div data-scroll data-scroll-speed="-.6" className='eye'>
            <h1 className='text-2xl text-white'>I can see You! Move your courser</h1>
            <div  className='eye-boll'>
                <div className='eye-cir1'>
                    <div className='eye-cir2'>
                        <div style={{ transform: ` rotate(${rotate}deg)` }} className='eye-line'>
                            <div className="eye-cir3"></div>
                        </div>
                    </div>
                </div>
                <div className='eye-cir1'>
                    <div className='eye-cir2'>
                        <div style={{ transform: ` rotate(${rotate}deg)` }} className='eye-line'>
                            <div className="eye-cir3"></div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Eyes
