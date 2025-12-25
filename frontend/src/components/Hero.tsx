
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const imageRotate = useTransform(scrollY, [0, 500], [0, 10]);

  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = "RA VI";
  const [typingSpeed, setTypingSpeed] = useState(200);

  useEffect(() => {
    const handleTyping = () => {
      const isFinishingType = !isDeleting && text === fullText;
      const isFinishingDelete = isDeleting && text === '';

      if (isFinishingType) {
        setTimeout(() => setIsDeleting(true), 2000);
        return;
      }

      if (isFinishingDelete) {
        setIsDeleting(false);
        setTypingSpeed(200);
        return;
      }

      const nextText = isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1);

      setText(nextText);
      setTypingSpeed(isDeleting ? 100 : 200);
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed]);

  const raPart = text.substring(0, 2);
  const viPart = text.length > 2 ? text.substring(3) : "";

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const item = {
    hidden: { y: 60, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 60, damping: 15 }
    }
  };

  const imageContainerVariants = {
    hidden: { scale: 0.8, opacity: 0, rotateY: 30 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      rotateY: 0,
      transition: { 
        type: "spring", 
        stiffness: 50, 
        damping: 20, 
        delay: 0.5 
      }
    }
  };

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-32 pb-20 overflow-hidden">
      <motion.div 
        style={{ y: y1, opacity }}
        className="max-w-7xl w-full z-10"
      >
        <motion.div 
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Content (Text) */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full pearl-glass text-[10px] font-bold uppercase tracking-[0.3em] text-orange-500 mb-6 lg:mb-8 border border-orange-500/20">
              <Sparkles size={12} className="animate-pulse" /> My Name Is
            </motion.div>

            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl xl:text-8xl heading-font tracking-tighter leading-[0.85] mb-8 lg:mb-10 text-white relative flex items-center justify-center lg:justify-start min-h-[1.1em]"
            >
              <div className="flex flex-wrap justify-center lg:justify-start gap-x-4 sm:gap-x-6 lg:gap-x-12">
                <span className="inline-block">{raPart}</span>
                <span className="text-gradient italic font-extralight inline-block">{viPart}</span>
                
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "steps(2)" }}
                  className="inline-block w-[3px] sm:w-[6px] lg:w-[12px] h-[0.7em] bg-orange-500 ml-1 sm:ml-2 self-center rounded-full shadow-[0_0_15px_rgba(234,88,12,0.5)]"
                />
              </div>
              
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3] 
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-1/2 left-0 -translate-y-1/2 w-[80%] h-full bg-orange-600/5 blur-[120px] rounded-full -z-10 hidden lg:block"
              />
            </motion.h1>

            <motion.p 
              variants={item}
              className="text-lg sm:text-xl md:text-2xl text-zinc-400 font-light max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10 lg:mb-12"
            >
              Engineering <span className="text-white font-medium">high-performance</span> web experiences with a focus on <span className="italic text-orange-500">minimalist aesthetics</span>.
            </motion.p>

            <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
              <motion.a
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="w-full sm:w-auto px-10 py-4 sm:px-12 sm:py-5 bg-orange-600 text-white rounded-2xl font-bold text-sm tracking-widest uppercase shadow-xl shadow-orange-900/40 hover:bg-orange-700 transition-all flex items-center justify-center gap-3"
              >
                See My Work <ArrowUpRight size={18} />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.08)" }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="w-full sm:w-auto px-10 py-4 sm:px-12 sm:py-5 pearl-glass rounded-2xl font-bold text-sm tracking-widest uppercase transition-all text-zinc-300"
              >
                Start a project
              </motion.a>
            </motion.div>
          </div>

          {/* Right Side (Image) */}
          <motion.div 
            variants={item}
            className="relative order-1 lg:order-2 flex justify-center perspective-1000 mb-8 lg:mb-0"
          >
            <motion.div 
              variants={imageContainerVariants}
              animate={{ y: [0, -20, 0] }}
              transition={{ 
                y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                default: { duration: 0.8 }
              }}
              style={{ rotate: imageRotate }}
              className="relative w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[500px] aspect-[4/5] z-20"
            >
              <motion.div 
                whileHover={{ 
                  rotateY: -10, 
                  rotateX: 5, 
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(234, 88, 12, 0.25)" 
                }}
                className="relative w-full h-full rounded-[2rem] sm:rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl z-20 bg-zinc-900 cursor-pointer"
              >
                <motion.img 
                  src="/image/V2.jpg" 
                  alt="RA VI"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1.05 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
                <motion.div 
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 5 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60"></div>
              </motion.div>

              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-6 border border-orange-500/10 rounded-[2.5rem] sm:rounded-[4rem] -z-10 pointer-events-none border-dashed"
              ></motion.div>
              <div className="absolute -inset-4 border border-orange-500/20 rounded-[2rem] sm:rounded-[3.5rem] -z-10 pointer-events-none"></div>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-600/10 blur-[100px] rounded-full -z-20"></div>

              {/* Floating Tech Badges - Hidden on small mobile */}
              <motion.div 
                animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 sm:-right-8 top-16 sm:top-20 pearl-glass px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl border-white/10 shadow-2xl z-30 hidden sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                  <span className="text-[8px] sm:text-[10px] font-bold text-zinc-300 uppercase tracking-widest">Available for Hire</span>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-4 sm:-left-12 bottom-16 sm:bottom-20 pearl-glass p-3 sm:p-4 rounded-xl sm:rounded-2xl border-white/10 shadow-2xl z-30 hidden sm:block"
              >
                 <div className="flex flex-col gap-0.5 sm:gap-1">
                    <span className="text-[6px] sm:text-[8px] font-bold text-orange-500 uppercase tracking-widest">Experience</span>
                    <span className="text-sm sm:text-lg font-bold text-white tracking-tighter italic">5+ Projects</span>
                 </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Hero bottom indicator */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 sm:gap-3">
         <span className="text-[8px] sm:text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Explore</span>
         <motion.div 
           animate={{ height: [30, 0, 30], opacity: [1, 0, 1] }}
           transition={{ duration: 2, repeat: Infinity }}
           className="w-px bg-orange-600"
         />
      </div>
    </section>
  );
};

export default Hero;
