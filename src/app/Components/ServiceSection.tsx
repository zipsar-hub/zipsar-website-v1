// components/ServiceSection.tsx
import { FC } from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { 
  Monitor, 
  Smartphone,
  Code, 
  Cog, 
  BarChart3, 
  MessageSquare
} from 'lucide-react';

const services = [
  {
    title: "UI/UX Design",
    description: "Creating intuitive, engaging interfaces that delight users and drive business goals forward with pixel-perfect precision",
    icon: <Smartphone className="h-8 w-8" />
  },
  {
    title: "Web Development",
    description: "Building responsive, high-performance websites and applications that work flawlessly across all devices and platforms.",
    icon: <Monitor className="h-8 w-8" />
  },
  {
    title: "App Development",
    description: "Crafting native and cross-platform mobile applications that deliver exceptional user experiences and business value.",
    icon: <Code className="h-8 w-8" />
  },
  {
    title: "DevOps Solution",
    description: "Streamlining development and operations with automated pipelines, continuous integration, and deployment strategies.",
    icon: <Cog className="h-8 w-8" />
  },
  {
    title: "AI Integration",
    description: "Implementing cutting-edge artificial intelligence and machine learning solutions to transform your business processes.",
    icon: <BarChart3 className="h-8 w-8" />
  },
  {
    title: "Tech Consultation",
    description: "Expert guidance on technology strategy, architecture, and implementation to help you make informed decisions.",
    icon: <MessageSquare className="h-8 w-8" />
  }
];

const ServiceSection: FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="service" className="w-full min-h-screen bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-headerBold">Our Services</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto font-second">
            We provide a comprehensive range of services to help you achieve your digital transformation goals.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 font-first"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard 
                title={service.title} 
                description={service.description} 
                icon={service.icon} 
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceSection;