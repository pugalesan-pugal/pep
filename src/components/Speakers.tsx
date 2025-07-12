import React from 'react';
import { motion, Variants } from 'framer-motion';
  import { Linkedin } from 'lucide-react';

interface Speaker {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
}

const speakers: Speaker[] = [
  {
    name: 'Venkatesh K',
    role: 'Founder & CEO, Collective Minds Digital Solution',
    image: './speakers/venkatesh.jpg',
    linkedin: 'https://www.linkedin.com/in/venkateshkothandaraman/'
  },
  {
    name: 'Rohit Radhakrishnan',
    role: 'UiPath Community Lead - Asia Pacific & Japan',
    image: './speakers/rohit.jpg',
    linkedin: 'https://www.linkedin.com/in/rohitradhakrishnan1/'
  },
  {
    name: 'Swathi Sushilan',
    role: 'Senior Talent Acquisition Partner, UiPath',
    image: './speakers/swati.jpg',
    linkedin: 'https://www.linkedin.com/in/swathi08/'
  },
  {
    name: 'Ghanashyam',
    role: 'Founder @ Edler Hub',
    image: './speakers/ghanshyam.jpg',
    linkedin: 'https://www.linkedin.com/in/ghanashyam/'
  },
  {
    name: 'Mukesh Kala',
    role: 'Hyper Automation Practice Head - Boundaryless Group, UiPath MVP',
    image: './speakers/mukeshkala.jpg',
    linkedin: 'https://www.linkedin.com/in/mukeshkala/'
  },
  {
    name: 'Palaniyappan P',
    role: 'Technical Architect at Novo Nordisk, UiPath MVP',
    image: './speakers/palani.jpg',
    linkedin: 'https://www.linkedin.com/in/palaniyappan-p-uipathmvp/'
  },
  {
    name: 'Nithin M Krishna',
    role: 'Senior Lead, Automation COE at KLA, UiPath MVP',
    image: './speakers/nithin.jpg',
    linkedin: 'https://www.linkedin.com/in/nmnithinkrishna/'
  },
  {
    name: 'Jobin T J',
    role: 'Automation Solution Architect, WonderBotz, UiPath MVP',
    image: './speakers/jobin.jpg',
    linkedin: 'https://www.linkedin.com/in/jobin-joy/'
  }
];

const containerVariants: Variants = {
  hidden: { 
    opacity: 0 
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants: Variants = {
  hidden: { 
    opacity: 0,
    y: 50,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

const Speakers: React.FC = () => {
  return (
    <section className="py-16 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 100 
          }}
          viewport={{ once: true }}
          style={{ fontFamily: 'Orbitron, monospace' }}
        >
          Our Distinguished Speakers
        </motion.h2>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              className="group relative bg-gradient-to-br from-purple-900/20 to-black/20 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/30 hover:border-purple-400 transition-all duration-500 shadow-lg hover:shadow-purple-500/20"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              {/* Image Container */}
              <div className="aspect-square relative overflow-hidden">
                <motion.img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover object-center rounded-t-xl"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content Container */}
              <div className="p-4 relative">
                <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-purple-300 transition-colors duration-300">
                  {speaker.name}
                </h3>
                <p className="text-sm text-gray-300 group-hover:text-white/90 transition-colors duration-300 line-clamp-2">
                  {speaker.role}
                </p>
                
                {/* LinkedIn Button */}
                {speaker.linkedin && (
                  <motion.a
                    href={speaker.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute -top-8 right-4 bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin className="w-5 h-5 text-white" />
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Speakers; 