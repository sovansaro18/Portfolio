
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-white/5 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="text-center md:text-left">
          <span className="text-xl font-black italic tracking-tighter text-white">RA VI</span>
          <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-[0.2em] mt-2">WEBDEVELOPER</p>
        </div>
        
        <div className="flex gap-10 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
          <a href="#about-me" className="hover:text-orange-500 transition-colors">About</a>
          <a href="#projects" className="hover:text-orange-500 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-orange-500 transition-colors">Sync</a>
        </div>

        <p className="text-zinc-600 text-[10px] font-mono">
          &copy; {new Date().getFullYear()} RA VI. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
