import React from "react";
import HeroMoon from "../Components/Moon/HeroMoon";
import GradientText from "../Components/Animated/GradiantText";

const Hero = () => {
  return (
    <section
      id="Home"
      className="w-full h-[calc(100vh-80px)] bg-black text-white overflow-hidden relative pt-15"
    >
      <HeroMoon />
      <h1 className="font-extrabold text-3xl lg:text-6xl w-full text-center font-button mt-15 leading-tight">
        Transforming Ideas into
      </h1>
      <GradientText className="font-extrabold text-3xl lg:text-6xl w-full text-center font-button leading-relaxed">
        Digital Reality
      </GradientText>
      <p className="font-medium text-gray-200 mt-3 w-[40vw] mx-auto text-center font-button">
        We create cutting-edge digital solutions that push the boundaries of
        what's possible, helping business thrive in the digital age.
      </p>

      <div className="mt-10 mx-auto flex-center gap-15 font-button">
        <button className="px-4 py-2 border border-[#a556fb] rounded-[8px] text-[#a556fb]">
          Explore Service
        </button>
        <button className="px-4 py-2 bg-[#a556fb] rounded-[8px]">
          Get in Touch
        </button>
      </div>
    </section>
  );
};

export default Hero;
