import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, MapPin, Calendar, Users, MessageCircle, Linkedin } from 'lucide-react';
import ParticleBackground from './components/ParticleBackground';
import GlitchText from './components/GlitchText';
import Timeline from './components/Timeline';
import HighlightCards from './components/HighlightCards';
import PhotoGallery from './components/PhotoGallery';
import WhyAttend from './components/WhyAttend';
import CountdownTimer from './components/CountdownTimer';

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight" style={{ fontFamily: 'Orbitron, monospace' }}>
              <div className="text-orange-500">
                <GlitchText text="Student Developers Summit" />
              </div>
            </h1>
            
            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Namma Chennai ! Namma Automation !
            </motion.p>
            
            <motion.div
  className="flex flex-col sm:flex-col gap-6 justify-center items-center mt-12"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  viewport={{ once: true }}
>
  {/* Students Registration Button */}
<a href="https://forms.gle/WZG8mJ7wWG4WLtvP9" target="_blank" rel="noopener noreferrer">
  <motion.button
    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50 w-72 text-center"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Students Registration
  </motion.button>
</a>

{/* Faculty Registration Button */}
<a href="https://forms.gle/BJsXQFQn6qAWu7mv8" target="_blank" rel="noopener noreferrer">
  <motion.button
    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50 w-72 text-center"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Faculty Registration
  </motion.button>
</a>

  {/* Register Now Button */}
  

</motion.div>

          </motion.div>
        </div>
      </section>

      {/* Event Details */}
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
            Event Details
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Calendar, title: 'Date', value: 'August 8, 2025' },
              { icon: MapPin, title: 'Venue', value: 'St. Joseph\'s College of Engineering, Chennai' },
              { icon: Users, title: 'Organized by', value: 'St. Joseph\'s RPA Society' },
              { icon: ExternalLink, title: 'Association with', value: ' UiPath Community' }
            ].map((detail, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-purple-900/30 to-black/30 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 text-center hover:border-purple-400 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <detail.icon className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                <h3 className="text-lg font-semibold mb-2 text-white">{detail.title}</h3>
                <p className="text-gray-300">{detail.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <Timeline />

      {/* Highlight Cards */}
      <HighlightCards />

      {/* Photo Gallery */}
      <PhotoGallery />

      {/* Why Attend */}
      <WhyAttend />

      {/* Registration Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ fontFamily: 'Orbitron, monospace' }}
          >
            Register Now
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-300 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Don't miss out on this incredible opportunity to network, learn, and showcase your skills!
          </motion.p>
          
          <CountdownTimer />
          
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 relative z-10 border-t border-purple-500/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-purple-400" style={{ fontFamily: 'Orbitron, monospace' }}>
                TO RISE
              </h3>
              <p className="text-gray-300">
                A national-level technical event bringing together RPA enthusiasts, industry experts, and students.
              </p>
            </div>
            
            <div>
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
    <p></p>
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
</div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Location</h4>
              <p className="text-gray-300">
                St. Joseph's College of Engineering<br />
                OMR Road, Chennai, Tamil Nadu<br />
                India
              </p>
            </div>
          </div>
              Student Developer Summit
          <div className="mt-12 pt-8 border-t border-purple-500/30 text-center">
            <p className="text-gray-400">
              © 2025 St. Joseph's RPA Society. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;