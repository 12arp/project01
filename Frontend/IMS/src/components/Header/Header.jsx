import React from 'react';
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark  shadow-sm "style={{backgroundColor:'#474745'}}>
      <div className="container-fluid px-4">
        {/* Brand: Inventory Focus */}
        <Link className="navbar-brand fw-bold" to="#">
          <i className="bi bi-box-seam me-2"></i>INV-SYSTEM
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/home" className={({ isActive }) => isActive ? "nav-link active fw-bold" : "nav-link"}>
               Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about-us" className={({ isActive }) => isActive ? "nav-link active fw-bold" : "nav-link"}>
               About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact-us" className={({ isActive }) => isActive ? "nav-link active fw-bold" : "nav-link"}>
                Contact
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink to="/suppliers" className={({ isActive }) => isActive ? "nav-link active fw-bold" : "nav-link"}>
                Suppliers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/reports" className={({ isActive }) => isActive ? "nav-link active fw-bold" : "nav-link"}>
                Reports
              </NavLink>
            </li> */}
          </ul>

          {/* Right Side: Alerts & User */}
          <div className="d-flex align-items-center gap-3">
            {/* Low Stock Badge Example */}
            {/* <span className="badge rounded-pill bg-danger" title="Low Stock Alerts">
              5 Alerts
            </span> */}
            
            <div className="dropdown">
              <button className="btn btn-light btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown">
                <i className="bi bi-person-circle me-1"></i> Login Here
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><Link className="dropdown-item" to="/admin-login">Admin</Link></li>
                <li><hr className="dropdown-divider" /></li>
                 <li><Link className="dropdown-item" to="shop-login">Shopkeeper</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
