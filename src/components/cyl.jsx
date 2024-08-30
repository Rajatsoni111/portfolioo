import { useTexture } from '@react-three/drei'
import {  useFrame } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import * as Three from "three"


function Cyl() {
    let tax =useTexture('./image.png')
   tax.needsUpdate = true
   useFrame((state, delta) =>{
    cyl.current.rotation.y -= delta
   })
   let cyl = useRef(null)

   let [rotate, setRotate] = useState(0)

   useEffect(() => {
       window.addEventListener("mousemove", (e) => {
           let mouseX = e.clientX
           let mouseY = e.clientY

           let deltaX = mouseX -window.innerWidth / 2
           let deltaY = mouseY - window.innerHeight / 2

           var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)
           setRotate(angle-180)
       })
   })

    return (
        <group style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} rotation={[0,0.5,0.4]}>
        <mesh ref={cyl}>
        <cylinderGeometry  args={[1,1,1,60,60,60,true]}/>
        <meshStandardMaterial map={tax} side={Three.DoubleSide}/>
      </mesh>
    
      </group>

      
  )
}

export default Cyl
