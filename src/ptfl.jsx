// src/Ptfl.jsx
import { useEffect, useState } from 'react';
import 'animate.css/animate.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Ptfl() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Sample projects data with icons
  const projects = [
    {
      title: "Landing Page Board",
      description: "A responsive landing page template with modern design elements",
      tech: "HTML, CSS, JavaScript",
      icon: "bi-layout-text-window",
      link: "https://landingpageboard.netlify.app/",
      github: "https://github.com/Craigmacharia/landingpageboard"
    },
    {
      title: "Ladha House",
      description: "Real estate showcase website with property listings",
      tech: "HTML, CSS, JavaScript",
      icon: "bi-house",
      link: "https://ladhahouse.netlify.app/",
      github: "https://github.com/Craigmacharia/ladhahouse"
    },
    {
      title: "Payroll Calculator",
      description: "Interactive tool for calculating employee payroll information",
      tech: "HTML, CSS, JavaScript",
      icon: "bi-calculator",
      link: "https://craigmacharia.github.io/payroll-calculator/",
      github: "https://github.com/craigmacharia/payroll-calculator"
    }
  ];

  // Skills data with icons
  const skills = [
    { name: "React", icon: "bi-filetype-jsx", level: 90 },
    { name: "Node.js", icon: "bi-filetype-js", level: 85 },
    { name: "UI/UX Design", icon: "bi-palette", level: 75 },
    { name: "Python", icon: "bi-filetype-py", level: 95 },
    { name: "JavaScript", icon: "bi-filetype-js", level: 75 },
    { name: "Blockchain", icon: "bi-shield-lock", level: 70 }
  ];

  // Auto-slider effect with pause on hover
  useEffect(() => {
    let interval;
    const carouselElement = document.getElementById('projectCarousel');
    
    const startInterval = () => {
      interval = setInterval(() => {
        setActiveSlide(prev => (prev + 1) % projects.length);
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
  }, [projects.length]);

  return (
    <>
      {/* Cosmic Navbar with Stars */}
<nav className="navbar navbar-expand-lg navbar-dark fixed-top animate__animated animate__fadeInDown cosmic-navbar">
  {/* Twinkling stars in navbar */}
  {[...Array(15)].map((_, i) => (
    <div 
      key={`nav-star-${i}`}
      className="position-absolute nav-star"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        width: `${Math.random() * 2 + 1}px`,
        height: `${Math.random() * 2 + 1}px`,
        animationDelay: `${Math.random() * 5}s`
      }}
    ></div>
  ))}
  
  <div className="container position-relative">
    <a className="navbar-brand fw-bold d-flex align-items-center cosmic-brand" href="#">
      <i className="bi bi-stars me-2"></i>
      <span className="text-gradient">Craig.dev</span>
    </a>
    <button 
      className={`navbar-toggler cosmic-toggler ${isMenuOpen ? 'collapsed' : ''}`} 
      type="button" 
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      aria-expanded={isMenuOpen}
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
      <ul className="navbar-nav ms-auto cosmic-nav">
        <li className="nav-item">
          <a className="nav-link cosmic-link active" href="#home" onClick={() => setIsMenuOpen(false)}>
            <i className="bi bi-house-door me-1"></i> Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link cosmic-link" href="#skills" onClick={() => setIsMenuOpen(false)}>
            <i className="bi bi-tools me-1"></i> Skills
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link cosmic-link" href="#projects" onClick={() => setIsMenuOpen(false)}>
            <i className="bi bi-folder me-1"></i> Projects
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link cosmic-link" href="#contact" onClick={() => setIsMenuOpen(false)}>
            <i className="bi bi-envelope me-1"></i> Contact
          </a>
        </li>
      </ul>
    </div>
  </div>

  {/* Add to your style jsx */}
  <style jsx>{`
    .cosmic-navbar {
      background: linear-gradient(135deg, #0f0c29 0%, #16213e 100%);
      box-shadow: 0 2px 20px rgba(108, 99, 255, 0.2);
      border-bottom: 1px solid rgba(108, 99, 255, 0.1);
      position: relative;
      overflow: hidden;
    }
    
    .cosmic-brand {
      position: relative;
      z-index: 2;
    }
    
    .cosmic-brand i {
      color: #6c63ff;
      animation: pulse 2s infinite;
    }
    
    .cosmic-toggler {
      border: 1px solid rgba(108, 99, 255, 0.3);
      z-index: 2;
    }
    
    .cosmic-toggler:hover {
      border-color: rgba(108, 99, 255, 0.6);
    }
    
    .cosmic-nav {
      position: relative;
      z-index: 2;
    }
    
    .cosmic-link {
      position: relative;
      margin: 0 0.5rem;
      padding: 0.5rem 1rem;
      border-radius: 50px;
      transition: all 0.3s ease;
    }
    
    .cosmic-link::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, #6c63ff, #3a7bd5);
      transform: translateX(-50%);
      transition: width 0.3s ease;
    }
    
    .cosmic-link:hover::before {
      width: 70%;
    }
    
    .cosmic-link.active::before {
      width: 70%;
    }
    
    .cosmic-link i {
      transition: transform 0.3s ease;
    }
    
    .cosmic-link:hover i {
      transform: scale(1.2);
      color: #6c63ff;
    }
    
    .nav-star {
      background-color: white;
      border-radius: 50%;
      animation: twinkle 3s infinite alternate;
      opacity: 0;
      pointer-events: none;
      z-index: 1;
    }
    
    @keyframes twinkle {
      0%, 100% { opacity: 0.3; }
      50% { opacity: 1; }
    }
    
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.2); }
      100% { transform: scale(1); }
    }
    
    /* Mobile menu styles */
    @media (max-width: 991.98px) {
      .cosmic-nav {
        background: rgba(15, 12, 41, 0.95);
        backdrop-filter: blur(10px);
        padding: 1rem;
        border-radius: 0 0 15px 15px;
        margin-top: 10px;
        border: 1px solid rgba(108, 99, 255, 0.2);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
      }
      
      .cosmic-link {
        margin: 0.25rem 0;
        padding: 0.75rem 1rem;
      }
      
      .cosmic-link::before {
        display: none;
      }
      
      .cosmic-link:hover {
        background: rgba(108, 99, 255, 0.1);
      }
    }
  `}</style>
</nav>

      {/* Hero Section with Cosmic Slideshow */}
<section id="home" className="vh-100 d-flex align-items-center text-white position-relative overflow-hidden">
  {/* Cosmic Slideshow Background */}
  <div className="cosmic-slideshow">
    {[
      'inv.jpg',
      'pc.png',
      'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    ].map((img, index) => (
      <div 
        key={index} 
        className={`cosmic-slide ${index === 0 ? 'active' : ''}`}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
    ))}
    <div className="cosmic-overlay"></div>
  </div>
  
  <div className="container text-center z-index-1">
    <div className="animate__animated animate__zoomIn animate__fast">
      <div className="avatar mb-4 mx-auto animate__animated animate__pulse animate__infinite animate__slower">
        <i className="bi bi-stars" style={{ fontSize: '5rem', color: '#6c63ff' }}></i>
      </div>
      <h1 className="display-3 fw-bold mb-3 animate__animated animate__fadeInDown">
        <span className="text-gradient">Craig</span> - Software Engineer
      </h1>
      <p className="lead mb-4 fs-3 animate__animated animate__fadeIn animate__delay-1s">
        I build <span className="text-primary">cosmic digital solutions</span> with code.
      </p>
      <div className="d-flex gap-3 justify-content-center animate__animated animate__fadeInUp animate__delay-2s">
        <a href="#projects" className="btn btn-lg px-4 py-3 rounded-pill shadow-lg hover-grow cosmic-btn-primary">
          <i className="bi bi-rocket me-2"></i> Explore Projects
        </a>
        <a 
          href="https://wa.me/+254110928039" 
          className="btn btn-lg px-4 py-3 rounded-pill d-flex align-items-center shadow-lg hover-grow cosmic-btn-secondary"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-chat-dots me-2"></i> Contact Me
        </a>
      </div>
    </div>
  </div>

  {/* Add to your style jsx */}
  <style jsx>{`
    .cosmic-slideshow {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }
    
    .cosmic-slide {
      position: absolute;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      opacity: 0;
      transition: opacity 1.5s ease-in-out;
    }
    
    .cosmic-slide.active {
      opacity: 1;
    }
    
    .cosmic-overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, rgba(15,12,41,0.85) 0%, rgba(36,36,62,0.85) 100%);
    }
    
    .avatar {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(108, 99, 255, 0.1);
      backdrop-filter: blur(5px);
      border: 2px solid rgba(108, 99, 255, 0.3);
    }
    
    .text-gradient {
      background: linear-gradient(90deg, #6c63ff 0%, #3a7bd5 100%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .cosmic-btn-primary {
      background: linear-gradient(135deg, #6c63ff 0%, #3a7bd5 100%);
      color: white;
      border: none;
      position: relative;
      overflow: hidden;
    }
    
    .cosmic-btn-primary:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(108, 99, 255, 0.4);
    }
    
    .cosmic-btn-primary::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
      transition: 0.5s;
    }
    
    .cosmic-btn-primary:hover::before {
      left: 100%;
    }
    
    .cosmic-btn-secondary {
      background: rgba(255, 255, 255, 0.1);
      color: white;
      border: 1px solid rgba(108, 99, 255, 0.5);
      backdrop-filter: blur(5px);
    }
    
    .cosmic-btn-secondary:hover {
      background: rgba(108, 99, 255, 0.2);
      border-color: rgba(108, 99, 255, 0.8);
    }
    
    /* Slideshow animation */
    @keyframes slideshow {
      0% { opacity: 0; }
      10% { opacity: 1; }
      30% { opacity: 1; }
      40% { opacity: 0; }
      100% { opacity: 0; }
    }
  `}</style>
</section>

{/* Add this useEffect for slideshow */}
{useEffect(() => {
  const slides = document.querySelectorAll('.cosmic-slide');
  let currentSlide = 0;
  
  const showSlide = (n) => {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[n].classList.add('active');
  };
  
  const nextSlide = () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  };
  
  const interval = setInterval(nextSlide, 5000);
  return () => clearInterval(interval);
}, [])}

      {/* Skills Section with Galaxy Theme */}
<section id="skills" className="py-5 position-relative overflow-hidden" style={{ 
  background: 'linear-gradient(to bottom, #0f0c29 0%, #302b63 50%, #24243e 100%)'
}}>
  {/* Galaxy particles background */}
  <div className="galaxy-particles position-absolute w-100 h-100 top-0 start-0"></div>
  
  <div className="container py-5 position-relative z-index-1">
    <h2 className="text-center mb-5 fw-bold text-white animate__animated animate__fadeIn">
      <i className="bi bi-stars me-2 text-warning"></i> My Skills
    </h2>
    
    <div className="row g-4">
      {skills.map((skill, index) => (
        <div 
          key={index} 
          className="col-md-6 col-lg-4 animate__animated animate__fadeInUp" 
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="card h-100 border-0 shadow-lg hover-scale skill-card">
            <div className="card-body p-4">
              <div className="d-flex align-items-center mb-3">
                <div className="icon-circle bg-gradient-primary text-white me-3">
                  <i className={`bi ${skill.icon}`} style={{ fontSize: '1.5rem' }}></i>
                </div>
                <h5 className="mb-0 text-white">{skill.name}</h5>
              </div>
              <div className="progress" style={{ height: '10px', backgroundColor: 'rgba(255,255,255,0.1)' }}>
                <div 
                  className="progress-bar bg-gradient-primary"
                  role="progressbar" 
                  style={{ width: `${skill.level}%` }}
                  aria-valuenow={skill.level} 
                  aria-valuemin="0" 
                  aria-valuemax="100"
                ></div>
              </div>
              <div className="text-end mt-2">
                <span className="badge bg-primary bg-opacity-25 text-white">
                  {skill.level}%
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Add to your style jsx */}
  <style jsx>{`
    .galaxy-particles {
      background: 
        radial-gradient(circle at 20% 30%, rgba(108, 99, 255, 0.15) 0%, transparent 30%),
        radial-gradient(circle at 80% 70%, rgba(255, 101, 132, 0.15) 0%, transparent 30%),
        url("data:image/svg+xml,%3Csvg viewBox='0 0 2000 2000' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E");
      opacity: 0.8;
    }
    
    .skill-card {
      background: rgba(15, 12, 41, 0.7);
      backdrop-filter: blur(5px);
      border: 1px solid rgba(108, 99, 255, 0.2);
      transition: all 0.3s ease;
    }
    
    .skill-card:hover {
      transform: translateY(-5px) scale(1.02);
      box-shadow: 0 10px 25px rgba(108, 99, 255, 0.3);
      border-color: rgba(108, 99, 255, 0.4);
    }
    
    .bg-gradient-primary {
      background: linear-gradient(135deg, #6c63ff 0%, #3a7bd5 100%);
    }
    
    .icon-circle {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.3s ease;
    }
    
    .skill-card:hover .icon-circle {
      transform: rotate(15deg) scale(1.1);
      box-shadow: 0 0 15px rgba(108, 99, 255, 0.5);
    }
  `}</style>
</section>

      {/* Projects Section with Cosmic Galaxy Theme */}
<section id="projects" className="py-5 position-relative cosmic-projects-section">
  {/* Cosmic Background Elements */}
  <div className="cosmic-projects-bg position-absolute w-100 h-100 top-0 start-0"></div>
  
  {/* Floating Stars */}
  {[...Array(15)].map((_, i) => (
    <div 
      key={`star-${i}`}
      className="position-absolute cosmic-star"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        width: `${Math.random() * 3 + 1}px`,
        height: `${Math.random() * 3 + 1}px`,
        animationDelay: `${Math.random() * 5}s`
      }}
    ></div>
  ))}
  
  <div className="container py-5 position-relative">
    <h2 className="text-center mb-5 fw-bold text-white animate__animated animate__fadeIn cosmic-section-title">
      <i className="bi bi-stars me-2"></i> My Cosmic Creations
    </h2>
    
    <div className="row justify-content-center">
      <div className="col-lg-10">
        <div className="cosmic-project-card">
          <div id="projectCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner cosmic-carousel-inner">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className={`carousel-item ${index === activeSlide ? 'active' : ''} p-4`}
                >
                  <div className="text-center p-4 cosmic-project-content">
                    <div className="cosmic-project-icon mb-4">
                      <i className={`bi ${project.icon}`}></i>
                    </div>
                    <h3 className="fw-bold mb-3 cosmic-project-title">{project.title}</h3>
                    <p className="mb-4 fs-5 cosmic-project-desc">{project.description}</p>
                    <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
                      {project.tech.split(', ').map((tech, i) => (
                        <span key={i} className="cosmic-tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="d-flex justify-content-center gap-3">
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="cosmic-project-btn cosmic-view-btn"
                      >
                        <i className="bi bi-rocket me-2"></i> Launch Project
                      </a>
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="cosmic-project-btn cosmic-code-btn"
                      >
                        <i className="bi bi-git me-2"></i> View Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button 
              className="cosmic-carousel-control cosmic-carousel-prev" 
              type="button" 
              onClick={() => setActiveSlide((prev) => (prev - 1 + projects.length) % projects.length)}
            >
              <i className="bi bi-chevron-left"></i>
            </button>
            <button 
              className="cosmic-carousel-control cosmic-carousel-next" 
              type="button" 
              onClick={() => setActiveSlide((prev) => (prev + 1) % projects.length)}
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Add to your style jsx */}
  <style jsx>{`
    .cosmic-projects-section {
      background: linear-gradient(135deg, #000428 0%, #0f0c29 100%);
      overflow: hidden;
    }
    
    .cosmic-projects-bg {
      background: 
        radial-gradient(circle at 20% 30%, rgba(108, 99, 255, 0.1) 0%, transparent 40%),
        radial-gradient(circle at 80% 70%, rgba(58, 123, 213, 0.1) 0%, transparent 40%),
        url("data:image/svg+xml,%3Csvg viewBox='0 0 2000 2000' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E");
    }
    
    .cosmic-star {
      background-color: white;
      border-radius: 50%;
      animation: twinkle 3s infinite alternate;
      opacity: 0;
      pointer-events: none;
    }
    
    @keyframes twinkle {
      0%, 100% { opacity: 0.3; }
      50% { opacity: 1; }
    }
    
    .cosmic-section-title {
      text-shadow: 0 0 10px rgba(108, 99, 255, 0.5);
    }
    
    .cosmic-project-card {
      background: rgba(15, 12, 41, 0.7);
      backdrop-filter: blur(10px);
      border-radius: 20px;
      border: 1px solid rgba(108, 99, 255, 0.3);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      overflow: hidden;
      transition: all 0.4s ease;
    }
    
    .cosmic-project-card:hover {
      border-color: rgba(108, 99, 255, 0.6);
      box-shadow: 0 15px 40px rgba(108, 99, 255, 0.2);
    }
    
    .cosmic-carousel-inner {
      border-radius: 15px;
    }
    
    .cosmic-project-content {
      padding: 2rem;
    }
    
    .cosmic-project-icon {
      width: 80px;
      height: 80px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(108, 99, 255, 0.1);
      border-radius: 50%;
      border: 2px solid rgba(108, 99, 255, 0.3);
      font-size: 2.5rem;
      color: #6c63ff;
      transition: all 0.3s ease;
    }
    
    .cosmic-project-title {
      color: white;
      font-size: 2rem;
      margin-bottom: 1.5rem;
      text-shadow: 0 0 5px rgba(108, 99, 255, 0.3);
    }
    
    .cosmic-project-desc {
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.6;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
    }
    
    .cosmic-tech-badge {
      background: rgba(108, 99, 255, 0.2);
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 50px;
      font-size: 0.9rem;
      border: 1px solid rgba(108, 99, 255, 0.4);
      transition: all 0.3s ease;
    }
    
    .cosmic-tech-badge:hover {
      background: rgba(108, 99, 255, 0.4);
      transform: translateY(-2px);
    }
    
    .cosmic-project-btn {
      padding: 0.75rem 1.5rem;
      border-radius: 50px;
      font-weight: 600;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      border: none;
    }
    
    .cosmic-view-btn {
      background: linear-gradient(135deg, #6c63ff 0%, #3a7bd5 100%);
      color: white;
    }
    
    .cosmic-view-btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(108, 99, 255, 0.4);
    }
    
    .cosmic-code-btn {
      background: rgba(255, 255, 255, 0.1);
      color: white;
      border: 1px solid rgba(108, 99, 255, 0.5);
    }
    
    .cosmic-code-btn:hover {
      background: rgba(108, 99, 255, 0.2);
      border-color: rgba(108, 99, 255, 0.8);
    }
    
    .cosmic-carousel-control {
      width: 50px;
      height: 50px;
      background: rgba(108, 99, 255, 0.3);
      border: none;
      border-radius: 50%;
      color: white;
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      opacity: 0.7;
      transition: all 0.3s ease;
    }
    
    .cosmic-carousel-control:hover {
      background: rgba(108, 99, 255, 0.6);
      opacity: 1;
    }
    
    .cosmic-carousel-prev {
      left: -25px;
    }
    
    .cosmic-carousel-next {
      right: -25px;
    }
    
    @media (max-width: 992px) {
      .cosmic-carousel-prev {
        left: 10px;
      }
      
      .cosmic-carousel-next {
        right: 10px;
      }
    }
  `}</style>
</section>

      {/* Contact Section with Cosmic Theme */}
<section id="contact" className="py-5 position-relative overflow-hidden" style={{ 
  background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)'
}}>
  {/* Animated cosmic background */}
  <div className="cosmic-contact-bg position-absolute w-100 h-100 top-0 start-0"></div>
  
  <div className="container py-5 position-relative z-index-1">
    <h2 className="text-center mb-5 fw-bold text-white animate__animated animate__fadeIn">
      <i className="bi bi-chat-dots me-2 text-warning"></i> Get In Touch
    </h2>
    
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <div className="card border-0 shadow-lg animate__animated animate__fadeInUp cosmic-contact-card">
          <div className="card-body p-4 p-md-5 text-center">
            <div className="mb-5">
              <h3 className="fw-bold mb-4 text-white">Ready to start a project?</h3>
              <p className="lead text-light">Let's build something amazing together!</p>
            </div>
            
            {/* Main WhatsApp CTA */}
            <a 
              href="https://wa.me/+254110928039" 
              className="btn btn-lg px-5 py-3 rounded-pill shadow hover-grow cosmic-cta"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-whatsapp me-2"></i> Message Me on WhatsApp
            </a>
            
            <div className="text-center mt-5">
              <p className="mb-4 text-light">Or connect with me through the cosmos:</p>
              <div className="d-flex justify-content-center gap-4">
                <a 
                  href="mailto:cmacharia482@gmail.com" 
                  className="cosmic-social-btn email-btn"
                  title="Email"
                >
                  <i className="bi bi-envelope-fill fs-4"></i>
                </a>
                <a 
                  href="https://github.com/Craigmacharia" 
                  className="cosmic-social-btn github-btn"
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub"
                >
                  <i className="bi bi-github fs-4"></i>
                </a>
                <a 
                  href="https://linkedin.com/in/craig-macharia" 
                  className="cosmic-social-btn linkedin-btn"
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn"
                >
                  <i className="bi bi-linkedin fs-4"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Add to your style jsx */}
  <style jsx>{`
    .cosmic-contact-bg {
      background: 
        radial-gradient(circle at 70% 30%, rgba(108, 99, 255, 0.1) 0%, transparent 30%),
        radial-gradient(circle at 30% 70%, rgba(255, 101, 132, 0.1) 0%, transparent 30%),
        url("data:image/svg+xml,%3Csvg viewBox='0 0 2000 2000' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E");
      opacity: 0.8;
    }
    
    .cosmic-contact-card {
      background: rgba(15, 12, 41, 0.7);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(108, 99, 255, 0.3);
      border-radius: 20px;
      transition: all 0.4s ease;
    }
    
    .cosmic-contact-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 30px rgba(108, 99, 255, 0.3);
      border-color: rgba(108, 99, 255, 0.6);
    }
    
    .cosmic-cta {
      background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
      color: white;
      font-weight: 600;
      border: none;
      position: relative;
      overflow: hidden;
    }
    
    .cosmic-cta:hover {
      transform: scale(1.05);
      box-shadow: 0 0 20px rgba(37, 211, 102, 0.5);
    }
    
    .cosmic-cta::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
      transform: scale(0);
      transition: transform 0.6s ease;
    }
    
    .cosmic-cta:hover::before {
      transform: scale(1);
    }
    
    .cosmic-social-btn {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }
    
    .email-btn {
      background: linear-gradient(135deg, #EA4335 0%, #B23121 100%);
      color: white;
    }
    
    .github-btn {
      background: linear-gradient(135deg, #333 0%, #000 100%);
      color: white;
    }
    
    .linkedin-btn {
      background: linear-gradient(135deg, #0077B5 0%, #004471 100%);
      color: white;
    }
    
    .cosmic-social-btn:hover {
      transform: scale(1.1) rotate(10deg);
      box-shadow: 0 0 15px currentColor;
    }
    
    .cosmic-social-btn::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 50%;
      border: 2px solid transparent;
      animation: pulse 2s infinite;
      pointer-events: none;
    }
    
    @keyframes pulse {
      0% {
        transform: scale(0.95);
        opacity: 0.7;
      }
      70% {
        transform: scale(1.2);
        opacity: 0;
      }
      100% {
        transform: scale(0.95);
        opacity: 0;
      }
    }
  `}</style>
</section>

      {/* Centered Galaxy Footer */}
<footer className="py-5 position-relative overflow-hidden text-white text-center">
  <div className="galaxy-footer-bg position-absolute w-100 h-100 top-0 start-0"></div>
  <div className="container position-relative z-index-1 d-flex flex-column align-items-center">
    <div className="d-flex justify-content-center mb-4">
      <a href="#home" className="text-white mx-3 hover-grow galaxy-icon">
        <i className="bi bi-house fs-4"></i>
      </a>
      <a href="#skills" className="text-white mx-3 hover-grow galaxy-icon">
        <i className="bi bi-tools fs-4"></i>
      </a>
      <a href="#projects" className="text-white mx-3 hover-grow galaxy-icon">
        <i className="bi bi-folder fs-4"></i>
      </a>
      <a href="#contact" className="text-white mx-3 hover-grow galaxy-icon">
        <i className="bi bi-envelope fs-4"></i>
      </a>
    </div>
    <p className="mb-0 text-center">
      &copy; {new Date().getFullYear()} Craig. All rights reserved. 
      <span className="d-block d-md-inline"> Made with <i className="bi bi-heart-fill text-danger"></i> and React</span>
    </p>
  </div>

  {/* Add to your style jsx */}
  <style jsx>{`
    .galaxy-footer-bg {
      background: 
        radial-gradient(circle at center, rgba(108, 99, 255, 0.1) 0%, rgba(15, 12, 41, 0.9) 70%),
        linear-gradient(to bottom, rgba(15, 12, 41, 0.9) 0%, rgba(36, 36, 62, 0.9) 100%);
    }
    
    .galaxy-icon {
      transition: all 0.3s ease;
      text-shadow: 0 0 5px rgba(108, 99, 255, 0.5);
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
    }
    
    .galaxy-icon:hover {
      transform: scale(1.2);
      text-shadow: 0 0 15px rgba(108, 99, 255, 0.8);
    }
    
    .container {
      max-width: 100%;
    }
  `}</style>
  
  {/* Twinkling Stars */}
  {[...Array(20)].map((_, i) => (
    <div 
      key={i}
      className="position-absolute star"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        width: `${Math.random() * 3 + 1}px`,
        height: `${Math.random() * 3 + 1}px`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${Math.random() * 3 + 2}s`
      }}
    ></div>
  ))}
  
  {/* Shooting Stars */}
  {[...Array(3)].map((_, i) => (
    <div 
      key={`shooting-${i}`}
      className="position-absolute shooting-star"
      style={{
        top: `${Math.random() * 30}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 10}s`
      }}
    ></div>
  ))}
</footer>

{/* Add to your style jsx */}
<style jsx>{`
  .galaxy-footer-bg {
    background: 
      radial-gradient(circle at center, rgba(108, 99, 255, 0.1) 0%, rgba(15, 12, 41, 0.9) 70%),
      linear-gradient(to bottom, rgba(15, 12, 41, 0.9) 0%, rgba(36, 36, 62, 0.9) 100%);
  }
  
  .galaxy-icon {
    transition: all 0.3s ease;
    text-shadow: 0 0 5px rgba(108, 99, 255, 0.5);
  }
  
  .galaxy-icon:hover {
    transform: scale(1.2);
    text-shadow: 0 0 15px rgba(108, 99, 255, 0.8);
  }
  
  .star {
    background-color: white;
    border-radius: 50%;
    animation: twinkle infinite alternate;
    opacity: 0.7;
  }
  
  .shooting-star {
    width: 60px;
    height: 2px;
    background: linear-gradient(90deg, rgba(255,255,255,0) 0%, white 50%, rgba(255,255,255,0) 100%);
    animation: shooting 5s linear infinite;
    transform: rotate(-45deg);
    opacity: 0;
  }
  
  @keyframes twinkle {
    0% { opacity: 0.3; }
    100% { opacity: 1; }
  }
  
  @keyframes shooting {
    0% {
      transform: translateX(0) translateY(0) rotate(-45deg);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    70% {
      opacity: 1;
    }
    100% {
      transform: translateX(300px) translateY(300px) rotate(-45deg);
      opacity: 0;
    }
  }
`}</style>

      {/* Custom Styles */}
      <style jsx>{`
        .text-gradient {
          background: linear-gradient(90deg, #6c63ff, #ff6584);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .bg-gradient-primary {
          background: linear-gradient(90deg, #6c63ff, #3a7bd5);
        }
        
        .particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          overflow: hidden;
        }
        
        .particle {
          position: absolute;
          background-color: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          pointer-events: none;
          animation: float linear infinite;
        }
        
        .galaxy-bg {
          background: 
            radial-gradient(circle at 20% 30%, rgba(108, 99, 255, 0.15) 0%, transparent 30%),
            radial-gradient(circle at 80% 70%, rgba(255, 101, 132, 0.15) 0%, transparent 30%),
            radial-gradient(circle at 40% 60%, rgba(58, 123, 213, 0.15) 0%, transparent 30%),
            url("data:image/svg+xml,%3Csvg viewBox='0 0 2000 2000' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E");
          opacity: 0.8;
        }
        
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateY(-1000px) translateX(200px);
            opacity: 0;
          }
        }
        
        .z-index-1 {
          position: relative;
          z-index: 1;
        }
        
        .icon-circle {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .hover-scale {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .hover-scale:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
        }
        
        .hover-grow {
          transition: transform 0.3s ease;
        }
        
        .hover-grow:hover {
          transform: scale(1.1);
        }
        
        .avatar {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(5px);
          border: 2px solid rgba(255, 255, 255, 0.2);
        }
        
        .icon-lg {
          width: 80px;
          height: 80px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          backdrop-filter: blur(5px);
        }
      `}</style>
    </>
  )
}

export default Ptfl;