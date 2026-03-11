
import React, { useState } from "react";
import axios from "axios";
function Shopkeeperaddproduct() {



  const [formData, setFormData] = useState({
    name: "",
    barcode: "",
    price: "",
    stock: "",
    colour: "", // Optional field
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      const token = localStorage.getItem("token");
      
      // Ensure numeric values are sent as numbers, not strings
      const payload = {
        ...formData,
        price: Number(formData.price),
        stock: Number(formData.stock),
      };

      const res = await axios.post(
        "http://localhost:5000/api/product/add", 
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setSuccessMsg("Product added successfully to inventory!");
      setFormData({ name: "", barcode: "", price: "", stock: "", colour: "" });
      
    } catch (err) {
      console.error(err.response);
      setErrorMsg(err.response?.data?.message || "Failed to add product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card border-0 shadow-lg overflow-hidden">
            <div className="row g-0">
              {/* Left Branding Side */}
              <div className="col-md-4 bg-dark text-white d-flex flex-column justify-content-center p-5 text-center">
                <div className="mb-4">
                  <i className="bi bi-box-seam display-4"></i>
                </div>
                <h3 className="fw-bold">Inventory</h3>
                <p className="opacity-75 small">
                  Scan a barcode or enter details manually to add items to your shop.
                </p>
              </div>

              {/* Right Form Side */}
              <div className="col-md-8 bg-white p-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h4 className="fw-bold text-dark m-0">ADD NEW PRODUCT</h4>
                  <span className="badge bg-light text-dark border px-3">Stock Entry</span>
                </div>

                {successMsg && <div className="alert alert-success">{successMsg}</div>}
                {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label small fw-bold text-secondary">Product Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      className="form-control form-control-lg fs-6"
                      placeholder="e.g. Coca Cola 500ml"
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label small fw-bold text-secondary">Barcode / SKU</label>
                    <div className="input-group">
                      <span className="input-group-text bg-light"><i className="bi bi-upc-scan"></i></span>
                      <input
                        type="text"
                        name="barcode"
                        value={formData.barcode}
                        className="form-control form-control-lg fs-6"
                        placeholder="Scan or type barcode"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label className="form-label small fw-bold text-secondary">Price (Selling)</label>
                      <input
                        type="number"
                        name="price"
                        value={formData.price}
                        className="form-control form-control-lg fs-6"
                        placeholder="0.00"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small fw-bold text-secondary">Initial Stock</label>
                      <input
                        type="number"
                        name="stock"
                        value={formData.stock}
                        className="form-control form-control-lg fs-6"
                        placeholder="Quantity"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label small fw-bold text-secondary">Colour / Variant (Optional)</label>
                    <input
                      type="text"
                      name="colour"
                      value={formData.colour}
                      className="form-control form-control-lg fs-6"
                      placeholder="e.g. Red, XL, Blue"
                      onChange={handleChange}
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-dark btn-lg w-100 fw-bold shadow-sm"
                    disabled={loading}
                  >
                    {loading ? "Adding Product..." : "Save Product to Inventory"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default Shopkeeperaddproduct