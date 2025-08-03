/* eslint-disable no-unused-vars */
import HeroMoon from "../Components/Moon/HeroMoon";
import GradientText from "../Components/Animated/GradiantText";
import SplitText from "../Components/Animated/SplitText";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { SplitText as GSAPSplitText } from "gsap/SplitText";
import { Link } from "react-scroll";

gsap.registerPlugin(GSAPSplitText);

const Hero = () => {
  return (
    <section
      id="Home"
      className="w-full h-[calc(100vh-80px)] bg-black text-white overflow-hidden relative pt-15"
    >
      <HeroMoon />
      <SplitText
        className="font-extrabold text-3xl lg:text-6xl w-full text-center font-button mt-15 leading-tight"
        text={"Transforming Ideas into"}
        delay={150}
        duration={1}
        splitType="words"
      />
      <GradientText
        className="font-extrabold text-3xl lg:text-6xl w-full text-center font-button leading-relaxed"
        enableSplitAnimation={true}
        stagger={150}
        duration={0.8}
        delay={0.3}
        splitType="words"
        from={{ opacity: 0, y: 50 }}
        to={{ opacity: 1, y: 0 }}
        ease="power3.out"
        threshold={0.1}
        rootMargin="-50px"
      >
        Digital Reality
      </GradientText>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="font-medium text-gray-200 mt-3 w-[90vw] md:w-[40vw] mx-auto text-center font-button"
      >
        We create cutting-edge digital solutions that push the boundaries of
        what's possible, helping businesses thrive in the digital age.
      </motion.p>

      <div className="mt-10 mx-auto flex-center gap-5 md:gap-15 font-button md:w-[50vw] w-[90vw]">
        <Link to="Service" smooth>
          <motion.button
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="px-4 py-2 border border-[#a556fb] cursor-pointer rounded-[8px] text-[#a556fb]"
          >
            Explore Service
          </motion.button>
        </Link>

        <Link to="Contact" smooth>
          <motion.button
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="px-4 py-2 bg-[#a556fb] cursor-pointer rounded-[8px]"
          >
            Get in Touch
          </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
