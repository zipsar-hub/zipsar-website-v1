/* eslint-disable no-unused-vars */
import React from "react";
import ServiceCard from "../Components/Card/ServiceCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Service = () => {
  const services = [
    {
      title: "Web Development",
      content:
        "Create stunning, responsive websites that captivate your audience and drive business growth. Our expert team specializes in modern web technologies, ensuring your digital presence stands out in today's competitive landscape.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    },
    {
      title: "Mobile Apps",
      content:
        "Transform your ideas into powerful mobile applications that engage users across all platforms. We develop intuitive, feature-rich apps that deliver exceptional user experiences and drive customer satisfaction.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop",
    },
    {
      title: "UI/UX Design",
      content:
        "Craft beautiful, user-centered designs that tell your brand story and create meaningful connections with your audience. Our design philosophy focuses on aesthetics, functionality, and user satisfaction.",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
    },
    {
      title: "Digital Marketing",
      content:
        "Amplify your brand's reach through strategic digital marketing campaigns that convert visitors into loyal customers. We leverage data-driven insights to maximize your ROI and accelerate business growth.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    },
    {
      title: "Cloud Solutions",
      content:
        "Scale your business with robust cloud infrastructure and services that ensure reliability, security, and performance. Our cloud experts help you navigate the digital transformation journey with confidence.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop",
    },
    {
      title: "Data Analytics",
      content:
        "Unlock the power of your data with advanced analytics solutions that provide actionable insights and drive informed business decisions. Turn raw data into competitive advantage with our expertise.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    },
  ];

  // Intersection Observer hook
  const { ref, inView } = useInView({
    triggerOnce: true, // animate only once
    threshold: 0.1, // triggers when 10% of the section is visible
  });

  return (
    <section
      id="Service"
      className="w-full min-h-screen bg-pattern"
      ref={ref} // attach the observer
    >
      <div className="relative z-10 w-full">
        <header className="w-full px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl pt-8 sm:pt-12 md:pt-16 lg:pt-20 font-bold text-center font-button text-white"
          >
            Service
          </motion.h1>
        </header>

        <div className="w-full py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="w-full mx-auto p-4 sm:p-6 md:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12 auto-rows-fr">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2, // stagger effect
                  }}
                >
                  <ServiceCard
                    title={service.title}
                    content={service.content}
                    image={service.image}
                    index={index}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
