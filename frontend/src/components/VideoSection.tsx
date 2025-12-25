
import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const VideoSection: React.FC = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 group">
          {/* Background Video (Stock coding video) */}
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[3000ms]"
          >
            <source src="/video/video1.mp4" type="video/mp4" />
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-zinc-950/60 backdrop-blur-[1px] flex flex-col items-center justify-center text-center p-8">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-24 h-24 rounded-full pearl-glass flex items-center justify-center text-white mb-8 border-white/20 cursor-pointer"
            >
              <Play fill="white" size={32} className="text-orange-500" />
            </motion.div>
            <h2 className="text-4xl md:text-6xl heading-font text-white font-black tracking-tighter mb-4 italic">
              BUILDING <span className="text-orange-500">LEARNING WEBSITE.</span>
            </h2>
            <p className="text-zinc-200 text-lg md:text-xl font-light max-w-xl">
              Turning complex logic into seamless digital interfaces, one line of code at a time.
            </p>
          </div>

          {/* Tech lines decoration */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
