import React from "react";
import GradientText from "../Animated/GradiantText";
import { Link } from "react-scroll";

const ServiceCard = ({ title, content, image }) => {
  return (
    <div className="w-full h-[50vh] sm:h-[40vh] md:h-[35vh] flex flex-col sm:flex-row">
      <div className="w-full sm:w-1/2 h-1/2 sm:h-full bg-gradient-to-br from-[#a556fb] via-[#ffffff] to-[#4922e5] rounded-tl-[15px] rounded-tr-[15px] sm:rounded-tr-none rounded-bl-none sm:rounded-bl-[15px] relative">
        <div className="absolute abs-center w-[95%] h-[95%] bg-black rounded-tl-[15px] overflow-hidden rounded-tr-[15px] sm:rounded-tr-none rounded-bl-none sm:rounded-bl-[15px]">
          <img
            src={image}
            alt="Card Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="w-full sm:w-1/2 h-1/2 sm:h-full bg-white/10 backdrop-blur-3xl font-button rounded-bl-[15px] sm:rounded-bl-none rounded-br-[15px] rounded-tr-none sm:rounded-tr-[15px] px-3 py-4 col-around gap-2 sm:gap-4">
        <GradientText
          textAlign="left"
          enableSplitAnimation={false}
          className="font-bold text-lg sm:text-xl md:text-2xl w-full"
        >
          {title}
        </GradientText>
        <p className="text-xs sm:text-sm leading-relaxed">{content}</p>
        <Link to="Contact" smooth className="w-full">
          <button className="w-[95%] py-2 sm:py-3 rounded-3xl border border-[#a556fb] text-xs sm:text-sm hover:bg-[#a556fb]/10 transition-colors">
            Know More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
