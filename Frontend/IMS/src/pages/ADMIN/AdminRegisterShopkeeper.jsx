import React, { useState, useEffect } from "react";
import axios from "axios";

function RegisterShopkeeper() {
  const [formData, setFormData] = useState({
    shopName: "",
    ownerName: "",
    email: "",
    mobile: "",
    CountryId: "",
    stateId: "",
    cityId: "",
    Pincode: "",
    Address: "",
  });

  const [countries, setcountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [loading, setloading] = useState(false);
  const [cityloading,setcityloading]=useState(false)
  const [successmsg,setSuccessmsg]=useState("")
  const [errorMsg,setErrorMsg]=useState("")

  useEffect(() => {
    fetchCountries();
  }, []);
  // for states
  useEffect(() => {
    if (!formData.CountryId) return;

    const fetchStates = async () => {
      setloading(true);

      try {
        const res = await axios.get(
          `http://localhost:5000/api/location/states/${formData.CountryId}`,
        );
        setStates(res.data.data);
      } catch (err) {
        console.log(err);
      } finally {
        setloading(false);
      }
    };

    fetchStates();
  }, [formData.CountryId]);
  
  // for cities
  useEffect(() => {
    if (!formData.stateId) return;

    const fetchcities = async () => {
      setcityloading(true);

      try {
          // await new Promise(resolve => setTimeout(resolve, 10000)); 
      
        const res = await axios.get(
          
          `http://localhost:5000/api/location/cities/${formData.stateId}`,
        );
        // console.log("fetching")
        setCities(res.data.data);

      } catch (err) {
        console.log(err);
      } finally {
        setcityloading(false);
      }
    };

    fetchcities();
  }, [formData.stateId]);

  const fetchCountries = async () => {
    try {
      const res = await axios.get(
        
        "http://localhost:5000/api/location/countries",
      );
      // console.log(res);
      setcountries(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Password will be handled by your backend logic automatically
    try{
      const token = localStorage.getItem("token")
      const res = await axios.post(
        "http://localhost:5000/api/admin/create-shop", formData,
        {
          headers:{
            Authorization:`Bearer ${token}`
          }
        }
      );
       setSuccessmsg(res.data.message);
      // setsuccessmsg(res.message.message)
      console.log(res.data.message);
      alert("Shopkeeper register")
          setFormData({
    shopName: "",
    ownerName: "",
    email: "",
    mobile: "",
    CountryId: "",
    stateId: "",
    cityId: "",
    Pincode: "",
    Address: "",
  });
  setStates([])
  setCities([])
    }catch(err){
      console.log(err);
       if (err.response && err.response.data && err.response.data.shoperr) {
    setErrorMsg(err.response.data.shoperr);
    

    setTimeout(() => setErrorMsg(""), 5000);
  } else {
    setErrorMsg("Something went wrong. Please try again.");
  }
      

    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card border-0 shadow-lg overflow-hidden">
            <div className="row g-0">
              {/* Left Branding Side */}
              <div className="col-md-4 bg-primary text-white d-flex flex-column justify-content-center p-5 text-center">
                <div className="mb-4">
                  <i className="bi bi-shield-lock-fill display-4"></i>
                </div>
                <h3 className="fw-bold">Secure Entry</h3>
                <p className="opacity-75 small">
                  System will auto-generate a secure password for this new
                  account.
                </p>
              </div>

              {/* Right Form Side */}
              <div className="col-md-8 bg-white p-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h4 className="fw-bold text-dark m-0">REGISTER SHOPKEEPER</h4>
                  <span className="badge bg-soft-primary text-primary border border-primary px-3">
                    New Account
                  </span>
                </div>
                {successmsg && (
  <div className="alert alert-success">
    {successmsg}
  </div>
)}
{errorMsg && (
  <div className="alert alert-warning border-0 shadow-sm d-flex align-items-center rounded-3" role="alert">
    <i className="bi bi-exclamation-triangle-fill me-2"></i>
    <div>
      {errorMsg}
    </div>
  </div>
)}

                <form onSubmit={handleSubmit}>
                  {/* Row 1: Names */}
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label className="form-label small fw-bold text-secondary">
                        Shop Name
                      </label>
                      <input
                      value={formData.shopName}
                        type="text"
                        name="shopName"
                        className="form-control form-control-lg fs-6"
                        placeholder="Shop Name"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small fw-bold text-secondary">
                        Owner Name
                      </label>
                      <input
                      value={formData.ownerName}
                        type="text"
                        name="ownerName"
                        className="form-control form-control-lg fs-6"
                        placeholder="Owner Name"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Row 2: Contact */}
                  <div className="row mb-3">
                    <div className="col-md-7">
                      <label className="form-label small fw-bold text-secondary">
                        Email Address
                      </label>
                      <input
                      value={formData.email}
                        type="email"
                        name="email"
                        className="form-control form-control-lg fs-6"
                        placeholder="Enter Email address.."
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-5">
                      <label className="form-label small fw-bold text-secondary">
                        Mobile No.
                      </label>
                      <input
                      value={formData.mobile}
                        type="tel"
                        name="mobile"
                        className="form-control form-control-lg fs-6"
                        placeholder="XXXXXXXXXXXX"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Row 3: Location Dropdowns */}
                  <div className="row mb-3">
                    <div className="col-md-4">
                      <label className="form-label small fw-bold text-secondary">
                        Country
                      </label>
                      <select
                        name="CountryId"
                        className="form-select form-control-lg fs-6"
                        onChange={handleChange}
                      >
                        <option value="">Select Country</option>
                        {countries.map((country) => (
                          <option key={country.id} value={country.id}>
                            {country.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-4">
                      <label className="form-label small fw-bold text-secondary">
                        State
                      </label>
                      <select
                        name="stateId"
                        className="form-select form-control-lg fs-6"
                        onChange={handleChange}
                        disabled={loading || states.length === 0} // Disable while loading
                      >
                        {/* Change the placeholder based on loading state */}
                        <option value="">
                          {loading ? "Loading states..." : "Select State"}
                        </option>

                        {!loading &&
                          states.map((state) => (
                            <option key={state.id} value={state.id}>
                              {state.name}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div className="col-md-4">
                      <label className="form-label small fw-bold text-secondary">
                        City
                      </label>
                      <select
                        name="cityId"
                        className="form-select form-control-lg fs-6" onChange={handleChange}
                       disabled={cityloading || cities.length===0}
                      >
                        <option value="">{cityloading ? "loading cities..." : "Select City"}</option>
                        {!cityloading && 
                        cities.map((city)=>(
                          <option key={city.id} value={city.id}>{city.name}</option>
                        ))
                        
                        }
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Pincode & Address */}
                  <div className="row mb-4">
                    <div className="col-md-4">
                      <label className="form-label small fw-bold text-secondary">
                        Pincode
                      </label>
                      <input
                      value={formData.Pincode}
                        type="number"
                        name="Pincode"
                        className="form-control form-control-lg fs-6"
                        placeholder="Area Pincode"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-8">
                      <label className="form-label small fw-bold text-secondary">
                        Full Address
                      </label>
                      <input
                      value={formData.Address}
                        type="text"
                        name="Address"
                        className="form-control form-control-lg fs-6"
                        placeholder="Enter Shop Address.."
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="d-grid mt-4">
                    <button
                      type="submit"
                      className="btn btn-dark btn-lg fw-bold shadow-sm"
                    >
                      Create Shopkeeper Profile
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterShopkeeper;
