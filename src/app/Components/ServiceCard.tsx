// components/ServiceCard.tsx
import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const ServiceCard: FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <motion.div
      className="bg-gray-800 rounded-xl p-6 h-full flex flex-col"
      whileHover={{ 
        scale: 1.03,
        boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.3)"
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-indigo-500 mb-4 text-3xl">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300 text-sm flex-grow">{description}</p>
      <motion.div 
        className="mt-4 bg-indigo-600/20 w-12 h-1 rounded"
        whileHover={{ width: "100%", backgroundColor: "rgba(99, 102, 241, 0.4)" }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
};

export default ServiceCard;