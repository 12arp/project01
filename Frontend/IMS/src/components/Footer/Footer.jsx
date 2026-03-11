import React from 'react';
import { Link } from "react-router-dom";

function Footer() {
  // Matching your Header background exactly
  const footerStyle = {
    backgroundColor: '#474745',
    color: '#ffffff'
  };

  return (
    <footer className="shadow-lg mt-auto" style={footerStyle}>
      <div className="container py-5">
        <div className="row g-4">
          
          {/* Column 1: Brand */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">
              <i className="bi bi-box-seam me-2"></i>INV-SYSTEM
            </h5>
            <p className="text-white-50 small">
              Smart inventory management and customer retention tools for modern shopkeepers. 
              Simplify your workflow and grow your business.
            </p>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="col-md-4 text-md-center">
            <h5 className="fw-bold mb-3">Company</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/about-us" className="text-white-50 text-decoration-none hover-light">About Us</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact-us" className="text-white-50 text-decoration-none">Contact Support</Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-white-50 text-decoration-none">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Social */}
          <div className="col-md-4 text-md-end">
            <h5 className="fw-bold mb-3">Stay Connected</h5>
            <p className="text-white-50 small mb-2">support@invsystem.com</p>
            <div className="d-flex justify-content-md-end gap-3 fs-5">
              <i className="bi bi-whatsapp cursor-pointer"></i>
              <i className="bi bi-facebook cursor-pointer"></i>
              <i className="bi bi-envelope-at cursor-pointer"></i>
            </div>
          </div>
        </div>

        <hr className="border-light opacity-25 my-4" />

        <div className="row">
          <div className="col text-center">
            <p className="text-white-50 mb-0 small">
              © {new Date().getFullYear()} <span className="fw-bold text-white">INV-SYSTEM</span>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
