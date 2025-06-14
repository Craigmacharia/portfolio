import React, { useEffect } from 'react';

const HeroSection = () => {
  useEffect(() => {
    const slides = document.querySelectorAll('.cosmic-slide');
    let currentSlide = 0;
    
    const showSlide = (n) => {
      slides.forEach(slide => slide.classList.remove('active'));
      slides[n].classList.add('active');
    };
    
    const nextSlide = () => {
      currentSlide = (currentSlide + 1) % 3; // 3 slides
      showSlide(currentSlide);
    };
    
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
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
          <p className="lead mb-4 fs-3 animate__animated animate__fadeIn animate__delay-1s">
            This <span className="text-primary">is just a little taste</span> of what I can do.
          </p>
          <p className="lead mb-4 fs-3 animate__animated animate__fadeIn animate__delay-1s">
            AI dev <span className="text-primary">web dev</span> App dev.
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
      `}</style>
    </section>
  );
};

export default HeroSection;