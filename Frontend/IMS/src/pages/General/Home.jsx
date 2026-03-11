import React from 'react';
import { Link } from "react-router-dom";

export default function HomeContent() {
  return (
    <main className="bg-white">
      {/* 1. HERO SECTION - Clean & Bold */}
      <section className="py-20 bg-light border-bottom">
        <div className="container px-5">
          <div className="row gx-5 align-items-center justify-content-center">
            <div className="col-lg-8 col-xl-7 text-center">
              <div className="mb-4">
                <span className="badge rounded-pill bg-dark px-3 py-2 text-uppercase tracking-wider">
                  Enterprise Inventory Solutions
                </span>
              </div>
              <h1 className="display-3 fw-bolder text-dark mb-4 tracking-tight">
                Smart Management for <br />
                <span className="text-primary">Modern Shopkeepers</span>
              </h1>
              <p className="lead fw-normal text-muted mb-5">
                Streamline your inventory, track customer behavior, and automate your 
                business operations with our unified INV-SYSTEM.
              </p>
              <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                <Link to="/admin-login" className="btn btn-dark btn-lg px-5 py-3 fw-bold shadow-sm">
                  Admin Portal
                </Link>
                <Link to="/shop-login" className="btn btn-outline-dark btn-lg px-5 py-3 fw-bold">
                  Shopkeeper Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ORGANIZATION PILLARS (The Icons) */}
      <section className="py-5">
        <div className="container px-5 my-5">
          <div className="row g-5">
            {[
              { title: "Real-time Tracking", desc: "Monitor stock levels and sales as they happen across all branches.", icon: "bi-speedometer2", color: "text-primary" },
              { title: "Customer Retention", desc: "Automated analysis to identify your most loyal frequent buyers.", icon: "bi-people-fill", color: "text-success" },
              { title: "Secure Operations", desc: "Advanced encryption ensuring your business data stays private.", icon: "bi-shield-check", color: "text-info" },
              { title: "Detailed Analytics", desc: "Download comprehensive reports with a single click for audits.", icon: "bi-bar-chart-line-fill", color: "text-danger" }
            ].map((item, idx) => (
              <div key={idx} className="col-lg-3 col-md-6 text-center">
                <div className={`feature bg-white shadow-sm border rounded-4 p-4 h-100 transition-hover`}>
                  <div className={`display-5 mb-3 ${item.color}`}>
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                  <h4 className="fw-bold h5">{item.title}</h4>
                  <p className="text-muted small mb-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT OUR ORGANIZATION (Professional Layout) */}
      <section className="py-5 bg-dark text-white rounded-5 mx-2 mx-md-5 my-5 shadow-lg">
        <div className="container px-5 my-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold mb-4">Empowering <br/><span className="text-primary">Global Commerce</span></h2>
              <p className="lead opacity-75 mb-4">
                Founded in 2024, INV-SYSTEM was built to bridge the gap between traditional retail and digital efficiency. We provide the tools necessary for shopkeepers to scale without the headache of manual paperwork.
              </p>
              <div className="row g-4 mt-2">
                <div className="col-6">
                  <div className="h2 fw-bold mb-0">500+</div>
                  <div className="small opacity-50">Active Shops</div>
                </div>
                <div className="col-6">
                  <div className="h2 fw-bold mb-0">99.9%</div>
                  <div className="small opacity-50">System Uptime</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
               <div className="p-5 bg-white bg-opacity-10 rounded-4 border border-white border-opacity-10">
                  <h5 className="fw-bold mb-3"><i className="bi bi-quote me-2"></i>Our Mission</h5>
                  <p className="fst-italic opacity-75">
                    "To democratize enterprise-grade inventory tools for every local shop owner, ensuring no business is left behind in the digital age."
                  </p>
                  <hr className="my-4 opacity-25" />
                  <div className="d-flex align-items-center">
                    <div className="bg-primary rounded-circle p-2 me-3">
                      <i className="bi bi-award-fill text-white"></i>
                    </div>
                    <div>
                      <div className="fw-bold">ISO 27001 Certified</div>
                      <div className="small opacity-50">Data Security Standards</div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .transition-hover:hover {
          transform: translateY(-10px);
          transition: all 0.3s ease;
          border-color: #0d6efd !important;
        }
      `}</style>
    </main>
  );
}
