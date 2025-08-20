'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1545665277-5937489579f2?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.1.0',
    title: 'Des solutions digitales sur mesure',
    subtitle: 'Transformez vos idées en réalité avec notre expertise technique',
    cta: 'Découvrir nos services'
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1683147803878-48aaeed6684f?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.1.0',
    title: 'Une équipe au service de votre vision',
    subtitle: 'Des professionnels passionnés pour concrétiser vos projets',
    cta: 'Rencontrer l\'équipe'
  },
  {
    image: 'https://images.unsplash.com/photo-1729092087821-55d9135e4cf7?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.1.0',
    title: 'Innovation, performance, simplicité',
    subtitle: 'L\'alliance parfaite entre technologie de pointe et ergonomie',
    cta: 'Voir nos réalisations'
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
      setProgress(0);
    }, 6000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev + 100/60)); // 60 updates over 6 seconds
    }, 100);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [isPlaying, index]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  };

  const goToSlide = (slideIndex) => {
    setIndex(slideIndex);
    setProgress(0);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="h-screen relative overflow-hidden group">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].image}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[index].image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/20 hover:scale-110"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/20 hover:scale-110"
      >
        <ChevronRight size={24} />
      </button>

      {/* Play/Pause Button */}
      <button
        onClick={togglePlayPause}
        className="absolute top-8 right-8 z-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/20"
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[index].title}
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <motion.h1 
              className="text-white text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                {slides[index].title}
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-blue-100 text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {slides[index].subtitle}
            </motion.p>
            
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-4"
            >
              <button className="group/btn bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white/20 backdrop-blur-sm relative overflow-hidden">
                <span className="relative z-10">{slides[index].cta}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 translate-x-full group-hover/btn:translate-x-[-200%] transition-transform duration-700" />
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicators with Progress Bars */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className="group/indicator relative"
          >
            <div className={`w-16 h-1 rounded-full transition-all duration-300 ${
              i === index ? 'bg-white/30' : 'bg-white/20 hover:bg-white/25'
            }`}>
              {i === index && (
                <div 
                  className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all duration-100 ease-linear"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                />
              )}
            </div>
            <div className={`absolute -top-2 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full transition-all duration-300 ${
              i === index ? 'bg-white scale-100' : 'bg-white/60 scale-0 group-hover/indicator:scale-75'
            }`} />
          </button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 right-8 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}