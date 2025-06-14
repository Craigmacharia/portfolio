import React from 'react';

const SkillsSection = ({ skills }) => {
  return (
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
      `}</style>
    </section>
  );
};

export default SkillsSection;