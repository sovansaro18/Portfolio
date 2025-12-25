
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const SkillsSection: React.FC = () => {
  const categories = ['Language', 'Framework', 'Tool'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-orange-500 font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Capabilities</span>
          <h2 className="text-5xl md:text-7xl heading-font tracking-tighter text-white">THE <span className="italic font-light">TOOLKIT.</span></h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {categories.map((category) => (
            <motion.div 
              key={category} 
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-2xl font-bold border-b border-zinc-800 pb-4 text-zinc-200 tracking-tight">{category}s</h3>
              <div className="grid grid-cols-1 gap-4">
                {SKILLS.filter(s => s.category === category).map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    variants={cardVariants}
                    whileHover={{ x: 10, scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
                    className="p-6 pearl-glass rounded-2xl flex items-center justify-between group transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <motion.span 
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        className="text-3xl filter grayscale group-hover:grayscale-0 transition-all cursor-default"
                      >
                        {skill.icon}
                      </motion.span>
                      <span className="font-bold text-zinc-400 group-hover:text-orange-500 tracking-tight transition-colors">{skill.name}</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all border border-white/5">
                      <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
