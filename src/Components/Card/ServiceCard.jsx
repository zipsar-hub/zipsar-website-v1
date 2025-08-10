import React from "react";
import GradientText from "../Animated/GradiantText";
import { Link } from "react-scroll";

const ServiceCard = ({ title, content, image }) => {
  return (
    <div className="w-full h-full flex flex-col sm:flex-row min-h-[400px] sm:min-h-[300px]">
      {/* Image Section */}
      <div className="w-full sm:w-1/2 h-48 sm:h-full bg-gradient-to-br from-[#a556fb] via-[#ffffff] to-[#4922e5] rounded-tl-[15px] rounded-tr-[15px] sm:rounded-tr-none rounded-bl-none sm:rounded-bl-[15px] p-[2px] flex-shrink-0">
        <div className="w-full h-full bg-black rounded-tl-[13px] rounded-tr-[13px] sm:rounded-tr-none rounded-bl-none sm:rounded-bl-[13px] overflow-hidden">
          <img
            src={image}
            alt="Card Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full sm:w-1/2 flex-1 bg-white/10 backdrop-blur-3xl font-button rounded-bl-[15px] sm:rounded-bl-none rounded-br-[15px] rounded-tr-none sm:rounded-tr-[15px] px-4 py-6 flex flex-col justify-between gap-4">
        <div className="flex flex-col gap-3">
          <GradientText
            textAlign="left"
            enableSplitAnimation={false}
            className="font-bold text-lg sm:text-xl md:text-2xl w-full leading-tight"
          >
            {title}
          </GradientText>
          <p className="text-xs sm:text-sm leading-relaxed text-white/90 flex-grow">
            {content}
          </p>
        </div>

        <Link to="Contact" smooth className="w-full mt-auto">
          <button className="w-full py-3 rounded-3xl border border-[#a556fb] text-xs sm:text-sm hover:bg-[#a556fb]/10 transition-all duration-300 hover:scale-[1.02] text-white">
            Know More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
