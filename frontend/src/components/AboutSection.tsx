
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Rocket } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about-me" className="py-20 sm:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="order-2 lg:order-1">
          <span className="text-orange-500 font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Identity</span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl heading-font tracking-tighter mb-6 sm:mb-8 italic text-white">
            WHO IS <span className="text-gradient">RA VI?</span>
          </h2>
          <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
            <p>
              I am a <span className="text-white font-semibold">New Web Developer</span> with a fresh perspective on digital architecture. Based on my passion for clean design and functional logic, I've spent the last year immersing myself in the modern web stack.
            </p>
            <p>
              My journey is defined by a commitment to <span className="text-orange-500 font-medium italic">continuous learning</span>. Having already completed 5 comprehensive projects, I specialize in building full-stack applications that don't just work—they perform with elegance.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-12">
            <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-950/20 rounded-xl sm:rounded-2xl flex items-center justify-center text-orange-500 mx-auto mb-3 sm:mb-4 border border-orange-500/10">
                <Code2 size={20} className="sm:hidden" />
                <Code2 size={24} className="hidden sm:block" />
              </div>
              <p className="text-[8px] sm:text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Clean Code</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-950/20 rounded-xl sm:rounded-2xl flex items-center justify-center text-amber-500 mx-auto mb-3 sm:mb-4 border border-amber-500/10">
                <Cpu size={20} className="sm:hidden" />
                <Cpu size={24} className="hidden sm:block" />
              </div>
              <p className="text-[8px] sm:text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Scalable</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-950/20 rounded-xl sm:rounded-2xl flex items-center justify-center text-orange-600 mx-auto mb-3 sm:mb-4 border border-orange-600/10">
                <Rocket size={20} className="sm:hidden" />
                <Rocket size={24} className="hidden sm:block" />
              </div>
              <p className="text-[8px] sm:text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Fast</p>
            </div>
          </div>
        </div>

        <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
          <motion.div 
            whileHover={{ scale: 1.02, rotate: -1 }}
            className="pearl-glass p-6 sm:p-8 rounded-4xl sm:rounded-[3rem] shadow-2xl relative z-10 border-white/10 overflow-hidden"
          >
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
               <div className="w-2.5 h-2.5 rounded-full bg-red-500/60"></div>
               <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></div>
               <div className="w-2.5 h-2.5 rounded-full bg-green-500/60"></div>
            </div>
            <pre className="text-[10px] sm:text-xs md:text-sm font-mono text-zinc-300 leading-relaxed overflow-x-auto custom-scrollbar">
{`class Developer {
  constructor() {
    this.name = "RA VI";
    this.role = "Web Developer";
    this.status = "Hungry to Learn";
  }

  getMission() {
    return "Crafting the next generation 
            of web experiences.";
  }
}

const ravi = new Developer();`}
            </pre>
          </motion.div>
          <div className="absolute -top-10 -right-10 w-24 sm:w-40 h-24 sm:h-40 bg-orange-500/10 blur-3xl rounded-full"></div>
          <div className="absolute -bottom-10 -left-10 w-24 sm:w-40 h-24 sm:h-40 bg-orange-900/10 blur-3xl rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
