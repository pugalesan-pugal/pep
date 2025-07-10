import React from 'react';
import { motion } from 'framer-motion';
import { Network, PenTool as Tool, Award, Gift } from 'lucide-react';

const benefits = [
  {
    title: 'Network with Leads',
    description: 'Connect with industry leaders',
    icon: Network,
    color: 'text-purple-400'
  },
  {
    title: 'Hands-on RPA Experience',
    description: 'Learn practical automation skills through workshops',
    icon: Tool,
    color: 'text-blue-400'
  },
  {
    title: 'National Recognition',
    description: 'Gain exposure and recognition',
    icon: Award,
    color: 'text-yellow-400'
  },
  {
    title: 'Chennai Vibes',
    description: 'Insta-Worthy Chennai Vibes',
    icon: Gift,
    color: 'text-green-400'
  }
];

const WhyAttend: React.FC = () => {
  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ fontFamily: 'Orbitron, monospace' }}
        >
          Why Attend?
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-4 p-6 bg-gradient-to-br from-purple-900/20 to-black/20 backdrop-blur-sm border border-purple-500/30 rounded-xl hover:border-purple-400 transition-all duration-300"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -2 }}
            >
              <div className={`${benefit.color} flex-shrink-0`}>
                <benefit.icon className="w-8 h-8" />
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAttend;