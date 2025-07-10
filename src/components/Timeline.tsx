import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Clock, Users, Mic, Bot, Camera, Wrench } from 'lucide-react';

const studentTimelineData = [
  { time: '7:00 AM', title: 'Registration & Breakfast', icon: Users, emoji: '🎯' },
  { time: '9:00 AM', title: 'Inauguration and Keynotes', icon: Users, emoji: '🏆' },
  { time: '9:30 AM', title: 'Entrepreneur Talk', icon: Users, emoji: '🎤' },
  { time: '10:00 AM', title: 'HR Talk', icon: Users, emoji: '🎙️' },
  { time: '10:30 AM', title: 'Break', icon: Clock, emoji: '☕' },
  { time: '11:00 AM', title: 'RPA + AI + Agentic Ecosystem', icon: Bot, emoji: '🤖' },
  { time: '1:00 PM', title: 'Lunch Break', icon: Clock, emoji: '🍽️' },
  { time: '2:15 PM', title: 'Workshop', icon: Wrench, emoji: '🔧' },
  { time: '4:00 PM', title: 'Student Champions Stories + Awards', icon: Users, emoji: '🎉' },
  { time: '4:30 PM', title: 'Storytelling & Group Photos', icon: Users, emoji: '👋' },
];

const facultyTimelineData = [
  { time: '7:00 AM', title: 'Registration & Breakfast', icon: Users, emoji: '🎯' },
  { time: '9:00 AM', title: 'Inauguration and Keynotes', icon: Users, emoji: '🏆' },
  { time: '9:30 AM', title: 'Entrepreneur Talk', icon: Users, emoji: '🎤' },
  { time: '10:00 AM', title: 'HR Talk', icon: Users, emoji: '🎙️' },
  { time: '10:30 AM', title: 'Break', icon: Clock, emoji: '☕' },
  { time: '11:00 AM', title: 'RPA + AI + Agentic Ecosystem', icon: Bot, emoji: '🤖' },
  { time: '1:00 PM', title: 'Lunch Break', icon: Clock, emoji: '🍽️' },
  { time: '2:15 PM', title: 'Campus to Corporate', icon: Mic, emoji: '📊' },
  { time: '2:35 PM', title: 'Designing a Community Growth Plan', icon: Users, emoji: '🤝' },
  { time: '3:20 PM', title: 'Build a Bot Workshop', icon: Users, emoji: '📐' },
  { time: '4:05 PM', title: 'Faculty Champion Stories', icon: Users, emoji: '🌟' },
  { time: '4:30 PM', title: 'Group Photos', icon: Users, emoji: '👋' },
];

const Timeline: React.FC = () => {
  const [showStudentTimeline, setShowStudentTimeline] = useState(true);

  const containerVariants: Variants = {
    enter: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const getItemVariants = (index: number): Variants => ({
    enter: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    },
    exit: {
      opacity: 0,
      x: index % 2 === 0 ? -100 : 100,
      transition: {
        duration: 0.3
      }
    }
  });

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-8 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ fontFamily: 'Orbitron, monospace' }}
        >
          Event Timeline
        </motion.h2>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-16">
          <button
            onClick={() => setShowStudentTimeline(true)}
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
              showStudentTimeline
                ? 'bg-purple-600 text-white'
                : 'bg-purple-900/50 text-purple-300 hover:bg-purple-800/50'
            }`}
          >
            Student Timeline
          </button>
          <button
            onClick={() => setShowStudentTimeline(false)}
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
              !showStudentTimeline
                ? 'bg-purple-600 text-white'
                : 'bg-purple-900/50 text-purple-300 hover:bg-purple-800/50'
            }`}
          >
            Faculty Timeline
          </button>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-transparent"></div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={showStudentTimeline ? 'student' : 'faculty'}
              variants={containerVariants}
              initial={{ opacity: 0 }}
              animate="enter"
              exit="exit"
            >
              {(showStudentTimeline ? studentTimelineData : facultyTimelineData).map((event, index) => (
                <motion.div
                  key={`${event.time}-${event.title}`}
                  className={`flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  variants={getItemVariants(index)}
                >
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <motion.div
                      className="bg-gradient-to-br from-purple-900/50 to-black/50 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6 hover:border-purple-400 transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-3">{event.emoji}</span>
                        <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                      </div>
                      <p className="text-purple-300 font-mono">{event.time}</p>
                    </motion.div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-black"></div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Timeline;