import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

interface AwardCategory {
  platform: string;
  icon: React.FC<{ className?: string }>;
  description: string;
}

const awardCategories: AwardCategory[] = [
  {
    platform: 'Best Instagram Creator Award',
    icon: Instagram,
    description: 'For the most engaging and creative content on Instagram'
  },
  {
    platform: 'LinkedIn Creator Award',
    icon: Linkedin,
    description: 'Create outstanding, professional, and engaging content that shines on LinkedIn'
  },
  {
    platform: 'X Award',
    icon: Twitter,
    description: 'Craft impactful and engaging content that sparks conversations on X (formerly Twitter).'
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

const Awards: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="py-16 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-white"
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
          Voice of Summit
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl text-center text-gray-300 mb-4 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Powered by UiPath - Create, Share, and Win!
        </motion.p>

        <motion.p
          className="text-lg md:text-xl text-center text-purple-400 mb-6 max-w-3xl mx-auto font-semibold italic"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
        </motion.p>

        <motion.p
          className="text-sm sm:text-base md:text-lg lg:text-xl text-center text-gray-300 mb-12 mx-auto px-4"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
        </motion.p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {awardCategories.map((category) => (
            <motion.div
              key={category.platform}
              className="bg-gradient-to-br from-purple-900/20 to-black/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 hover:border-purple-400 transition-all duration-300"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <div className="flex items-center justify-center mb-6">
                <category.icon className="w-12 h-12 text-purple-400" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-center text-white mb-2">
                {category.platform}
              </h3>
              <p className="text-base md:text-lg text-gray-300 text-center">
                {category.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <motion.button
            onClick={() => setShowMore(!showMore)}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform shadow-lg hover:shadow-purple-500/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showMore ? 'Show Less' : 'Learn More'}
          </motion.button>
        </div>

        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: showMore ? 'auto' : 0,
            opacity: showMore ? 1 : 0
          }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden mt-8"
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-purple-900/20 to-black/20 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30">
            <div className="prose prose-invert max-w-none">
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                  Preparation for the Summit
                </h3>
                <p className="text-lg md:text-xl text-gray-300">
                As the countdown begins for the Student Developers Summit, we’re beyond thrilled to welcome trailblazing students and bold creators from across Tamil Nadu to be part of Voice of the Summit — an electrifying fusion of innovation, culture, and next-gen agentic automation. This isn’t just an event. It’s a movement. Are you in?
                  </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                  ✨ How You Can Participate
                </h3>
                <ul className="space-y-3 text-base md:text-lg text-gray-300">
                  <li>• Drop your most epic and creative content around the Student Developers Summit — from now till the ultimate winner reveal! 🚀 🎬</li>
                  <li>• Share, reshare, and engage! The more you amplify the summit vibes, the better your chances. Let's make this the most talked-about tech event across Tamil Nadu! 🚀</li>
                  <li>• Let your creativity run wild! Whether it's mind-blowing posters, epic reels, viral memes, or behind-the-scenes stories — show us your unique take on Chennai's biggest tech celebration. From Tamil culture to tech innovation, make it your own! 🎨</li>
                  <li>• Let your voice and creativity shine — and stand a chance to win exciting rewards!</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                  📌 Official Tags to Be Eligible
                </h3>
                
                <div className="mb-4">
                  <h4 className="text-xl md:text-2xl font-semibold text-purple-400 mb-2">▶ Hashtags:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['#UiPath', '#UiPathCommunity', '#AgenticAutomation'].map((tag) => (
                      <span key={tag} className="text-base md:text-lg bg-purple-900/30 px-3 py-1 rounded-full text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl md:text-2xl font-semibold text-purple-400 mb-2">▶ Mentions:</h4>
                  <ul className="space-y-2 text-base md:text-lg text-gray-300">
                    <li>• LinkedIn – @UiPathCommunity</li>
                    <li>• X (formerly Twitter) – @UiPath</li>
                    <li>• Instagram – @UiPathGlobal</li>
                  </ul>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                  ⏰ Content Submission Timeline
                </h3>
                <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-500/30">
                  <p className="text-base md:text-lg text-gray-300">
                    Keep the creativity flowing! We'll be tracking and featuring amazing content from now until the end of the summit. The best part? Your summit-day content could be the winning piece! 🎯
                  </p>
                  <ul className="mt-4 space-y-2 text-base md:text-lg text-gray-300">
                    <li>• Pre-summit content: Show us your preparation and excitement</li>
                    <li>• During summit: Capture the live energy and memorable moments</li>
                    <li>• Winners will be announced at the summit closing ceremony 🏆</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-lg md:text-xl text-purple-400 font-semibold mb-6">
                  🎉 The most creative and engaging entries will be celebrated on stage during the summit, recognizing Tamil Nadu's brightest tech voices!
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Awards; 