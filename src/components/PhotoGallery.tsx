import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import s4 from '../assets/s4.jpg';
import s2 from '../assets/s2.jpg';
import s3 from '../assets/s3.jpg';
import s1 from '../assets/s1.jpg';

const galleryImages = [
  s4,
  s2,
  s3,
  s1,
];

const PhotoGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

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
          Event Gallery-SDC Summit 2024 
        </motion.h2>
        
        <div className="relative">
          {/* Main carousel */}
          <div className="relative h-96 md:h-[500px] overflow-hidden rounded-xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={galleryImages[currentIndex]}
                alt={`Gallery image ${currentIndex + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
            
            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          
          {/* Thumbnails */}
          <div className="flex justify-center mt-6 space-x-2">
            {galleryImages.map((image, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-16 h-16 overflow-hidden rounded-lg border-2 transition-all duration-200 ${
                  index === currentIndex ? 'border-purple-500' : 'border-gray-600'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;