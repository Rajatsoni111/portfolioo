/* eslint-disable */
import React, { useEffect } from 'react'
import "./firstpage.css"
import Cyl from './cyl'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import { CylinderGeometry } from 'three';
import { useRef } from 'react';
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing'
import { useState } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useAnimation } from 'framer-motion';

function Firstpage({props}, ref) {
    gsap.registerPlugin(ScrollTrigger);

    // const split = SplitText.create("#detail", {type: "chars"})
    // const chars = split.chars
    useEffect(() => {
        gsap.to(".name-1", {
            y: 0,
            duration: 1,
            //    transition:1,
            stagger: 0.2,
            ease: 'power4.inOut'

        })
    })
const cards = [useAnimation(),useAnimation(),useAnimation(),useAnimation(),useAnimation(),useAnimation(),useAnimation(),useAnimation(),useAnimation(),useAnimation()]
const onHoverStart =(index)=>{
    cards[index].start({scale:0.5, duration:0.5})
    }

const onHoverEnd =(index)=>{
cards[index].start({scale:1,  duration:0.5})
}
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.4"
            id='loading-page' className=' w-full h-full ' ref={ref} >
            <div className=" flex w-full h-[80%]  item-center" >
                <div className="upper-div flex  items-center w-[100%] h-full border-1 border-indigo-50 " >
                    <div className='div'>
                        {"RAJAT SONI".split("").map((item, index) => {
                            return <div className='name-1'><motion.p onHoverStart={()=>onHoverStart(index)} onHoverEnd={()=>onHoverEnd(index)} initial={{scale:1}} animate={cards[index]} className='name-1-p'>{item}</motion.p></div>
                        })}
                    </div>
                    <div className='div-1'>
                        {["RAJAT SONI"].map((item, index) => {
                            return <div className='name-1'><p className='name-1-1 text-9xl'>{item}</p></div>
                        })}
                    </div>
                </div>
                {/* <div  className='canvas'>
                <Canvas  camera={{ fov: 35 }}>
                    <OrbitControls enableZoom={false} />
                    <ambientLight />
                    <Cyl />
                    <EffectComposer>
                        <Bloom
                            mipmapBlur
                            intensity={7.1} // The bloom intensity.
                            luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
                            luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
                        />
                        <ToneMapping adaptive></ToneMapping>
                    </EffectComposer>
                </Canvas>
            </div> */}
            </div>
            <div className=" h-[20%]  bg-[#4b4b4b] text-white">
                <div className=" flex justify-around border-t-[1px] border-black">
                    {["Web Developer", "Web Designer"].map((item, index) => {
                        return <div className='mt-2'><p>{item}</p></div>
                    })}
                    <div className=" border-[1px] rounded-3xl p-2 mt-2"><p>scroll down</p></div>
                </div>
            </div>

        </div>
    )
}

export default React.forwardRef(Firstpage)
