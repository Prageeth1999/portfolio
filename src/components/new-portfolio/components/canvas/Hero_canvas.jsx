import React from 'react'
import { Canvas } from '@react-three/fiber'

function Hero_canvas() {
  return (
    <Canvas >
        <ambientLight intensity={0.7} />
        <directionalLight  position={[5,5,5]}/>
        <mesh rotation={[0,1,-3]} position={[0,-2,0]}>
            <boxGeometry args={[1,1,1]}/>
            
            <meshStandardMaterial color="blue" />
        </mesh>
    </Canvas>
  )
}

export default Hero_canvas