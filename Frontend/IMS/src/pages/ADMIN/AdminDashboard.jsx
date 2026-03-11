import React from 'react';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const navigate = useNavigate();

  const shopkeeperActions = [
    { title: "Register New Shopkeeper", icon: "bi-person-plus-fill", color: "bg-primary text-white", path: "/admin/register/shopkeeper", subtitle: "Add a new record" },
    { title: "Block Shopkeeper", icon: "bi-person-x-fill", color: "bg-danger text-white", path: "/block-shopkeeper", subtitle: "Restrict access" },
    { title: "Find Shopkeeper", icon: "bi-search", color: "bg-dark text-white", path: "/find-shopkeeper", subtitle: "Look for existing Shopkeeper" }
  ];

  const customerActions = [
    { title: "Customer Details", icon: "bi-person-vcard", color: "bg-info text-white", path: "/customer-details", subtitle: "View and edit profile info" },
    { title: "Customer Analysis", icon: "bi-graph-up-arrow", color: "bg-success text-white", path: "/customer-analysis", subtitle: "Track buying patterns" },
    { title: "Customer Orders", icon: "bi-bag-check", color: "bg-warning text-dark", path: "/customer-orders", subtitle: "Manage purchase history" }
  ];

  const ActionCard = ({ item }) => (
    <div className="col-md-4">
      <div 
        className={`card ${item.color} text-center p-4 border-0 shadow-sm h-100`}
        style={{ 
          cursor: 'pointer', 
          transition: 'transform 0.2s',
          backgroundColor: item.color === 'bg-dark' ? '#000000' : '' // Ensures "Full Black"
        }}
        onClick={() => navigate(item.path)}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <div className="card-body d-flex flex-column justify-content-center">
          <i className={`bi ${item.icon} display-5 mb-3`}></i>
          <h5 className="card-title fw-bold mb-1">{item.title}</h5>
          <p className="card-text small opacity-75">{item.subtitle}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container py-5">
      <div className="mb-5">
        <h3 className="mb-4 fw-bold border-start border-4 border-primary ps-3">Shopkeeper Management</h3>
        <div className="row g-4">
          {shopkeeperActions.map((item, index) => (
            <ActionCard key={index} item={item} />
          ))}
        </div>
      </div>

      <hr className="my-5 opacity-25" />

      <div>
        <h3 className="mb-4 fw-bold border-start border-4 border-success ps-3">Customer Management</h3>
        <div className="row g-4">
          {customerActions.map((item, index) => (
            <ActionCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
