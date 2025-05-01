'use client'
import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import InAnimation from "./Components/InAnimation";
import Navbar from "./Components/Navbar";

const Home: React.FC = () => {
  const [showMain, setShowMain] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const rotatingTexts = ["Reality", "Future", "World"];
  
  // Mouse position tracking for parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Create parallax effect based on mouse position
  const titleX = useTransform(mouseX, [-500, 500], [40, -40]);
  const titleY = useTransform(mouseY, [-500, 500], [40, -40]);
  const subtitleX = useTransform(mouseX, [-500, 500], [20, -20]);
  const subtitleY = useTransform(mouseY, [-500, 500], [20, -20]);
  const bgX = useTransform(mouseX, [-500, 500], [15, -15]);
  const bgY = useTransform(mouseY, [-500, 500], [15, -15]);

  // Letter animation tracking
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [mainText, setMainText] = useState("Transform Idea into");
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMain(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showMain) {
      const textInterval = setInterval(() => {
        setTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
      }, 2000);

      return () => clearInterval(textInterval);
    }
  }, [showMain]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate mouse position relative to center of window
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  // Text scramble effect
  useEffect(() => {
    if (isHovering) {
      let iteration = 0;
      const originalText = "Transform Idea into";
      
      const interval = setInterval(() => {
        setMainText(prevText => {
          return prevText
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return originalText[index];
              }
              
              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");
        });
        
        if (iteration >= originalText.length) {
          clearInterval(interval);
        }
        
        iteration += 1 / 3;
      }, 30);
      
      return () => clearInterval(interval);
    }
  }, [isHovering]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1]  // cubic-bezier
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  // Button animations
  const buttonVariants = {
    initial: { scale: 1, opacity: 0, y: 30 },
    animate: { 
      scale: 1, 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1]
      }
    },
    hover: { 
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };

  // Subtle floating animation
  const floatingAnimation = {
    y: [-8, 8],
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  return (
    <>
      {!showMain ? (
        <div>
          <InAnimation />
        </div>
      ) : (
        <div className="bg-gradient-to-br from-slate-900 to-gray-800 min-h-screen">
          <Navbar/>
          
          <section id="home" className="relative h-screen w-full overflow-hidden">
            {/* Grid Pattern Background with Parallax */}
            <motion.div 
              className="absolute inset-0"
              style={{ x: bgX, y: bgY }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="h-full w-full" 
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'repeat',
                  maskImage: 'radial-gradient(circle at center, rgba(0, 0, 0, 1) 60%, transparent 100%)'
                }}>
              </div>
            </motion.div>
            
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent pointer-events-none" />
            
            {/* Content container with 3D parallax effect */}
            <div className="relative z-10 container mx-auto px-6 h-full flex items-center justify-center">
              <motion.div 
                className="text-white flex flex-col items-center justify-center"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {/* 3D Text Heading with Parallax */}
                <motion.div
                  style={{ 
                    x: titleX,
                    y: titleY,
                  }}
                  variants={fadeInUp}
                  className="mb-2"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => {
                    setIsHovering(false);
                    setMainText("Transform Idea into");
                  }}
                >
                  <h1 className="text-4xl md:text-6xl font-bold">
                    {mainText}
                  </h1>
                </motion.div>
                
                <motion.div 
                  className="text-4xl md:text-6xl font-bold mb-10 h-20 flex items-center justify-center text-blue-400"
                  style={{ 
                    x: titleX,
                    y: titleY,
                    perspective: "1000px",
                  }}
                  variants={fadeInUp}
                  animate={floatingAnimation}
                >
                  <motion.span className="inline-block mr-2">
                    Digital
                  </motion.span>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={textIndex}
                      className="inline-block"
                      initial={{ opacity: 0, rotateX: -20, y: 20, scale: 0.9 }}
                      animate={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
                      exit={{ opacity: 0, rotateX: 20, y: -20, scale: 0.9 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 100, 
                        damping: 15,
                        duration: 0.7
                      }}
                    >
                      {rotatingTexts[textIndex]}
                    </motion.span>
                  </AnimatePresence>
                </motion.div>
                
                <motion.div 
                  variants={fadeInUp}
                  className="text-sm md:text-lg mb-12 max-w-2xl text-center"
                  style={{ x: subtitleX, y: subtitleY }}
                >
                  <p className="leading-relaxed text-gray-300">
                    We create cutting-edge digital solutions that push the boundaries of what's possible,
                    helping businesses thrive in the digital age.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="flex gap-7"
                  variants={fadeInUp}
                >
                  <motion.button 
                    className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg font-medium transition-colors duration-300"
                    variants={buttonVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Explore Service
                  </motion.button>
                  
                  <motion.button 
                    className="border-2 border-blue-500 text-blue-500 hover:text-blue-400 hover:border-blue-400 py-3 px-8 rounded-lg font-medium transition-colors duration-300"
                    variants={buttonVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Get in Touch
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
            
            {/* Animated corner accent */}
            <motion.div 
              className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 opacity-30 pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            
            <motion.div 
              className="absolute top-32 left-8 w-4 h-4 rounded-full bg-blue-400 opacity-60 pointer-events-none"
              animate={{
                y: [0, 30, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </section>

          <section id="service" className="w-screen h-screen"></section>
          <section id="about" className="w-screen h-screen"></section>
          <section id="contact" className="w-screen h-screen"></section>
        </div>
      )}
    </>
  );
};

export default Home;