import React from 'react';
import { useNavigate } from 'react-router-dom';

function ShopDashboard() {
  const navigate = useNavigate();

    const shopkeeperOps = [
    { 
      title: "Add New Product", 
      icon: "bi-box-seam-fill", 
      color: "bg-secondary text-white", 
      path: "/yourshop/add-product", 
      subtitle: "Update shop inventory" 
    },
    { 
      title: "Generate Bill", 
      icon: "bi-receipt", 
      color: "bg-primary text-white", 
      path: "/yourshop/generate-bill", 
      subtitle: "Create new invoice" 
    },
    { 
      title: "Send Thank You", 
      icon: "bi-heart-fill", 
      color: "bg-danger text-white", 
      path: "/send-thankyou", 
      subtitle: "SMS via Mobile Number" 
    }
  ];


  const additionalFeatures = [
    { title: "Gentle Reminder", icon: "bi-bell-fill", color: "bg-info text-white", path: "/send-reminder", subtitle: "Send offers to customers" },
    { title: "Total Sales", icon: "bi-graph-up-arrow", color: "bg-success text-white", path: "/sales-report", subtitle: "Track monthly revenue" },
    { title: "Most Sold Product", icon: "bi-trophy-fill", color: "orange", path: "/top-products", subtitle: "View Sold Product List" }
  ];

  // Upcoming Features (Disabled)
  const workerManagement = [
    { 
      title: "Assign Work", 
      icon: "bi-clipboard-check-fill", 
      color: "bg-dark text-white", 
      path: "#", 
      subtitle: "Coming Soon",
      disabled: true 
    },
    { 
      title: "Access Permissions", 
      icon: "bi-shield-lock-fill", 
      color: "bg-warning text-dark", 
      path: "#", 
      subtitle: "Coming Soon",
      disabled: true 
    },
    { 
  title: "Payroll", 
  icon: "bi-cash-stack", 
  color: "bg-success text-white", 
  path: "#", 
  subtitle: "Salary & Payments", 
  disabled: true 
}

  ];

  const ActionCard = ({ item }) => {
    const isOrange = item.color === "orange";
    
    return (
      <div className="col-md-4">
        <div 
          className={`card ${isOrange ? "" : item.color} text-center p-4 border-0 shadow-sm h-100 ${item.disabled ? 'opacity-50' : ''}`}
          style={{ 
            cursor: item.disabled ? 'not-allowed' : 'pointer', 
            transition: 'transform 0.2s',
            backgroundColor: isOrange ? '#fd7e14' : '', 
            color: 'white' 
          }}
          onClick={() => !item.disabled && navigate(item.path)}
          onMouseOver={(e) => !item.disabled && (e.currentTarget.style.transform = 'scale(1.03)')}
          onMouseOut={(e) => !item.disabled && (e.currentTarget.style.transform = 'scale(1)')}
        >
          <div className="card-body d-flex flex-column justify-content-center">
            {item.disabled && <span className="badge bg-light text-dark position-absolute top-0 end-0 m-2 small">Coming Soon</span>}
            <i className={`bi ${item.icon} display-5 mb-3`}></i>
            <h5 className="card-title fw-bold mb-1">{item.title}</h5>
            <p className="card-text small opacity-75">{item.subtitle}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container py-5">
      <div className="mb-5">
        <h3 className="mb-4 fw-bold border-start border-4 border-dark ps-3">Daily Operations</h3>
        <div className="row g-4">
          {shopkeeperOps.map((item, index) => <ActionCard key={index} item={item} />)}
        </div>
      </div>

      <hr className="my-5 opacity-25" />

      <div className="mb-5">
        <h3 className="mb-4 fw-bold border-start border-4 border-info ps-3">Additional Feature</h3>
        <div className="row g-4">
          {additionalFeatures.map((item, index) => <ActionCard key={index} item={item} />)}
        </div>
      </div>

      <hr className="my-5 opacity-25" />

      <div className="mb-5">
        <h3 className="mb-4 fw-bold border-start border-4 border-warning ps-3">Worker Management (Upcoming)</h3>
        <div className="row g-4">
          {workerManagement.map((item, index) => <ActionCard key={index} item={item} />)}
        </div>
      </div>
    </div>
  );
}

export default ShopDashboard;
