import React from 'react';
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  
  // 1. Get user data from localStorage
  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : null;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user"); 
    navigate("/admin-login"); // Redirect
  };

  return (
    <nav className="navbar navbar-dark shadow-sm" style={{ backgroundColor: '#474745' }}>
      <div className="container-fluid px-4">
        
        {/* Left Side: Project Name */}
        <Link className="navbar-brand fw-bold" to="/admin-dashboard">
          <i className="bi bi-box-seam me-2"></i>INV-SYSTEM
        </Link>

        {/* Right Side: User Name & Logout */}
        <div className="d-flex align-items-center gap-3">
          <span className="text-white me-2">
            Welcome, {user?.name || "Admin"}
          </span>
          <button 
            className="btn btn-outline-light btn-sm" 
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Header;
