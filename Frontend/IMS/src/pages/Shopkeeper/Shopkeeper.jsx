import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, InputGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from "axios"
import {jwtDecode} from "jwt-decode"

export default function ShopLogin() {
   const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[loading,setloading]=useState(false)
    const [message,setErrorMsg]=useState("")
    
  
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setloading(true)
    setErrorMsg("")
    // if(!email) return alert("Email field required")
    // if(!password) return  alert("Password field required")
    
    try{
      
      const res = await axios.post("http://localhost:5000/api/login",{
        email:email,
        password:password
      })
      console.log(res.data)
      const token = res.data.token;
      localStorage.setItem("token",token);
       localStorage.setItem("user", JSON.stringify(res.data));
      const decode = jwtDecode(token)
      // console.log(decode.role)
      //  navigate("/admin-dashboard")
      if(decode.role === "SHOPKEEPER"){
        // console.log(decode.role)
        navigate("/yourshop/dashboard")
      }else{
        localStorage.removeItem("token");
        return
      }

    }catch(err){
       const message = err.response?.data?.message || "Something went wrong";
       setErrorMsg(message); 
        console.log(message);

    }finally{
      setloading(false)
    }

   
    // navigate('/admin/dashboard'); 
  };

  return (
    <div className="bg-light min-vh-100 d-flex align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={4}>
            
            {/* Brand Header */}
            <div className="text-center mb-4">
              <Link to="/" className="text-decoration-none text-dark">
                <h2 className="fw-bold">Shopkeeper<span className="text-indigo" style={{color: '#6610f2'}}>CRM</span></h2>
              </Link>
              <p className="text-muted">Shopkeeper Portal</p>
            </div>

            <Card className="border-0 shadow-sm p-4 rounded-4">
              <Card.Body>
                <h4 className="fw-bold mb-4 text-center">Shop Sign In</h4>
                
                <Form onSubmit={handleLogin}>
                  {/* Shop ID or Email */}
                  {message && (
        <div className="alert alert-danger py-2" role="alert">
            {message}
        </div>
    )}
                  <Form.Group className="mb-3" controlId="shopId">
                    <Form.Label className="small fw-semibold text-secondary">Shop ID / Email</Form.Label>
                    <InputGroup>
                      <InputGroup.Text className="bg-white border-end-0 text-muted">
                        <i className="bi bi-shop"></i>
                      </InputGroup.Text>
                      <Form.Control
                        type="text"
                        placeholder="Enter your Shop ID"
                        className="border-start-0 ps-0"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </InputGroup>
                  </Form.Group>

                  {/* Password */}
                  <Form.Group className="mb-3" controlId="shopPassword">
                    <Form.Label className="small fw-semibold text-secondary">Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text className="bg-white border-end-0 text-muted">
                        <i className="bi bi-shield-lock"></i>
                      </InputGroup.Text>
                      <Form.Control
                        type="password"
                        placeholder="••••••••"
                        className="border-start-0 ps-0"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </InputGroup>
                  </Form.Group>

                  {/* Login Button - Using a different color for Shopkeepers */}
                  <Button 
                    style={{ backgroundColor: '#6610f2', border: 'none' }} 
                    type="submit" 
                    className="w-100 py-2 fw-bold rounded-3 mb-3 mt-2"
                  >
                     {loading ? (
    <>
      <span 
        className="spinner-border spinner-border-sm me-2" 
        role="status" 
        aria-hidden="true"
      ></span>
      Logging in...
    </>
  ) : (
    "Sign In"
  )}
                    Enter Shop Dashboard
                  </Button>
                </Form>

                <div className="text-center mt-2">
                  <p className="small text-muted mb-0">
                    Need help? <Link to="/support" className="text-decoration-none">Contact Admin</Link>
                  </p>
                </div>
              </Card.Body>
            </Card>
            
            <div className="text-center mt-4">
              <Link to="/admin/login" className="text-muted small text-decoration-none">
                Are you an Admin? <strong>Login here</strong>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
