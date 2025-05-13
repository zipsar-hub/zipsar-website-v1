import React, { useEffect, useState, useRef } from 'react';
import { Award, Users, CheckCircle } from 'lucide-react';

interface CounterState {
  projects: number;
  satisfaction: number;
  awards: number;
}

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [counters, setCounters] = useState<CounterState>({
    projects: 0,
    satisfaction: 0,
    awards: 0
  });
  
  // Animation state for particles and grid
  const [particlesAnimated, setParticlesAnimated] = useState<boolean>(false);

  useEffect(() => {
    // Create intersection observer to detect when section is in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Start animations when section is visible
          setIsVisible(true);
          
          // Delayed particle animation
          setTimeout(() => {
            setParticlesAnimated(true);
          }, 800);
          
          // Animate counters with a slight delay
          setTimeout(() => {
            const projectInterval = setInterval(() => {
              setCounters(prev => ({
                ...prev,
                projects: prev.projects < 10 ? prev.projects + 1 : 10
              }));
            }, 180);
            
            const satisfactionInterval = setInterval(() => {
              setCounters(prev => ({
                ...prev,
                satisfaction: prev.satisfaction < 95 ? prev.satisfaction + 5 : 95
              }));
            }, 100);
            
            const awardsInterval = setInterval(() => {
              setCounters(prev => ({
                ...prev,
                awards: prev.awards < 5 ? prev.awards + 1 : 5
              }));
            }, 220);
            
            // Clean up intervals
            return () => {
              clearInterval(projectInterval);
              clearInterval(satisfactionInterval);
              clearInterval(awardsInterval);
            };
          }, 500);
          
          // Unobserve once animation is triggered
          observer.unobserve(sectionRef.current!);
        }
      },
      {
        rootMargin: '-100px 0px', // Trigger when section is 100px into viewport
        threshold: 0.15 // Trigger when 15% of section is visible
      }
    );
    
    // Start observing the section
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    // Cleanup observer on unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id='about' 
      ref={sectionRef}
      className="bg-gray-800/50 text-gray-100 min-h-screen w-full flex items-center overflow-hidden relative"
    >
      {/* CSS for custom card hover animations */}
      <style jsx>{`
        @keyframes cardBlink {
          0%, 100% { box-shadow: 0 0 0 rgba(59, 130, 246, 0); }
          25% { box-shadow: 0 0 10px rgba(59, 130, 246, 0.8); }
          35% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.3); }
          60% { box-shadow: 0 0 10px rgba(59, 130, 246, 0.8); }
          70% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.3); }
          80%, 90% { box-shadow: 0 0 15px rgba(59, 130, 246, 0.6); }
        }
        
        @keyframes purpleCardBlink {
          0%, 100% { box-shadow: 0 0 0 rgba(168, 85, 247, 0); }
          25% { box-shadow: 0 0 10px rgba(168, 85, 247, 0.8); }
          35% { box-shadow: 0 0 5px rgba(168, 85, 247, 0.3); }
          60% { box-shadow: 0 0 10px rgba(168, 85, 247, 0.8); }
          70% { box-shadow: 0 0 5px rgba(168, 85, 247, 0.3); }
          80%, 90% { box-shadow: 0 0 15px rgba(168, 85, 247, 0.6); }
        }
        
        @keyframes tealCardBlink {
          0%, 100% { box-shadow: 0 0 0 rgba(45, 212, 191, 0); }
          25% { box-shadow: 0 0 10px rgba(45, 212, 191, 0.8); }
          35% { box-shadow: 0 0 5px rgba(45, 212, 191, 0.3); }
          60% { box-shadow: 0 0 10px rgba(45, 212, 191, 0.8); }
          70% { box-shadow: 0 0 5px rgba(45, 212, 191, 0.3); }
          80%, 90% { box-shadow: 0 0 15px rgba(45, 212, 191, 0.6); }
        }
        
        .card-blue:hover {
          animation: cardBlink 2s ease-in-out;
          border-color: rgba(59, 130, 246, 0.8);
        }
        
        .card-purple:hover {
          animation: purpleCardBlink 2s ease-in-out;
          border-color: rgba(168, 85, 247, 0.8);
        }
        
        .card-teal:hover {
          animation: tealCardBlink 2s ease-in-out;
          border-color: rgba(45, 212, 191, 0.8);
        }
        
        .icon-glow-blue:hover {
          filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.8));
        }
        
        .icon-glow-purple:hover {
          filter: drop-shadow(0 0 8px rgba(168, 85, 247, 0.8));
        }
        
        .icon-glow-teal:hover {
          filter: drop-shadow(0 0 8px rgba(45, 212, 191, 0.8));
        }
      `}</style>
      
      {/* Background animation */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute top-10 left-10 w-24 h-24 rounded-full bg-blue-500/20 transition-all duration-3000 ${
          isVisible ? 'scale-100 opacity-50' : 'scale-0 opacity-0'
        }`} style={{ animationDelay: '1.2s' }}></div>
        <div className={`absolute bottom-20 right-20 w-48 h-48 rounded-full bg-purple-500/10 transition-all duration-3000 ${
          isVisible ? 'scale-100 opacity-30' : 'scale-0 opacity-0'
        }`} style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div 
            className={`lg:w-1/2 transition-all duration-1000 transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            }`}
          >
            <div className="relative">
              <h2 className="text-3xl font-headerBold md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent inline-block">
                About Zipsar
              </h2>
              <div className={`h-1 w-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mb-8 transition-all duration-1500 ${
                isVisible ? 'w-full' : 'w-0'
              }`} style={{ transitionDelay: '400ms' }}></div>
            </div>
            
            <p className={`mb-6 text-gray-300 leading-relaxed font-second transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`} style={{ transitionDelay: '600ms' }}>
              At Zipsar, we are pioneers in digital innovation, crafting next-generation solutions that blend cutting-edge technology with exceptional design. Our team of passionate experts is dedicated to pushing boundaries and creating digital experiences that stand out in today's competitive landscape.
            </p>
            
            <p className={`text-gray-300 leading-relaxed font-second transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`} style={{ transitionDelay: '800ms' }}>
              Founded with a vision to transform how businesses interact with technology, we've helped numerous clients across industries achieve their digital transformation goals. We believe in collaboration, transparency, and delivering results that exceed expectations.
            </p>
          </div>
          
          {/* Right Image */}
          <div 
            className={`lg:w-1/2 transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            }`}
          >
            <div className="relative">
              <div className={`absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-0 blur-lg transition-opacity duration-2000 ${
                isVisible ? 'opacity-30 animate-pulse' : 'opacity-0'
              }`} style={{ animationDuration: '3s' }}></div>
              <div className="relative bg-gray-800 rounded-lg overflow-hidden p-2">
                <svg 
                  className="w-full h-64 md:h-80" 
                  viewBox="0 0 500 400" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#4F46E5" />
                      <stop offset="100%" stopColor="#9333EA" />
                    </linearGradient>
                    <clipPath id="clipPath">
                      <rect x="100" y="50" width="300" height="300" rx="8" />
                    </clipPath>
                  </defs>
                  
                  {/* Abstract digital elements */}
                  <g clipPath="url(#clipPath)">
                    <rect x="0" y="0" width="500" height="400" fill="#1F2937" />
                    
                    {/* Animated grid */}
                    {Array.from({ length: 10 }).map((_, i) => (
                      <line 
                        key={`h-${i}`}
                        x1="0" 
                        y1={50 + i * 30} 
                        x2="500" 
                        y2={50 + i * 30} 
                        stroke="#374151" 
                        strokeWidth="1"
                        className={`transition-all duration-1000 ${
                          isVisible ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{ transitionDelay: `${i * 100}ms` }}
                      />
                    ))}
                    {Array.from({ length: 10 }).map((_, i) => (
                      <line 
                        key={`v-${i}`}
                        x1={100 + i * 30} 
                        y1="0" 
                        x2={100 + i * 30} 
                        y2="400" 
                        stroke="#374151" 
                        strokeWidth="1"
                        className={`transition-all duration-1000 ${
                          isVisible ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{ transitionDelay: `${500 + i * 100}ms` }}
                      />
                    ))}
                    
                    {/* Animated pulsing circle */}
                    <circle 
                      cx="250" 
                      cy="200" 
                      r="80" 
                      fill="url(#grad1)" 
                      opacity="0.7"
                      className={`${particlesAnimated ? 'animate-ping' : ''}`}
                      style={{ animationDuration: '4s' }}
                    />
                    
                    <circle 
                      cx="250" 
                      cy="200" 
                      r="60" 
                      fill="#1F2937" 
                      className={`transition-all duration-1000 ${
                        isVisible ? 'opacity-100' : 'opacity-0'
                      }`}
                      style={{ transitionDelay: '1000ms' }}
                    />
                    
                    {/* Digital particles */}
                    {Array.from({ length: 20 }).map((_, i) => {
                      const size = 2 + Math.random() * 4;
                      const x = 100 + Math.random() * 300;
                      const y = 50 + Math.random() * 300;
                      const delay = 1000 + i * 100;
                      const animDuration = 1 + Math.random() * 2;
                      
                      return (
                        <circle
                          key={`p-${i}`}
                          cx={x}
                          cy={y}
                          r={size}
                          fill="#60A5FA"
                          opacity={0.6 + Math.random() * 0.4}
                          className={`transition-all duration-1000 ${
                            particlesAnimated ? 'animate-pulse' : 'opacity-0'
                          }`}
                          style={{ 
                            transitionDelay: `${delay}ms`,
                            animationDuration: `${animDuration}s`,
                            animationDelay: `${i * 0.2}s`
                          }}
                        />
                      );
                    })}
                    
                    {/* Code-like elements */}
                    {Array.from({ length: 6 }).map((_, i) => {
                      const width = 100 + Math.random() * 100;
                      const delay = 1200 + i * 200;
                      
                      return (
                        <rect
                          key={`c-${i}`}
                          x={150}
                          y={100 + i * 30}
                          width={width}
                          height="10"
                          rx="2"
                          fill="#9333EA"
                          className={`transition-all duration-1000 ${
                            isVisible ? 'opacity-50' : 'opacity-0'
                          }`}
                          style={{ 
                            transitionDelay: `${delay}ms`,
                            transform: isVisible ? 'translateX(0)' : 'translateX(-50px)'
                          }}
                        />
                      );
                    })}
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Projects Card */}
          <div 
            className={`card-blue bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 transition-all duration-300 group transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
            }`}
            style={{ transitionDelay: '300ms', transitionDuration: '1000ms' }}
          >
            <div className="relative overflow-hidden">
              {/* Glow overlay that appears on hover */}
              <div className="absolute inset-0 opacity-0 bg-blue-500/5 group-hover:opacity-100 transition-opacity duration-500 rounded"></div>
              
              <div className="flex items-center mb-4 relative z-10">
                <div className="p-3 bg-blue-500 bg-opacity-20 rounded-full mr-4 group-hover:bg-opacity-30 transition-all icon-glow-blue">
                  <CheckCircle className={`h-6 w-6 text-white ${isVisible ? 'animate-bounce' : ''}`} 
                    style={{ animationDuration: '2s', animationDelay: '500ms', animationIterationCount: '3' }} />
                </div>
                <h3 className="text-xl font-semibold text-gray-100 font-second group-hover:text-blue-200 transition-colors duration-300">Projects Completed</h3>
              </div>
              <div className="flex items-baseline relative z-10">
                <span className="text-4xl font-bold text-blue-400 font-second group-hover:text-blue-300 transition-colors duration-300">{counters.projects}+</span>
                <span className="ml-2 text-gray-400 font-second group-hover:text-gray-300 transition-colors duration-300">successful projects</span>
              </div>
              <div className="mt-4 w-full bg-gray-700 h-1 rounded-full overflow-hidden relative z-10">
                <div 
                  className="bg-gradient-to-r from-blue-400 to-blue-600 h-full rounded-full transition-all duration-1000 group-hover:from-blue-300 group-hover:to-blue-500"
                  style={{ width: `${counters.projects * 10}%` }}
                ></div>
              </div>
            </div>
          </div>
          
          {/* Client Satisfaction Card */}
          <div 
            className={`card-purple bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 transition-all duration-300 group transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
            }`}
            style={{ transitionDelay: '500ms', transitionDuration: '1000ms' }}
          >
            <div className="relative overflow-hidden">
              {/* Glow overlay that appears on hover */}
              <div className="absolute inset-0 opacity-0 bg-purple-500/5 group-hover:opacity-100 transition-opacity duration-500 rounded"></div>
              
              <div className="flex items-center mb-4 relative z-10">
                <div className="p-3 bg-purple-500 bg-opacity-20 rounded-full mr-4 group-hover:bg-opacity-30 transition-all icon-glow-purple">
                  <Users className={`h-6 w-6 text-white ${isVisible ? 'animate-bounce' : ''}`}
                    style={{ animationDuration: '2s', animationDelay: '700ms', animationIterationCount: '3' }} />
                </div>
                <h3 className="text-xl font-semibold text-gray-100 font-second group-hover:text-purple-200 transition-colors duration-300">Client Satisfaction</h3>
              </div>
              <div className="flex items-baseline relative z-10">
                <span className="text-4xl font-bold text-purple-400 font-second group-hover:text-purple-300 transition-colors duration-300">{counters.satisfaction}%</span>
                <span className="ml-2 text-gray-400 font-second group-hover:text-gray-300 transition-colors duration-300">satisfaction rate</span>
              </div>
              <div className="mt-4 w-full bg-gray-700 h-1 rounded-full overflow-hidden relative z-10">
                <div 
                  className="bg-gradient-to-r from-purple-400 to-purple-600 h-full rounded-full transition-all duration-1000 group-hover:from-purple-300 group-hover:to-purple-500"
                  style={{ width: `${counters.satisfaction}%` }}
                ></div>
              </div>
            </div>
          </div>
          
          {/* Awards Card */}
          <div 
            className={`card-teal bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 transition-all duration-300 group transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
            }`}
            style={{ transitionDelay: '700ms', transitionDuration: '1000ms' }}
          >
            <div className="relative overflow-hidden">
              {/* Glow overlay that appears on hover */}
              <div className="absolute inset-0 opacity-0 bg-teal-500/5 group-hover:opacity-100 transition-opacity duration-500 rounded"></div>
              
              <div className="flex items-center mb-4 relative z-10">
                <div className="p-3 bg-teal-500 bg-opacity-20 rounded-full mr-4 group-hover:bg-opacity-30 transition-all icon-glow-teal">
                  <Award className={`h-6 w-6 text-white ${isVisible ? 'animate-bounce' : ''}`}
                    style={{ animationDuration: '2s', animationDelay: '900ms', animationIterationCount: '3' }} />
                </div>
                <h3 className="text-xl font-semibold text-gray-100 font-second group-hover:text-teal-200 transition-colors duration-300">Industry Awards</h3>
              </div>
              <div className="flex items-baseline relative z-10">
                <span className="text-4xl font-bold text-teal-400 font-second group-hover:text-teal-300 transition-colors duration-300">{counters.awards}+</span>
                <span className="ml-2 text-gray-400 font-second group-hover:text-gray-300 transition-colors duration-300">prestigious awards</span>
              </div>
              <div className="mt-4 w-full bg-gray-700 h-1 rounded-full overflow-hidden relative z-10">
                <div 
                  className="bg-gradient-to-r from-teal-400 to-teal-600 h-full rounded-full transition-all duration-1000 group-hover:from-teal-300 group-hover:to-teal-500"
                  style={{ width: `${counters.awards * 20}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;