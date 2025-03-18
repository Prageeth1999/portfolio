import React, { Suspense, useState,useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Preload } from "@react-three/drei";
import Loaderr from "../Loader";

const Model = ({isMobile}) => {
  const { scene } = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.7} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-2, 16, 2]}
        angle={0.16}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={scene}
        scale={isMobile?0.37:0.45}
        rotation={[0, -Math.PI / 2, 0]}
        position={isMobile?[0.5,-1,0]:[0.5, -2, 0]}
      ></primitive>
    </mesh>
  );
};

function TestCanvas2() {const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:500px)");
   
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => { 
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  },[]);
  
  return (
    <Canvas frameloop="demand" shadows gl={{ preserveDrawingBuffer: true }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} />
      <Suspense fallback={<Loaderr />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Model isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}

export default TestCanvas2;
