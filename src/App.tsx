import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ExternalLink, MapPin, Calendar, Users, MessageCircle, Linkedin } from 'lucide-react';
import ParticleBackground from './components/ParticleBackground';
import GlitchText from './components/GlitchText';
import Timeline from './components/Timeline';
import HighlightCards from './components/HighlightCards';
import PhotoGallery from './components/PhotoGallery';
import WhyAttend from './components/WhyAttend';
import CountdownTimer from './components/CountdownTimer';
import Speakers from './components/Speakers';
import stjosephsLogo from './assets/Stjosephs.png';
import rpaLogo from './assets/rpa.png';
import uipaLogo from './assets/uipa.png';

const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 60 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "tween",
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const staggerContainer: Variants = {
  hidden: { 
    opacity: 0 
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const scaleIn: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "tween",
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <ParticleBackground />
      
      {/* Hero Section */}
      <motion.section 
        className="relative z-10 min-h-screen flex items-center justify-center px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Institutional Logos */}
          <motion.div 
            className="flex justify-center items-center gap-8 mb-6 flex-wrap"
            variants={staggerContainer}
          >
            <motion.img
              src={stjosephsLogo}
              alt="St. Joseph's College of Engineering"
              className="h-20 object-contain"
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
            />
            <motion.div className="h-12 w-px bg-purple-500/30" variants={fadeInUp} />
            <motion.img
              src={rpaLogo}
              alt="RPA Society"
              className="h-20 object-contain"
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
            />
            <motion.div className="h-12 w-px bg-purple-500/30" variants={fadeInUp} />
            <motion.div 
              className="flex flex-col items-center gap-2"
              variants={staggerContainer}
            >
              <motion.p
                className="text-sm font-medium text-purple-400"
                variants={fadeInUp}
              >
                In Association With
              </motion.p>
              <motion.img
                src={uipaLogo}
                alt="UiPath Community"
                className="h-12 object-contain"
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
              />
            </motion.div>
          </motion.div>

          {/* Presents Text */}
          <motion.div
            className="mb-8"
            variants={fadeInUp}
          >
            <motion.p 
              className="text-lg text-purple-300 italic font-normal"
              whileHover={{ scale: 1.05 }}
            >
              Presents
            </motion.p>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-8xl font-bold mb-8 leading-tight"
            style={{ fontFamily: 'Orbitron, monospace' }}
            variants={fadeInUp}
          >
            <div className="text-orange-500">
              <GlitchText text="Student Developers Summit" />
            </div>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Namma Chennai ! Namma Automation !
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-col gap-6 justify-center items-center mt-12"
            variants={staggerContainer}
          >
            {/* Registration Deadline Notice */}
            <motion.div
              className="bg-red-900/30 backdrop-blur-sm border border-red-500/30 rounded-lg px-6 py-3 mb-4"
              variants={fadeInUp}
            >
              <p className="text-red-200">
                <span className="font-semibold text-red-300">Registration Ends on </span> July 18, 2025
              </p>
            </motion.div>

            {/* Registration Buttons */}
            <motion.div
              className="flex flex-col gap-4"
              variants={staggerContainer}
            >
              <motion.a 
                href="https://forms.gle/WZG8mJ7wWG4WLtvP9" 
                target="_blank" 
                rel="noopener noreferrer"
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform shadow-lg hover:shadow-purple-500/50 w-72 text-center">
                  Students Registration
                </button>
              </motion.a>

              <motion.a 
                href="https://forms.gle/BJsXQFQn6qAWu7mv8" 
                target="_blank" 
                rel="noopener noreferrer"
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform shadow-lg hover:shadow-purple-500/50 w-72 text-center">
                  Faculty Registration
                </button>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Event Details */}
      <motion.section 
        className="py-20 px-4 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
            variants={fadeInUp}
            style={{ fontFamily: 'Orbitron, monospace' }}
          >
            Event Details
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
          >
            {[
              { icon: Calendar, title: 'Date', value: 'August 8, 2025' },
              { icon: MapPin, title: 'Venue', value: 'St. Joseph\'s College of Engineering, Chennai' },
              { icon: Users, title: 'Organized by', value: 'St. Joseph\'s RPA Society' },
              { icon: ExternalLink, title: 'Association with', value: ' UiPath Community' }
            ].map((detail, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-purple-900/30 to-black/30 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 text-center hover:border-purple-400 transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
              >
                <detail.icon className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                <h3 className="text-lg font-semibold mb-2 text-white">{detail.title}</h3>
                <p className="text-gray-300">{detail.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Timeline */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <Timeline />
      </motion.div>

      {/* Highlight Cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <HighlightCards />
      </motion.div>

      {/* Speakers Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <Speakers />
      </motion.div>

      {/* Photo Gallery */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <PhotoGallery />
      </motion.div>

      {/* Why Attend */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <WhyAttend />
      </motion.div>

      {/* Registration Section */}
      <motion.section 
        className="py-20 px-4 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8 text-white"
            variants={fadeInUp}
            style={{ fontFamily: 'Orbitron, monospace' }}
          >
            Event Starts in
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-300 mb-12"
            variants={fadeInUp}
          >
            Don't miss out on this incredible opportunity to network, learn, and showcase your skills!
          </motion.p>
          
          <motion.div variants={fadeInUp}>
            <CountdownTimer />
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className="py-16 px-4 relative z-10 border-t border-purple-500/30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold mb-4 text-purple-400" style={{ fontFamily: 'Orbitron, monospace' }}>
                TO RISE
              </h3>
              <p className="text-gray-300">
                A technical event bringing together RPA enthusiasts, industry experts, and students.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
              <div className="space-y-2 text-gray-300">
                <p>
                  Email:{" "}
                  <a
                    href="mailto:uipathsjcet@gmail.com"
                    className="text-blue-400 hover:underline"
                  >
                    uipathsjcet@gmail.com
                  </a>
                </p>
                <p>
                  LinkedIn:{" "}
                  <a
                    href="https://www.linkedin.com/in/rpa-society"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    www.linkedin.com/in/rpa-society
                  </a>
                </p>
                <p>
                  Instagram:{" "}
                  <a
                    href="https://www.instagram.com/rpasociety_sjgi?igsh=MW54ejI4b2FkZ3N0cg=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-400 hover:underline"
                  >
                    @rpasociety_sjgi
                  </a>
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h4 className="text-lg font-semibold mb-4 text-white">Location</h4>
              <p className="text-gray-300">
                St. Joseph's College of Engineering<br />
                OMR Road, Chennai, Tamil Nadu<br />
                India
              </p>
            </motion.div>
          </motion.div>

          <motion.p 
            className="text-gray-400 mt-8 text-center"
            variants={fadeInUp}
          >
            © 2025 St. Joseph's RPA Society. All rights reserved.
          </motion.p>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;