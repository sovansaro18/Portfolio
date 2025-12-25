
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about-me' },
    { name: 'Stack', href: '#skills' },
    { name: 'Work', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 z-100 px-6 py-6 pointer-events-none flex justify-center">
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`w-full max-w-5xl flex items-center justify-between p-3 rounded-3xl transition-all duration-700 pointer-events-auto ${scrolled ? 'pearl-glass shadow-2xl border-white/10' : ''}`}
      >
        <a href="#" className="flex items-center gap-3 px-4">
          <span className="font-bold text-2xl tracking-tighter text-white">RA VI</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-6 py-2.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400 hover:text-orange-500 transition-all"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-6 py-2.5 bg-orange-600 text-white rounded-full text-[10px] font-bold tracking-widest uppercase shadow-lg shadow-orange-900/20"
          >
            Hire Me
          </a>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-12 h-12 flex items-center justify-center text-white"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-zinc-950 z-99 flex flex-col items-center justify-center p-10 pointer-events-auto"
          >
            <button onClick={() => setIsOpen(false)} className="absolute top-10 right-10 p-4 text-white"><X size={32} /></button>
            <div className="flex flex-col gap-12 text-center">
               {navItems.map(item => (
                  <a 
                    key={item.name} 
                    href={item.href} 
                    onClick={() => setIsOpen(false)}
                    className="text-5xl font-black heading-font tracking-tighter text-white hover:text-orange-500 transition-colors"
                  >
                    {item.name}
                  </a>
               ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
