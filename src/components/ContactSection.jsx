import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-5 position-relative overflow-hidden" style={{
      background: 'linear-gradient(to bottom, #24243e 0%, #302b63 50%, #0f0c29 100%)'
    }}>
      {/* Shooting stars */}
      {[...Array(5)].map((_, i) => (
        <div 
          key={`contact-star-${i}`}
          className="position-absolute shooting-star"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`
          }}
        ></div>
      ))}
      
      <div className="container py-5 position-relative z-index-1">
        <h2 className="text-center mb-5 fw-bold text-white animate__animated animate__fadeIn">
          <i className="bi bi-stars me-2 text-warning"></i> Connect With Me
        </h2>
        
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card border-0 shadow-lg cosmic-contact-card">
              <div className="card-body p-4 p-lg-5 text-center">
                <div className="d-flex flex-column align-items-center">
                  <h3 className="text-white mb-4">Let's work together!</h3>
                  <p className="text-white-50 mb-5">Reach out through any of these platforms</p>
                  
                  <div className="d-flex flex-wrap justify-content-center gap-4 cosmic-social-buttons">
                    {/* WhatsApp Button */}
                    <a 
                      href="https://wa.me/254110928039" 
                      className="btn btn-lg rounded-pill cosmic-btn cosmic-btn-whatsapp"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bi bi-whatsapp me-2"></i> WhatsApp
                    </a>
                    
                    {/* Instagram Button */}
                    <a 
                      href="https://instagram.com/yourusername" 
                      className="btn btn-lg rounded-pill cosmic-btn cosmic-btn-instagram"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bi bi-instagram me-2"></i> Instagram
                    </a>
                    
                    {/* Email Button */}
                    <a 
                      href="mailto:cmacharia482@gmail.com" 
                      className="btn btn-lg rounded-pill cosmic-btn cosmic-btn-email"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bi bi-envelope me-2"></i> Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cosmic-contact-card {
          background: rgba(15, 12, 41, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(108, 99, 255, 0.2);
        }
        
        .cosmic-social-buttons {
          max-width: 600px;
          margin: 0 auto;
        }
        
        .cosmic-btn {
          border: none;
          font-weight: 500;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          min-width: 180px;
          justify-content: center;
          padding: 0.75rem 1.5rem;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }
        
        .cosmic-btn-whatsapp {
          background: #25D366;
          color: white;
        }
        
        .cosmic-btn-whatsapp:hover {
          background: #128C7E;
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(37, 211, 102, 0.3);
        }
        
        .cosmic-btn-instagram {
          background: linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D);
          color: white;
        }
        
        .cosmic-btn-instagram:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(193, 53, 132, 0.3);
        }
        
        .cosmic-btn-email {
          background: #6c63ff;
          color: white;
        }
        
        .cosmic-btn-email:hover {
          background: #5a52d8;
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(108, 99, 255, 0.3);
        }
        
        .shooting-star {
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, rgba(255,255,255,0) 0%, white 50%, rgba(255,255,255,0) 100%);
          animation: shooting 5s linear infinite;
          transform: rotate(-45deg);
          opacity: 0;
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

        @media (max-width: 768px) {
          .cosmic-social-buttons {
            flex-direction: column;
            gap: 1rem;
          }
          
          .cosmic-btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;