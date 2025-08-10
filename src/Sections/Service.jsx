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
      image: "Images/webdev.jpg",
    },
    {
      title: "Mobile Apps",
      content:
        "Transform your ideas into powerful mobile applications that engage users across all platforms. We develop intuitive, feature-rich apps that deliver exceptional user experiences and drive customer satisfaction.",
      image: "/Images/MobileApp.jpg",
    },
    {
      title: "UI/UX Design",
      content:
        "Craft beautiful, user-centered designs that tell your brand story and create meaningful connections with your audience. Our design philosophy focuses on aesthetics, functionality, and user satisfaction.",
      image: "Images/uiux.jpg",
    },
    {
      title: "AI Integration",
      content:
        "Implement cutting-edge AI solutions that enhance your business operations and decision-making processes. From chatbots to predictive analytics, we help you leverage AI to stay ahead of the curve.",
      image: "Images/Ai.jpg",
    },
    {
      title: "DevOps Solutions",
      content:
        "Scale your business with robust cloud infrastructure and services that ensure reliability, security, and performance. Our cloud experts help you navigate the digital transformation journey with confidence.",
      image: "/Images/devops.jpg",
    },
    {
      title: "Tech Consultation",
      content:
        "Expert guidance to help you navigate the complex world of technology. From strategy development to implementation, we provide tailored solutions that align with your business goals.",
      image: "Images/consultation.jpg",
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
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2, // stagger effect
                  }}
                  className="h-full" // Ensures motion.div takes full height
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
