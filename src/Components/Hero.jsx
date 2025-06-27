import { useGSAP } from "@gsap/react";
import Navbar from "./Navbar";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas } from "@react-three/fiber";
import EarthScene from "../Models/EarthScene";
import { Suspense, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Hero = () => {
  const mainRef = useRef(null);
  const sceneRef = useRef(null);
  // eslint-disable-next-line no-unused-vars
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    if (!showContent) return;

    const greetingElement = document.querySelector(".greeting");
    if (!greetingElement) return;

    const split = new SplitText(".greeting", { type: "chars" });

    gsap.set(split.chars, {
      y: 100,
      opacity: 0,
    });

    gsap.to(split.chars, {
      y: 0,
      opacity: 1,
      ease: "back.out(1.7)",
      stagger: 0.02,
      duration: 1.2,
      delay: 0.2,
    });

    gsap.fromTo(".earth-canvas", 
      {
        opacity: 0,
        scale: 0.9,
        y: 30
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        delay: 0.5
      }
    );

    gsap.from('.navbar', {
      y: -100,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      delay: 0.3
    });

    return () => {
      split.revert();
    };
  }, [showContent]);

  const handleModelLoaded = () => {
    setIsModelLoaded(true);
    // Small delay to ensure everything is ready
    setTimeout(() => {
      setShowContent(true);
    }, 300);
  };

  return (
    <>
      <section
        ref={mainRef}
        className="hero-section relative h-screen w-full bg-gradient-to-b from-black to-stone-900 overflow-hidden"
      >
        <div className={`navbar ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          <Navbar />
        </div>
        
        <div className={`h-full flex flex-col items-center justify-start pt-20 md:pt-28 relative transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="font-header font-bold text-5xl md:text-9xl text-white greeting z-10">
            Welcome to zipsar
          </h1>
          
          <div
            className="absolute bottom-0 w-full h-[70vh] earth-canvas"
            ref={sceneRef}
          >
            <Canvas
              camera={{ 
                position: [0, 1.8, 4],
                fov: 45,
                near: 0.1,
                far: 1000
              }}
              gl={{ 
                antialias: true,
                alpha: true,
                powerPreference: "high-performance"
              }}
              dpr={Math.min(window.devicePixelRatio, 2)}
            >
              <Suspense fallback={null}>
                <EarthScene onLoaded={handleModelLoaded} />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;