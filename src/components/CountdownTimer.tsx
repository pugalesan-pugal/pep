import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Clock, Sparkles, Star, Zap } from 'lucide-react';

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isRevealed, setIsRevealed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const eventDate = new Date('2025-08-08T08:00:00');
    
    const timer = setInterval(() => {
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const containerVariants: Variants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 12
      }
    }
  };

  const pulseAnimation = {
    scale: [1, 1.02, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  };

  const glowAnimation = {
    boxShadow: [
      "0 0 10px rgba(147, 51, 234, 0.3)",
      "0 0 20px rgba(147, 51, 234, 0.5)",
      "0 0 10px rgba(147, 51, 234, 0.3)"
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  };

  const particles = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    delay: i * 0.2,
    rotate: i * 60
  }));

  return (
    <div className="relative">
      {!isRevealed ? (
        <motion.div
          className="relative"
          initial={false}
          animate={pulseAnimation}
        >
          {/* Background glow effect */}
          <motion.div
            className="absolute inset-0 rounded-2xl bg-purple-600/20 blur-xl"
            animate={glowAnimation}
          />

          {/* Particle effects */}
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute top-1/2 left-1/2 w-1 h-1 bg-purple-300 rounded-full"
              initial={{ scale: 0 }}
              animate={{
                scale: [0, 1, 0],
                x: [0, Math.cos(particle.rotate * Math.PI / 180) * 60],
                y: [0, Math.sin(particle.rotate * Math.PI / 180) * 60],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: particle.delay,
                ease: "easeOut"
              }}
            />
          ))}

          <motion.button
            className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-6 px-12 rounded-2xl text-xl shadow-lg group overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsRevealed(true)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Gradient overlay */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-pink-400/30"
              initial={{ x: "-100%" }}
              animate={isHovered ? { x: "100%" } : { x: "-100%" }}
              transition={{ duration: 1, repeat: Infinity }}
            />

            {/* Sparkle effects */}
            <motion.div
              className="absolute -top-2 -right-2 text-yellow-300"
              initial={{ scale: 0, rotate: 0 }}
              animate={{ 
                scale: [0, 1, 0],
                rotate: [0, 180, 360],
                transition: {
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }}
            >
              <Sparkles className="w-6 h-6" />
            </motion.div>

            <motion.div
              className="absolute top-1/2 -right-1 text-purple-300 -translate-y-1/2"
              initial={{ scale: 0, rotate: 0 }}
              animate={{ 
                scale: [0.8, 1, 0.8],
                rotate: [0, 360],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
            >
              <Star className="w-4 h-4" />
            </motion.div>

            <motion.div
              className="absolute -bottom-2 -left-2 text-yellow-300"
              initial={{ scale: 0, rotate: 0 }}
              animate={{ 
                scale: [0, 1, 0],
                rotate: [0, 180, 360],
                transition: {
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }}
            >
              <Sparkles className="w-6 h-6" />
            </motion.div>

            <motion.div
              className="absolute top-1/2 -left-1 text-pink-300 -translate-y-1/2"
              initial={{ scale: 0, rotate: 0 }}
              animate={{ 
                scale: [0.8, 1, 0.8],
                rotate: [360, 0],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
            >
              <Zap className="w-4 h-4" />
            </motion.div>

            {/* Button content */}
            <motion.span 
              className="relative flex items-center justify-center gap-3"
              animate={{
                textShadow: [
                  "0 0 8px rgba(255,255,255,0.4)",
                  "0 0 16px rgba(255,255,255,0.6)",
                  "0 0 8px rgba(255,255,255,0.4)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.div
                animate={{
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <Clock className="w-6 h-6" />
              </motion.div>
              Reveal Event Countdown!
            </motion.span>
          </motion.button>
        </motion.div>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key="timer"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-wrap justify-center gap-4"
          >
            {Object.entries(timeLeft).map(([unit, value]) => (
              <motion.div
                key={unit}
                variants={itemVariants}
                className="relative group"
              >
                <motion.div
                  className="bg-gradient-to-br from-purple-600 to-purple-900 border-2 border-purple-400 rounded-xl p-6 text-center shadow-lg backdrop-blur-sm"
                  whileHover={{ 
                    scale: 1.05,
                    rotate: [-1, 1, -1, 0],
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div 
                    className="text-4xl font-bold text-white mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {value.toString().padStart(2, '0')}
                  </motion.div>
                  <motion.div 
                    className="text-sm text-purple-200 uppercase tracking-wider"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {unit}
                  </motion.div>
                </motion.div>
                
                {/* Decorative dots */}
                <motion.div 
                  className="absolute -top-1 -right-1 w-2 h-2 bg-purple-300 rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                <motion.div 
                  className="absolute -bottom-1 -left-1 w-2 h-2 bg-pink-300 rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 0.5
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default CountdownTimer;