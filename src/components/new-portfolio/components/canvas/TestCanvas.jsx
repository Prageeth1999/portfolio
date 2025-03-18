import React from 'react'
import { Canvas } from '@react-three/fiber'

function TestCanvas() {
  return (
    <Canvas camera={{position:[2,8,10],fov:70}} >
    <ambientLight intensity={0.8} />
    <directionalLight  position={[5,5,5]}/>
    <mesh rotation={[0,1,-3]} position={[0,-2,0]}>
        <boxGeometry args={[1,1,1]}/>
        
        <meshStandardMaterial color="blue" />
    </mesh>
</Canvas>
  )
}

export default TestCanvas