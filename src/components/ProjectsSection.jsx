import React, { useEffect } from 'react';

const ProjectsSection = ({ projects, activeSlide, setActiveSlide }) => {
  // Create twinkling stars effect
  useEffect(() => {
    const container = document.getElementById('projects');
    if (!container) return;

    // Create stars
    for (let i = 0; i < 50; i++) {
      const star = document.createElement('div');
      star.className = 'galaxy-star';
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.width = `${Math.random() * 3 + 1}px`;
      star.style.height = star.style.width;
      star.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(star);
    }

    return () => {
      const stars = document.querySelectorAll('.galaxy-star');
      stars.forEach(star => star.remove());
    };
  }, []);

  return (
    <section id="projects" className="py-5 position-relative overflow-hidden cosmic-section">
      {/* Nebula background elements */}
      <div className="cosmic-nebula nebula-1"></div>
      <div className="cosmic-nebula nebula-2"></div>
      <div className="cosmic-nebula nebula-3"></div>

      <div className="container py-5 position-relative z-index-1">
        <h2 className="text-center mb-5 fw-bold text-white animate__animated animate__fadeIn cosmic-title">
          <i className="bi bi-stars me-2 cosmic-icon"></i> Galactic Creations
        </h2>
        
        <div id="projectCarousel" className="carousel slide cosmic-carousel" data-bs-ride="carousel">
          <div className="carousel-indicators cosmic-indicators">
            {projects.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#projectCarousel"
                data-bs-slide-to={index}
                className={activeSlide === index ? 'active' : ''}
                aria-current={activeSlide === index ? 'true' : 'false'}
                onClick={() => setActiveSlide(index)}
              ></button>
            ))}
          </div>
          
          <div className="carousel-inner rounded-4 overflow-hidden cosmic-carousel-inner">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`carousel-item ${activeSlide === index ? 'active' : ''}`}
              >
                <div className="row justify-content-center">
                  <div className="col-lg-8 col-xl-6 p-4 p-lg-5 d-flex flex-column justify-content-center cosmic-card">
                    <div className="icon-lg mb-4 cosmic-icon-container">
                      <i className={`bi ${project.icon} cosmic-project-icon`}></i>
                    </div>
                    <h3 className="text-white fw-bold mb-3 cosmic-project-title">{project.title}</h3>
                    <p className="cosmic-project-description">{project.description}</p>
                    <p className="cosmic-project-tech">
                      <i className="bi bi-tools me-2"></i> {project.tech}
                    </p>
                    <div className="d-flex flex-wrap gap-3 cosmic-buttons justify-content-center">
                      <a 
                        href={project.link} 
                        className="btn rounded-pill px-4 cosmic-btn cosmic-btn-demo"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bi bi-eye me-2"></i> Live Demo
                      </a>
                      <a 
                        href={project.github} 
                        className="btn rounded-pill px-4 cosmic-btn cosmic-btn-code"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bi bi-github me-2"></i> View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            className="carousel-control-prev cosmic-control" 
            type="button" 
            onClick={() => setActiveSlide(prev => (prev - 1 + projects.length) % projects.length)}
          >
            <span className="carousel-control-prev-icon cosmic-control-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button 
            className="carousel-control-next cosmic-control" 
            type="button" 
            onClick={() => setActiveSlide(prev => (prev + 1) % projects.length)}
          >
            <span className="carousel-control-next-icon cosmic-control-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        .cosmic-section {
          background: linear-gradient(135deg, #0f0c29 0%, #1a1a2e 50%, #16213e 100%);
          position: relative;
          overflow: hidden;
        }

        .cosmic-nebula {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.15;
          z-index: 0;
        }

        .nebula-1 {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, #6c63ff 0%, transparent 70%);
          top: 10%;
          left: 5%;
          animation: float 25s infinite alternate ease-in-out;
        }

        .nebula-2 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, #ff6584 0%, transparent 70%);
          bottom: 15%;
          right: 10%;
          animation: float 30s infinite alternate-reverse ease-in-out;
        }

        .nebula-3 {
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, #3a7bd5 0%, transparent 70%);
          top: 60%;
          left: 30%;
          animation: float 20s infinite alternate ease-in-out;
        }

        .galaxy-star {
          position: absolute;
          background-color: white;
          border-radius: 50%;
          pointer-events: none;
          animation: twinkle 3s infinite alternate;
          z-index: 1;
        }

        .cosmic-title {
          text-shadow: 0 0 10px rgba(108, 99, 255, 0.7);
          position: relative;
          background: linear-gradient(90deg, #6c63ff, #3a7bd5);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .cosmic-icon {
          color: #6c63ff;
          text-shadow: 0 0 5px rgba(108, 99, 255, 0.5);
        }

        .cosmic-carousel {
          border: 1px solid rgba(108, 99, 255, 0.3);
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 0 30px rgba(108, 99, 255, 0.2);
          background: rgba(15, 12, 41, 0.5);
          backdrop-filter: blur(5px);
          max-width: 100%;
        }

        .cosmic-card {
          background: rgba(15, 12, 41, 0.7);
          backdrop-filter: blur(5px);
          border-radius: 15px;
          padding: 2rem !important;
          margin: 0 auto;
        }

        .cosmic-project-title {
          text-shadow: 0 0 5px rgba(108, 99, 255, 0.5);
          margin-bottom: 1.2rem;
          font-size: 1.75rem;
          text-align: center;
        }

        .cosmic-project-description {
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 1.5rem;
          line-height: 1.6;
          font-size: 1rem;
          text-align: center;
        }

        .cosmic-project-tech {
          color: rgba(108, 99, 255, 0.8);
          margin-bottom: 1.8rem;
          font-size: 0.95rem;
          text-align: center;
        }

        .cosmic-icon-container {
          background: rgba(108, 99, 255, 0.1);
          border: 1px solid rgba(108, 99, 255, 0.3);
          border-radius: 50%;
          width: 70px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
        }

        .cosmic-project-icon {
          color: #6c63ff;
          font-size: 2rem;
          text-shadow: 0 0 10px rgba(108, 99, 255, 0.5);
        }

        .cosmic-buttons {
          margin-top: 2rem;
        }

        .cosmic-btn {
          border: none;
          font-weight: 500;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          padding: 0.5rem 1.5rem;
        }

        .cosmic-btn-demo {
          background: rgba(255, 255, 255, 0.1);
          color: white;
        }

        .cosmic-btn-demo:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(255, 255, 255, 0.1);
        }

        .cosmic-btn-code {
          background: rgba(108, 99, 255, 0.2);
          color: white;
        }

        .cosmic-btn-code:hover {
          background: rgba(108, 99, 255, 0.4);
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(108, 99, 255, 0.2);
        }

        .cosmic-control {
          width: 50px;
          height: 50px;
          background: rgba(108, 99, 255, 0.2);
          border-radius: 50%;
          top: 50%;
          transform: translateY(-50%);
          opacity: 0.7;
          transition: all 0.3s ease;
          margin: 0 15px;
        }

        .cosmic-control:hover {
          opacity: 1;
          background: rgba(108, 99, 255, 0.4);
        }

        .cosmic-control-icon {
          filter: drop-shadow(0 0 2px rgba(108, 99, 255, 0.5));
        }

        @keyframes twinkle {
          0% { opacity: 0.3; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1.1); }
        }

        @keyframes float {
          0% { transform: translate(0, 0); }
          50% { transform: translate(20px, 20px); }
          100% { transform: translate(0, 0); }
        }

        /* Responsive adjustments */
        @media (max-width: 1199.98px) {
          .cosmic-card {
            padding: 1.75rem !important;
          }
        }

        @media (max-width: 991.98px) {
          .cosmic-card {
            padding: 1.5rem !important;
          }
          
          .cosmic-project-title {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 767.98px) {
          .cosmic-card {
            padding: 1.25rem !important;
          }
          
          .cosmic-project-title {
            font-size: 1.3rem;
          }
          
          .cosmic-project-description {
            font-size: 0.9rem;
          }
          
          .cosmic-buttons {
            flex-direction: column;
            gap: 0.75rem;
          }
          
          .cosmic-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;