
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { motion } from 'framer-motion';

const SectionWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ 
      duration: 1.2, 
      ease: [0.16, 1, 0.3, 1],
      delay: 0.1
    }}
    viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
  >
    {children}
  </motion.div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent selection:bg-orange-600/30 selection:text-orange-400">
      <Navbar />
      
      <main>
        {/* 1. Hero*/}
        <Hero />
        
        {/* 2. Show video coding */}
        <SectionWrapper>
          <VideoSection />
        </SectionWrapper>

        {/* 3. About Me */}
        <SectionWrapper>
          <AboutSection />
        </SectionWrapper>

        {/* 4. Language, framework and tools */}
        <SectionWrapper>
          <SkillsSection />
        </SectionWrapper>

        {/* 5. Projects */}
        <SectionWrapper>
          <ProjectsSection />
        </SectionWrapper>

        <SectionWrapper>
          <ContactSection />
        </SectionWrapper>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
