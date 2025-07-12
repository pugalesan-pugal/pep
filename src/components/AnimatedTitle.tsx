import React from 'react';
import { motion } from 'framer-motion';
import { Code, Laptop, Bot, Rocket, Star, Zap, Brain, Cpu } from 'lucide-react';

interface FloatingIconProps {
  icon: React.ReactNode;
  x: number;
  y: number;
  delay: number;
}

const FloatingIcon: React.FC<FloatingIconProps> = ({ icon, x, y, delay }) => {
  return (
    <motion.div
      className="absolute text-purple-400/80"
      initial={{ x, y, scale: 0, opacity: 0 }}
      animate={{
        x: [x - 10, x + 10, x - 10],
        y: [y - 10, y + 10, y - 10],
        scale: 1,
        opacity: 0.8,
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    >
      {icon}
    </motion.div>
  );
};

const AnimatedTitle: React.FC = () => {
  const floatingIcons = [
    { Icon: Code, x: -100, y: -50, delay: 0 },
    { Icon: Laptop, x: 100, y: -50, delay: 0.5 },
    { Icon: Bot, x: -80, y: 60, delay: 1 },
    { Icon: Rocket, x: 80, y: 60, delay: 1.5 },
    { Icon: Star, x: -120, y: 0, delay: 2 },
    { Icon: Zap, x: 120, y: 0, delay: 2.5 },
    { Icon: Brain, x: 0, y: -70, delay: 3 },
    { Icon: Cpu, x: 0, y: 70, delay: 3.5 },
  ];

  return (
    <div className="relative flex justify-center items-center min-h-[200px] mb-8">
      {floatingIcons.map((item, index) => (
        <FloatingIcon
          key={index}
          icon={<item.Icon className="w-8 h-8" />}
          x={item.x}
          y={item.y}
          delay={item.delay}
        />
      ))}
      
      <motion.div
        className="text-center z-10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          ease: "easeOut"
        }}
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-white mb-4"
          style={{ fontFamily: 'Orbitron, monospace' }}
        >
          Student Developers
        </motion.h1>
        <motion.h1 
          className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
          style={{ fontFamily: 'Orbitron, monospace' }}
        >
          Summit
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default AnimatedTitle; 