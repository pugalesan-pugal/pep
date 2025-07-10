import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Bot, Camera, Wrench } from 'lucide-react';

const highlights = [
  {
    title: 'Entrepreneur Talk',
    description: 'Vision. Action. Impact. Legacy',
    icon: Mic,
    emoji: '🎙️',
    color: 'from-purple-600 to-pink-600'
  },
  {
    title: ' Networking',
    description: 'Connect. Collaborate. Share. Grow',
    icon: Bot,
    emoji: '🤖',
    color: 'from-blue-600 to-purple-600'
  },
  {
    title: 'Workshop',
    description: 'Learn. Apply. Innovate. Repeat',
    icon: Camera,
    emoji: '🎬',
    color: 'from-pink-600 to-red-600'
  },
  {
    title: 'Student Developers & Faculties Story',
    description: 'Inspire. Learn. Build. Lead',
    icon: Wrench,
    emoji: '🔧',
    color: 'from-green-600 to-blue-600'
  }
];

const HighlightCards: React.FC = () => {
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
          Event Highlights
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-900/20 to-black/20 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-300" 
                   style={{ background: `linear-gradient(135deg, ${highlight.color.split(' ')[1]} 0%, ${highlight.color.split(' ')[3]} 100%)` }}></div>
              
              <div className="relative p-6 text-center">
                <div className="mb-4">
                  <span className="text-4xl block mb-2">{highlight.emoji}</span>
                  <highlight.icon className="w-8 h-8 mx-auto text-purple-400" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {highlight.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightCards;