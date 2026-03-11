import React from 'react';

export default function ContactUs() {
  const founders = [
    {
      name: "Aditya",
      role: "Co-Founder & Tech Lead",
      initials: "AD",
      bio: "Driving the technical vision and automation engine of INV-SYSTEM."
    },
    {
      name: "Arpit",
      role: "Co-Founder & Operations",
      initials: "AR",
      bio: "Focusing on shopkeeper success and streamlined business operations."
    }
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* 1. Header Section */}
      <section className="py-5 bg-light border-bottom">
        <div className="container px-5 text-center">
          <h1 className="display-5 fw-bold text-dark mb-3">Meet the Team</h1>
          <p className="lead text-muted max-w-700 mx-auto">
            Have questions? Aditya, Arpit, and our support team are here to help you scale your business.
          </p>
        </div>
      </section>

      {/* 2. Founders Section - Minimalist Cards */}
      <section className="py-5">
        <div className="container px-5">
          <div className="row g-4 justify-content-center">
            {founders.map((founder, idx) => (
              <div key={idx} className="col-md-5">
                <div className="card border-0 shadow-sm rounded-4 p-4 text-center h-100 hover-up">
                  <div className="mx-auto mb-4 d-flex align-items-center justify-content-center bg-dark text-white rounded-circle shadow" style={{ width: '80px', height: '80px', fontSize: '1.5rem', fontWeight: 'bold' }}>
                    {founder.initials}
                  </div>
                  <h3 className="h4 fw-bold text-dark mb-1">{founder.name}</h3>
                  <div className="text-primary fw-bold small text-uppercase tracking-wider mb-3">{founder.role}</div>
                  <p className="text-muted small mb-0 px-3">{founder.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Support & Contact Form - Brand Consistent Dark Box */}
      <section className="py-5 mb-5">
        <div className="container px-5">
          <div className="bg-dark text-white rounded-5 p-4 p-md-5 shadow-lg overflow-hidden position-relative">
            <div className="row g-5 align-items-center position-relative" style={{ zIndex: 1 }}>
              
              {/* Left Side: Contact Info */}
              <div className="col-lg-5">
                <h2 className="display-6 fw-bold mb-5">Get in Touch</h2>
                
                <div className="d-flex align-items-center mb-4">
                  <div className="bg-primary rounded-4 p-3 me-3">
                    <i className="bi bi-envelope-at h3 mb-0"></i>
                  </div>
                  <div>
                    <div className="small text-uppercase opacity-50 fw-bold tracking-widest">Email Support</div>
                    <a href="mailto:maditya196@gmail.com" className="text-white text-decoration-none fw-bold h5">maditya196@gmail.com</a>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-4">
                  <div className="bg-success rounded-4 p-3 me-3">
                    <i className="bi bi-whatsapp h3 mb-0"></i>
                  </div>
                  <div>
                    <div className="small text-uppercase opacity-50 fw-bold tracking-widest">WhatsApp Support</div>
                    <a href="https://wa.me" target="_blank" rel="noreferrer" className="text-white text-decoration-none fw-bold h5">+91 7393806531</a>
                  </div>
                </div>

                <div className="mt-5 p-3 bg-white bg-opacity-10 rounded-3 border border-white border-opacity-10">
                   <p className="small mb-0 opacity-75 italic">
                     <i className="bi bi-clock me-2"></i>Available 10 AM - 6 PM IST
                   </p>
                </div>
              </div>

              {/* Right Side: Contact Form */}
              <div className="col-lg-7">
                <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm text-dark">
                  <h4 className="fw-bold mb-4">Send a Message</h4>
                  <form>
                    <div className="mb-3">
                      <label className="form-label small fw-bold">Your Name</label>
                      <input type="text" className="form-control border-light-subtle bg-light" placeholder="John Doe" />
                    </div>
                    <div className="mb-4">
                      <label className="form-label small fw-bold">How can we help?</label>
                      <textarea rows="4" className="form-control border-light-subtle bg-light" placeholder="Describe your shop's needs..."></textarea>
                    </div>
                    <button type="button" className="btn btn-dark btn-lg w-100 fw-bold shadow-sm">
                      Submit Inquiry
                    </button>
                  </form>
                </div>
              </div>
            </div>
            {/* Subtle background decoration */}
            <div className="position-absolute top-0 end-0 p-5 opacity-10">
               <i className="bi bi-chat-right-dots display-1"></i>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .hover-up { transition: all 0.3s ease; }
        .hover-up:hover { transform: translateY(-10px); border: 1px solid #0d6efd; }
        .max-w-700 { max-width: 700px; }
      `}</style>
    </main>
  );
}
