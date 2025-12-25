
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 sm:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <span className="text-orange-500 font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Portfolio</span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl heading-font tracking-tighter text-white">FEATURED <br /> <span className="italic font-light text-gradient">WORKS.</span></h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-zinc-500 max-w-xs text-sm font-light italic leading-relaxed"
          >
            A curated selection of engineering feats focusing on robust architecture and flawless UX.
          </motion.p>
        </div>

        <div className="space-y-24 sm:space-y-48">
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={project.id}
              className="group"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center`}>
                <div className={`lg:col-span-8 ${idx % 2 !== 0 ? 'lg:order-last' : ''}`}>
                  <motion.div 
                    whileHover={{ scale: 0.98, rotate: idx % 2 === 0 ? -1 : 1 }}
                    transition={{ duration: 0.6 }}
                    className="relative rounded-4xl sm:rounded-[3rem] overflow-hidden shadow-2xl border border-white/5 bg-zinc-900 group-hover:border-orange-500/20"
                  >
                    <motion.img 
                      src={project.image} 
                      className="w-full aspect-16/10 object-cover transition-transform duration-2000 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
                      alt={project.title} 
                    />
                    <div className="absolute inset-0 bg-orange-600/0 group-hover:bg-orange-600/10 transition-all duration-700"></div>
                  </motion.div>
                </div>

                <div className="lg:col-span-4">
                  <motion.div 
                    initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="space-y-6 sm:space-y-8"
                  >
                    <span className="text-orange-500 font-bold text-[9px] sm:text-[10px] uppercase tracking-widest">[ 0{idx + 1} / PROJECT ]</span>
                    <h3 className="text-3xl sm:text-4xl font-bold heading-font tracking-tight text-white group-hover:text-orange-500 transition-colors">{project.title}</h3>
                    <p className="text-zinc-400 text-base sm:text-lg font-light leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIdx) => (
                        <motion.span 
                          key={tag} 
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 + (tagIdx * 0.1) }}
                          className="px-3 py-1 sm:px-4 sm:py-1 rounded-full bg-zinc-900 text-[8px] sm:text-[9px] font-bold uppercase tracking-widest text-zinc-400 border border-white/5"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                    <motion.a 
                      whileHover={{ x: 10 }}
                      href={project.link}
                      className="inline-flex items-center gap-3 font-bold text-sm uppercase tracking-widest text-orange-500 group/link"
                    >
                      View Project <ArrowUpRight size={18} className="group-hover/link:rotate-45 transition-transform duration-300" />
                    </motion.a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
