import React, { useState, useEffect } from "react";

const InAnimation = () => {
  const [animationStage, setAnimationStage] = useState(0);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationStage(1), 600);
    const timer2 = setTimeout(() => setAnimationStage(2), 1400);
    const timer3 = setTimeout(() => setAnimationStage(3), 2200);
    const timer4 = setTimeout(() => {
      setIsMinimized(true);
    }, 4000);
    
    const timer5 = setTimeout(() => {
      setIsFadingOut(true);
    }, 5100);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, []);

  const containerClasses = `
    bg-gradient-to-br from-slate-900 to-gray-800
    w-screen h-screen flex items-center justify-center overflow-hidden
    transition-all duration-1000 ease-in-out
  `;

  const outerCircleClasses = `
    ${isMinimized ? 'h-10 w-10 top-4 left-4 absolute shadow-lg' : 'h-64 w-64 shadow-xl'} 
    rounded-full border-2 border-blue-400
    flex items-center justify-center
    transition-all duration-700 ease-in-out
    ${animationStage >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-60'}
    ${isFadingOut ? 'opacity-0' : ''}
    transform-gpu
  `;

  const middleSquareClasses = `
    ${animationStage >= 1 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'} 
    ${isMinimized ? 'h-6 w-6' : 'h-40 w-40'} 
    border-2 border-blue-400
    ${animationStage >= 2 ? 'rotate-45' : 'rotate-0'}
    flex items-center justify-center
    transition-all duration-700 ease-in-out
    transform-gpu
  `;

  const innerCircleClasses = `
    ${animationStage >= 2 ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-full'}
    ${isMinimized ? 'h-4 w-4' : 'h-24 w-24'} 
    rounded-full bg-blue-400
    transition-all duration-700 ease-in-out
    ${animationStage >= 3 ? 'scale-100' : 'scale-0 opacity-0'}
    transition-transform duration-500 ease-out
    transform-gpu
  `;



  const shineEffect = `
    before:content-[''] before:absolute before:inset-0
    before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent
    before:opacity-40 before:rounded-full before:transform-gpu before:transition-all
    ${animationStage >= 3 ? 'before:translate-x-full' : 'before:-translate-x-full'}
    before:duration-1500 before:ease-in-out before:delay-200
    relative overflow-hidden
  `;

  return (
    <div className={containerClasses}>
      <div className={`${outerCircleClasses} ${shineEffect}`}>
        <div className={middleSquareClasses}>
          <div className={`${innerCircleClasses} ${shineEffect}`}></div>
        </div>
      </div>
    </div>
  );
};

export default InAnimation;