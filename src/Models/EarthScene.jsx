import React, { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Earth } from "./Earth";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

const EarthScene = ({ onLoaded }) => {
  const earthRef = useRef();
  const cameraRef = useRef();
  const { mouse } = useThree();

  useEffect(() => {
    // Notify that the scene is ready
    const timer = setTimeout(() => {
      if (onLoaded) onLoaded();
    }, 100);

    return () => clearTimeout(timer);
  }, [onLoaded]);

  useEffect(() => {
    // Setup scroll-triggered animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    if (earthRef.current) {
      tl.to(earthRef.current.rotation, {
        y: "+=6.28", // 2π radians for full rotation
        duration: 1,
      }).to(
        earthRef.current.position,
        {
          z: -2,
          y: 0,
          duration: 1,
        },
        0
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Smooth frame-by-frame animations
  useFrame((state, delta) => {
    if (earthRef.current) {
      // Main rotation animation
      earthRef.current.rotation.y += delta * 0.2;

      // Subtle mouse interaction
      const mouseInfluence = 0.1;
      earthRef.current.rotation.x = THREE.MathUtils.lerp(
        earthRef.current.rotation.x,
        mouse.y * mouseInfluence,
        0.02
      );

      earthRef.current.rotation.z = THREE.MathUtils.lerp(
        earthRef.current.rotation.z,
        mouse.x * mouseInfluence * 0.5,
        0.02
      );

      // Gentle floating animation
      earthRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }

    // Subtle camera movement
    if (cameraRef.current) {
      cameraRef.current.position.z = 4 + Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }
  });

  return (
    <>
      <PerspectiveCamera
        ref={cameraRef}
        fov={45}
        near={0.1}
        far={1000}
        makeDefault
        position={[0, 1.8, 4]}
      />

      <Environment
        preset="night"
        backgroundIntensity={0.2} // Reduced for darker background
        environmentIntensity={0.3} // Reduced for less reflected light
      />

      {/* Darker lighting */}
      <ambientLight intensity={0.2} /> {/* Reduced intensity */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={0.8} // Reduced intensity
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight position={[-5, -5, 0]} intensity={0.4} color="#4A90E2" /> {/* Reduced intensity */}

      <group ref={earthRef} position={[0, 0, 0]}>
        <Earth />
      </group>
    </>
  );
};

export default EarthScene;