// src/Ptfl.jsx
import { useEffect, useState } from 'react';
import 'animate.css/animate.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Components
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// Data
import { projectsData, skillsData } from './data/data';

function Ptfl() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Auto-slider effect with pause on hover
  useEffect(() => {
    let interval;
    const carouselElement = document.getElementById('projectCarousel');
    
    const startInterval = () => {
      interval = setInterval(() => {
        setActiveSlide(prev => (prev + 1) % projectsData.length);
      }, 5000);
    };
  
    const pauseInterval = () => {
      clearInterval(interval);
    };
  
    // Start with first slide immediately
    setActiveSlide(0);
    startInterval();
  
    // Pause on hover
    if (carouselElement) {
      carouselElement.addEventListener('mouseenter', pauseInterval);
      carouselElement.addEventListener('mouseleave', startInterval);
    }
  
    // Cleanup
    return () => {
      clearInterval(interval);
      if (carouselElement) {
        carouselElement.removeEventListener('mouseenter', pauseInterval);
        carouselElement.removeEventListener('mouseleave', startInterval);
      }
    };
  }, [projectsData.length]);

  return (
    <>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <HeroSection />
      <SkillsSection skills={skillsData} />
      <ProjectsSection projects={projectsData} activeSlide={activeSlide} setActiveSlide={setActiveSlide} />
      <ContactSection />
      <Footer />
    </>
  );
}

export default Ptfl;