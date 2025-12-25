
import React from 'react';
import { motion } from 'framer-motion';
import { CONTACTS } from '../constants';
import { Mail, Send, Github, Facebook, Download } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 sm:py-40 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="pearl-glass p-10 sm:p-16 md:p-32 rounded-[3rem] sm:rounded-[5rem] text-center border-white/10 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-orange-600/10 blur-[60px] sm:blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
          
          <span className="text-orange-500 font-bold text-xs uppercase tracking-[0.5em] mb-8 sm:mb-10 block">Collaboration</span>
          <h2 className="text-4xl sm:text-6xl md:text-8xl heading-font tracking-tighter mb-8 sm:mb-12 text-white">
            Let's build <br /> <span className="text-gradient italic font-light">something.</span>
          </h2>
          
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/cv/cv.pdf"
              download="Ravi_CV.pdf"
              target="_blank"
              className="inline-flex items-center gap-3 sm:gap-4 px-8 py-4 sm:px-12 sm:py-6 bg-orange-600 text-white rounded-2xl sm:rounded-4xl font-bold text-base sm:text-lg shadow-2xl shadow-orange-900/40 hover:bg-orange-700 transition-all mb-16 sm:mb-20 cursor-pointer"
            >
              Download CV 
              <Download size={20} className="sm:hidden" /> 
              <Download size={24} className="hidden sm:block" />
            </motion.a>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <SocialItem icon={<Github size={20} />} name="GitHub" label={`@${CONTACTS.github}`} url={`https://github.com/${CONTACTS.github}`} />
            <SocialItem icon={<Send size={20} />} name="Telegram" label={`@${CONTACTS.telegram}`} url={`https://t.me/${CONTACTS.telegram}`} />
            <SocialItem icon={<Facebook size={20} />} name="Facebook" label="RA VI" url={`https://facebook.com/${CONTACTS.facebook}`} />
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialItem = ({ icon, name, label, url }: any) => (
  <a href={url} className="p-6 sm:p-8 rounded-2xl sm:rounded-4xl border border-white/5 hover:bg-white/5 transition-all group">
    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-zinc-900 flex items-center justify-center text-zinc-500 group-hover:text-orange-500 group-hover:bg-orange-500/10 transition-all mx-auto mb-3 sm:mb-4 border border-white/5">
      {icon}
    </div>
    <p className="text-[9px] sm:text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">{name}</p>
    <p className="font-bold text-sm sm:text-base text-white">{label}</p>
  </a>
);

export default ContactSection;
