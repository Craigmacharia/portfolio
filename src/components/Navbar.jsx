import React from 'react';

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
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
  );
};

export default Navbar;