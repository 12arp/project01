import React from 'react';
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  
  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : null;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user"); 
    navigate("/admin-login");
  };

  return (
    <nav className="navbar navbar-dark shadow-sm" style={{ backgroundColor: '#474745' }}>
      <div className="container-fluid px-4">
        
        {/* Left Side: Project Name */}
        <Link className="navbar-brand fw-bold" to="/admin-dashboard">
          <i className="bi bi-box-seam me-2"></i>INV-SYSTEM
        </Link>

        {/* Right Side: User Dropdown & Logout */}
        <div className="dropdown">
          <button 
            className="btn btn-outline-light dropdown-toggle border-0" 
            type="button" 
            data-bs-toggle="dropdown" 
            aria-expanded="false"
          >
            <i className="bi bi-person-circle me-2"></i>
            {user?.name || "Admin"}
          </button>
          <ul className="dropdown-menu dropdown-menu-end shadow border-0 mt-2">
            <li>
              <Link className="dropdown-item py-2" to="/edit-profile">
                <i className="bi bi-pencil-square me-2 text-primary"></i>Edit Profile
              </Link>
            </li>
            <li><hr className="dropdown-divider" /></li>
            <li>
              <button className="dropdown-item py-2 text-danger" onClick={handleLogout}>
                <i className="bi bi-box-arrow-right me-2"></i>Logout
              </button>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Header;
