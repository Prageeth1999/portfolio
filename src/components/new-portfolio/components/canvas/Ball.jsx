import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Decal,
  Float,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  return (
    <Float speed={1.75} floatIntensity={2} rotationIntensity={1}>
      <ambientLight intensity={0.95} />
      <directionalLight position={[0, 0, 0.05]} />
      <hemisphereLight intensity={0.7} groundColor="black" />
      <mesh castShadow receiveShadow scale={2.75}>
      <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#ffffff"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          map={decal}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
