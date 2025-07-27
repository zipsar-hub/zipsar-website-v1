import React from "react";
import { motion } from "framer-motion";
const HeroMoon = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="absolute top-1/2 left-0 h-[40vh] md:h-screen w-full rounded-[100%] translate translate-y-[70%] md:translate-y-30 inner-shadow"
    ></motion.div>
  );
};

export default HeroMoon;
