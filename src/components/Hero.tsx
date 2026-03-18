import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center overflow-hidden bg-white text-black">
      <div className="max-w-7xl mx-auto w-full relative flex flex-col items-center">
        
        {/* Intro Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex items-center gap-2 text-black/60 font-medium"
        >
          <span>👋, I'm Gaurav, a Data Analyst turning complex data into strategic insights</span>
        </motion.div>

        {/* Main Heading Container */}
        <div className="relative w-full flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-display text-[18vw] lg:text-[15rem] leading-[0.8] tracking-tighter uppercase text-center z-0"
          >
            DataAnalyst
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="font-display text-[18vw] lg:text-[15rem] leading-[0.8] tracking-tighter uppercase text-center text-stroke-black z-0"
          >
            & Strategist
          </motion.h2>

          {/* Hero Image - Centered and Overlapping */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "circOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[70vw] lg:w-[45rem] aspect-[3/4] z-10"
          >
            <div className="relative w-full h-full group">
              <img 
                src="https://i.ibb.co/gF9z3qCq/Whats-App-Image-2026-03-10-at-4-27-58-PM-removebg-preview.png" 
                alt="Gaurav Deshmukh" 
                className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
