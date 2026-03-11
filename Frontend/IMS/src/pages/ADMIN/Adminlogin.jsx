import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, InputGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import {jwtDecode} from "jwt-decode"
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from 'axios';



export default function AdminLogin() {
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
      if(decode.role === "ADMIN"){
        // console.log(decode.role)
        navigate("/admin/dashboard")
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
            {/* Logo / Brand Name */}
            <div className="text-center mb-4">
              <Link to="/" className="text-decoration-none text-dark">
                <h2 className="fw-bold">Shopkeeper<span className="text-primary">CRM</span></h2>
              </Link>
              <p className="text-muted">Administrator Access</p>
            </div>

            <Card className="border-0 shadow-sm p-4 rounded-4">
              <Card.Body>
                <h4 className="fw-bold mb-4 text-center">Login</h4>
                
                <Form onSubmit={handleLogin}>
                   {/* 3. Conditional rendering: only shows if errorMsg is not empty */}
    {message && (
        <div className="alert alert-danger py-2" role="alert">
            {message}
        </div>
    )}
                  {/* Email Field */}
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="small fw-semibold text-secondary">Email Address</Form.Label>
                    <InputGroup>
                      <InputGroup.Text className="bg-white border-end-0 text-muted">
                        <i className="bi bi-envelope"></i>
                      </InputGroup.Text>
                      <Form.Control
                        type="email"
                        placeholder="admin@example.com"
                        className="border-start-0 ps-0"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </InputGroup>
                  </Form.Group>

                  {/* Password Field */}
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="small fw-semibold text-secondary">Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text className="bg-white border-end-0 text-muted">
                        <i className="bi bi-lock"></i>
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

                  {/* Options */}
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <Form.Check type="checkbox" label="Remember me" className="small text-muted" />
                    <Link to="/forgot-password" style={{ fontSize: '0.85rem' }} className="text-decoration-none">
                      Forgot Password?
                    </Link>
                  </div>

                  {/* Login Button */}
                  <Button variant="primary" disabled={loading} type="submit" className="w-100 py-2 fw-bold rounded-3 mb-3">
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

                    
                  </Button>
                </Form>

                <div className="text-center">
                  <p className="small text-muted mb-0">
                    Not an admin? <Link to="/shop-login" className="text-decoration-none">Shop Login</Link>
                  </p>
                </div>
              </Card.Body>
            </Card>
            
            {/* Simple Footer */}
            <div className="text-center mt-4">
              <Link to="/" className="text-muted small text-decoration-none">
                <i className="bi bi-arrow-left me-1"></i> Back to Home
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
