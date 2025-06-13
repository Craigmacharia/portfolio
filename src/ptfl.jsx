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
      title: "AI-Powered SaaS Platform",
      description: "Built a scalable AI solution for business automation",
      tech: "React, Node.js, TensorFlow",
      icon: "bi-robot"
    },
    {
      title: "Blockchain Wallet",
      description: "Secure cryptocurrency wallet with multi-chain support",
      tech: "Solidity, Web3.js, React",
      icon: "bi-currency-bitcoin"
    },
    {
      title: "E-commerce Dashboard",
      description: "Real-time analytics for online stores",
      tech: "Vue.js, Firebase, D3.js",
      icon: "bi-graph-up-arrow"
    },
    {
      title: "AR Navigation App",
      description: "Indoor navigation using augmented reality",
      tech: "ARKit, Swift, Firebase",
      icon: "bi-gear-wide-connected"
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

  // Auto-slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <>
      {/* Animated Navbar with Hamburger Animation */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top animate__animated animate__fadeInDown" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' }}>
        <div className="container">
          <a className="navbar-brand fw-bold d-flex align-items-center" href="#">
            <i className="bi bi-code-slash me-2 text-primary"></i>
            <span className="text-gradient">Craig.dev</span>
          </a>
          <button 
            className={`navbar-toggler ${isMenuOpen ? 'collapsed' : ''}`} 
            type="button" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#home" onClick={() => setIsMenuOpen(false)}>
                  <i className="bi bi-house-door me-1"></i> Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills" onClick={() => setIsMenuOpen(false)}>
                  <i className="bi bi-tools me-1"></i> Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects" onClick={() => setIsMenuOpen(false)}>
                  <i className="bi bi-folder me-1"></i> Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact" onClick={() => setIsMenuOpen(false)}>
                  <i className="bi bi-envelope me-1"></i> Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section with Particle Animation */}
      <section id="home" className="vh-100 d-flex align-items-center text-white position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)' }}>
        <div className="particles">
          {[...Array(30)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 2}px`,
              height: `${Math.random() * 10 + 2}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 20 + 10}s`
            }}></div>
          ))}
        </div>
        
        <div className="container text-center z-index-1">
          <div className="animate__animated animate__zoomIn animate__fast">
            <div className="avatar mb-4 mx-auto animate__animated animate__pulse animate__infinite animate__slower">
              <i className="bi bi-person-circle" style={{ fontSize: '5rem', color: 'rgba(255,255,255,0.8)' }}></i>
            </div>
            <h1 className="display-3 fw-bold mb-3 animate__animated animate__fadeInDown">
              <span className="text-gradient">Craig</span> - Software Engineer
            </h1>
            <p className="lead mb-4 fs-3 animate__animated animate__fadeIn animate__delay-1s">
              I build <span className="text-warning">futuristic digital solutions</span> with code.
            </p>
            <div className="d-flex gap-3 justify-content-center animate__animated animate__fadeInUp animate__delay-2s">
              <a href="#projects" className="btn btn-primary btn-lg px-4 py-3 rounded-pill shadow-lg hover-grow">
                <i className="bi bi-folder me-2"></i> View Projects
              </a>
              <a 
                href="https://wa.me/+254110928039" 
                className="btn btn-success btn-lg px-4 py-3 rounded-pill d-flex align-items-center shadow-lg hover-grow"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-whatsapp me-2"></i> WhatsApp Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container py-5">
          <h2 className="text-center mb-5 fw-bold animate__animated animate__fadeIn">
            <i className="bi bi-tools me-2"></i> My Skills
          </h2>
          
          <div className="row g-4">
            {skills.map((skill, index) => (
              <div key={index} className="col-md-6 col-lg-4 animate__animated animate__fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="card h-100 border-0 shadow-sm hover-scale">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <div className="icon-circle bg-primary text-white me-3">
                        <i className={`bi ${skill.icon}`} style={{ fontSize: '1.5rem' }}></i>
                      </div>
                      <h5 className="mb-0">{skill.name}</h5>
                    </div>
                    <div className="progress" style={{ height: '10px' }}>
                      <div 
                        className="progress-bar bg-gradient-primary" 
                        role="progressbar" 
                        style={{ width: `${skill.level}%` }}
                        aria-valuenow={skill.level} 
                        aria-valuemin="0" 
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div className="text-end mt-2 text-muted small">{skill.level}%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Auto-Slider */}
<section id="projects" className="py-5" style={{ background: 'linear-gradient(to right, #f5f7fa 0%, #c3cfe2 100%)' }}>
  <div className="container py-5">
    <h2 className="text-center mb-5 fw-bold animate__animated animate__fadeIn">
      <i className="bi bi-folder me-2"></i> My Projects
    </h2>
    
    <div className="row justify-content-center">
      <div className="col-lg-9">
        <div className="card shadow-lg border-0 overflow-hidden hover-scale">
          <div className="card-body p-0">
            <div id="projectCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                {[
                  {
                    title: "Landing Page Board",
                    description: "A responsive landing page template with modern design elements",
                    tech: "HTML, CSS, JavaScript",
                    icon: "bi-layout-text-window",
                    link: "https://landingpageboard.netlify.app/",
                    github: "https://github.com/yourusername/landingpageboard"
                  },
                  {
                    title: "Ladha House",
                    description: "Real estate showcase website with property listings",
                    tech: "HTML, CSS, JavaScript",
                    icon: "bi-house",
                    link: "https://ladhahouse.netlify.app/",
                    github: "https://github.com/yourusername/ladhahouse"
                  },
                  {
                    title: "Payroll Calculator",
                    description: "Interactive tool for calculating employee payroll information",
                    tech: "HTML, CSS, JavaScript",
                    icon: "bi-calculator",
                    link: "https://craigmacharia.github.io/payroll-calculator/",
                    github: "https://github.com/craigmacharia/payroll-calculator"
                  }
                ].map((project, index) => (
                  <div 
                    key={index}
                    className={`carousel-item ${index === activeSlide ? 'active' : ''}`}
                  >
                    <div className="p-5 text-center">
                      <div className="icon-lg mb-4">
                        <i className={`bi ${project.icon}`} style={{ fontSize: '3rem', color: '#6c63ff' }}></i>
                      </div>
                      <h3 className="fw-bold mb-3">{project.title}</h3>
                      <p className="text-muted mb-4 fs-5">{project.description}</p>
                      <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
                        {project.tech.split(', ').map((tech, i) => (
                          <span key={i} className="badge bg-light text-dark p-2 shadow-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="d-flex justify-content-center gap-3">
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn btn-primary btn-lg px-4 rounded-pill hover-grow"
                        >
                          <i className="bi bi-eye me-2"></i> View Live
                        </a>
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn btn-dark btn-lg px-4 rounded-pill hover-grow"
                        >
                          <i className="bi bi-github me-2"></i> GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button 
                className="carousel-control-prev" 
                type="button" 
                onClick={() => setActiveSlide((prev) => (prev - 1 + projects.length) % projects.length)}
              >
                <span className="carousel-control-prev-icon bg-dark rounded-circle p-3" aria-hidden="true"></span>
              </button>
              <button 
                className="carousel-control-next" 
                type="button" 
                onClick={() => setActiveSlide((prev) => (prev + 1) % projects.length)}
              >
                <span className="carousel-control-next-icon bg-dark rounded-circle p-3" aria-hidden="true"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="py-5 text-white" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' }}>
        <div className="container py-5">
          <h2 className="text-center mb-5 fw-bold">
            <i className="bi bi-envelope me-2"></i> Get In Touch
          </h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow-lg animate__animated animate__fadeInUp hover-scale">
                <div className="card-body p-4 p-md-5">
                  <form>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input type="text" className="form-control form-control-lg bg-dark text-white border-secondary" id="name" placeholder="Your Name" />
                          <label htmlFor="name" className="text-muted">Your Name</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input type="email" className="form-control form-control-lg bg-dark text-white border-secondary" id="email" placeholder="Your Email" />
                          <label htmlFor="email" className="text-muted">Your Email</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <textarea className="form-control form-control-lg bg-dark text-white border-secondary" id="message" rows="5" placeholder="Your Message" style={{ height: '150px' }}></textarea>
                          <label htmlFor="message" className="text-muted">Your Message</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn btn-primary btn-lg w-100 py-3 rounded-pill shadow hover-grow">
                          <i className="bi bi-send me-2"></i> Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                  <div className="text-center mt-5">
                    <p className="mb-4">Or contact me directly:</p>
                    <div className="d-flex justify-content-center gap-3">
                      <a 
                        href="https://wa.me/+254110928039" 
                        className="btn btn-success rounded-circle p-3 shadow hover-grow"
                        target="_blank"
                        rel="noreferrer"
                        title="WhatsApp"
                      >
                        <i className="bi bi-whatsapp fs-4"></i>
                      </a>
                      <a 
                        href="mailto:your.cmacharia482@gmail.com" 
                        className="btn btn-danger rounded-circle p-3 shadow hover-grow"
                        title="Email"
                      >
                        <i className="bi bi-envelope fs-4"></i>
                      </a>
                      <a 
                        href="https://github.com/Craigmacharia" 
                        className="btn btn-dark rounded-circle p-3 shadow hover-grow"
                        target="_blank"
                        rel="noreferrer"
                        title="GitHub"
                      >
                        <i className="bi bi-github fs-4"></i>
                      </a>
                      <a 
                        href="https://linkedin.com/in/craig macharia" 
                        className="btn btn-primary rounded-circle p-3 shadow hover-grow"
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
      </section>

      {/* Footer */}
      <footer className="py-4 text-white text-center" style={{ backgroundColor: '#0f0c29' }}>
        <div className="container">
          <div className="d-flex justify-content-center mb-3">
            <a href="#home" className="text-white mx-3 hover-grow">
              <i className="bi bi-house fs-5"></i>
            </a>
            <a href="#skills" className="text-white mx-3 hover-grow">
              <i className="bi bi-tools fs-5"></i>
            </a>
            <a href="#projects" className="text-white mx-3 hover-grow">
              <i className="bi bi-folder fs-5"></i>
            </a>
            <a href="#contact" className="text-white mx-3 hover-grow">
              <i className="bi bi-envelope fs-5"></i>
            </a>
          </div>
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Craig. All rights reserved. 
            <span className="d-block d-md-inline"> Made with <i className="bi bi-heart-fill text-danger"></i> and React</span>
          </p>
        </div>
      </footer>

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