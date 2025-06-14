import React from 'react';

const Footer = () => {
  return (
    <footer className="py-5 position-relative galaxy-footer-bg">
      <div className="container py-4 position-relative z-index-1">
        <div className="row g-4">
          <div className="col-md-4 text-center text-md-start">
            <h5 className="text-white mb-4">
              <i className="bi bi-stars me-2 text-warning"></i> Craig.dev
            </h5>
            <p className="text-white-50 mb-0">
              Crafting cosmic digital experiences with code and creativity.
            </p>
          </div>
          
          <div className="col-md-4 text-center">
            <h5 className="text-white mb-4">Quick Links</h5>
            <div className="d-flex justify-content-center gap-4">
              <a href="#home" className="text-white-50 galaxy-icon">
                <i className="bi bi-house-door fs-5"></i>
              </a>
              <a href="#skills" className="text-white-50 galaxy-icon">
                <i className="bi bi-tools fs-5"></i>
              </a>
              <a href="#projects" className="text-white-50 galaxy-icon">
                <i className="bi bi-folder fs-5"></i>
              </a>
              <a href="#contact" className="text-white-50 galaxy-icon">
                <i className="bi bi-envelope fs-5"></i>
              </a>
            </div>
          </div>
          
          <div className="col-md-4 text-center text-md-end">
            <h5 className="text-white mb-4">Connect With Me</h5>
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a href="https://github.com/Craigmacharia" className="text-white-50 galaxy-icon" target="_blank" rel="noreferrer">
                <i className="bi bi-github fs-5"></i>
              </a>
              <a href="https://twitter.com/craigmacharia_" className="text-white-50 galaxy-icon" target="_blank" rel="noreferrer">
                <i className="bi bi-twitter-x fs-5"></i>
              </a>
              <a href="https://linkedin.com/in/craigmacharia" className="text-white-50 galaxy-icon" target="_blank" rel="noreferrer">
                <i className="bi bi-linkedin fs-5"></i>
              </a>
              <a href="https://wa.me/+254110928039" className="text-white-50 galaxy-icon" target="_blank" rel="noreferrer">
                <i className="bi bi-whatsapp fs-5"></i>
              </a>
            </div>
          </div>
        </div>
        
        <hr className="my-4 border-secondary" />
        
        <div className="text-center text-white-50">
          <small>© {new Date().getFullYear()} Craig Macharia. All rights reserved.</small>
        </div>
      </div>
      
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
    </footer>
  );
};

export default Footer;