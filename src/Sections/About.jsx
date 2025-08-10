import React from "react";

const About = () => {
  return (
    <section
      id="About"
      className="w-full min-h-screen bg-[#121314] font-button py-16 px-6 md:px-12"
    >
      {/* Title */}
      <div className="text-center my-16">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
          About <span className="text-[#a556fb]">Zipsar</span>
        </h2>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* First Column */}
              <div className="space-y-4 z-50">
                {/* Tall image */}
                <div className="relative overflow-hidden rounded-lg shadow-2xl group">
                  <img
                    src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop"
                    alt="Digital Innovation"
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                {/* Short image */}
                <div className="relative overflow-hidden rounded-lg shadow-2xl group">
                  <img
                    src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                    alt="Team Collaboration"
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Second Column */}
              <div className="space-y-4 pt-8 z-50">
                {/* Short image */}
                <div className="relative overflow-hidden rounded-lg shadow-2xl group">
                  <img
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                    alt="Technology Solutions"
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                {/* Tall image */}
                <div className="relative overflow-hidden rounded-lg shadow-2xl group">
                  <img
                    src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop"
                    alt="Digital Design"
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-[#4922e5] rounded-lg opacity-50 z-1"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-[#a556fb] rounded-lg opacity-50 z-1"></div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Stats Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-lg text-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                <div className="text-3xl font-bold text-white mb-2">10+</div>
                <div className="text-blue-100 text-sm font-medium">
                  Projects
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-6 rounded-lg text-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                <div className="text-3xl font-bold text-white mb-2">5+</div>
                <div className="text-purple-100 text-sm font-medium">
                  Clients
                </div>
              </div>
              <div className="bg-gradient-to-br from-teal-600 to-teal-800 p-6 rounded-lg text-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                <div className="text-3xl font-bold text-white mb-2">5+</div>
                <div className="text-teal-100 text-sm font-medium">
                  Partners
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-gray-300 text-base leading-relaxed font-medium">
                  At <span className="text-blue-400 font-semibold">Zipsar</span>
                  , we are pioneers in digital innovation, crafting
                  next-generation solutions that blend cutting-edge technology
                  with exceptional design. Our team of passionate experts is
                  dedicated to pushing boundaries and creating digital
                  experiences that stand out in today's competitive landscape.
                </p>
                <p className="text-gray-300 text-base leading-relaxed font-medium">
                  Founded with a vision to transform how businesses interact
                  with technology, we've helped numerous clients across
                  industries achieve their digital transformation goals. We
                  believe in collaboration, transparency, and delivering results
                  that exceed expectations.
                </p>
              </div>

              {/* Call to Action */}
              <div className="pt-8">
                <button className="group relative px-8 py-4 bg-[#a556fb] text-white font-semibold rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                  <span className="relative z-10">Learn More About Us</span>
                  <div className="absolute inset-0 bg-[#a556fb] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
