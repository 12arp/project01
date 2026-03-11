import React from 'react';
import { Link } from "react-router-dom";

export default function AboutContent() {
  return (
    <main className="bg-white">
      {/* 1. HERO SECTION - Organization Identity */}
      <section className="py-20 bg-light border-bottom">
        <div className="container px-5 text-center">
          <div className="mb-3">
             <i className="bi bi-info-circle-fill text-primary display-4"></i>
          </div>
          <h2 className="text-uppercase tracking-widest fw-bold text-secondary small mb-3">Our Mission</h2>
          <h1 className="display-4 fw-extrabold text-dark mb-4">
            Empowering the <br />
            <span className="text-primary">Next Generation of Retailers</span>
          </h1>
          <p className="lead text-muted max-w-700 mx-auto px-lg-5">
            At INV-SYSTEM, we believe small and medium businesses are the backbone of commerce. 
            We provide enterprise-grade tools to make business growth accessible, secure, and data-driven for everyone.
          </p>
        </div>
      </section>

      {/* 2. STATS SECTION - High Contrast Cards */}
      <section className="py-5 mt-n5">
        <div className="container px-5">
          <div className="row g-4 justify-content-center">
            {[
              { label: "Partner Growth", value: "100+", sub: "Businesses Connected", icon: "bi-graph-up-arrow" },
              { label: "Data Security", value: "256-bit", sub: "AES Encryption", icon: "bi-shield-lock" },
              { label: "System Uptime", value: "99.9%", sub: "Service Reliability", icon: "bi-cpu" },
            ].map((stat, idx) => (
              <div key={idx} className="col-md-4">
                <div className="card border-0 shadow-sm p-4 text-center h-100 bg-white hover-up">
                  <div className="text-primary mb-3">
                    <i className={`bi ${stat.icon} h2`}></i>
                  </div>
                  <div className="display-6 fw-bold text-dark mb-1">{stat.value}</div>
                  <div className="fw-bold text-secondary text-uppercase small tracking-wide">{stat.label}</div>
                  <div className="text-muted small">{stat.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE BELIEFS - Structured Split Layout */}
      <section className="py-5 my-5">
        <div className="container px-5">
          <div className="row gx-5 align-items-center">
            {/* Left Side: Security */}
            <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="p-4 bg-white border-start border-4 border-primary shadow-sm rounded-3">
                    <h2 className="fw-bold text-dark mb-4">
                        Your Data, <span className="text-primary">Our Priority.</span>
                    </h2>
                    <p className="text-muted mb-4 leading-relaxed">
                        Security isn't just a feature; it's our core foundation. We protect your most valuable assets with bank-level protocols.
                    </p>
                    <ul className="list-unstyled space-y-3">
                        {['End-to-end data encryption', 'Strict internal privacy protocols', 'Zero third-party data sharing'].map((item, i) => (
                            <li key={i} className="mb-3 d-flex align-items-center fw-bold text-secondary">
                                <i className="bi bi-check-circle-fill text-success me-3"></i>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Right Side: Philosophy */}
            <div className="col-lg-6">
                <div className="bg-dark text-white p-5 rounded-5 shadow-lg position-relative overflow-hidden">
                    <i className="bi bi-quote position-absolute top-0 end-0 display-1 opacity-10 m-3"></i>
                    <h3 className="fw-bold mb-4">Retailer-First Philosophy</h3>
                    <p className="opacity-75 mb-0">
                        Our organization is built on the success of our community. We look forward to welcoming every retailer into our team, providing personalized support and the automated strategies needed to turn visitors into lifelong customers.
                    </p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CALL TO ACTION - Brand Consistent */}
      <section className="py-5 mb-5 text-center">
        <div className="container px-5">
            <div className="bg-light border rounded-5 py-5 px-4 shadow-sm">
                <h2 className="display-6 fw-bold mb-3">Ready to scale with us?</h2>
                <p className="text-muted mb-5">Join the network of professional retailers using INV-SYSTEM.</p>
                <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                    <Link to="/contact-us" className="btn btn-primary btn-lg px-5 fw-bold shadow-sm">
                        Contact Our Team
                    </Link>
                    <Link to="/admin-login" className="btn btn-outline-dark btn-lg px-5 fw-bold">
                        Join Us Today
                    </Link>
                </div>
            </div>
        </div>
      </section>

      <style>{`
        .hover-up { transition: transform 0.3s ease; }
        .hover-up:hover { transform: translateY(-8px); }
        .max-w-700 { max-width: 700px; }
      `}</style>
    </main>
  );
}
