import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider, Routes } from 'react-router-dom'
// General
import Home from './pages/General/Home'
import Layout from './components/Layout/Layout'
import AboutContent from './pages/General/About'
import ProtectedRoute from './pages/ProtectedRoute/ProtectedRoute'
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';


// Admin
import AdminLogin from './pages/ADMIN/Adminlogin'
import ShopLogin from './pages/Shopkeeper/Shopkeeper'
import ContactUs from './pages/General/Contact'
import AdminDashboard from './pages/ADMIN/AdminDashboard'
import AdminLayout from './components/AdminLayout/AdminLayout'
import AdminRegisterShopkeeper from './pages/ADMIN/AdminRegisterShopkeeper'

// Shopkeepr
import ShopDashboard from './pages/Shopkeeper/ShopkeeperDashboard'
import ShopkeeperLayout from './components/ShopkeeperLayout/ShopkeeperLayout'
import Shopkeeperaddproduct from './pages/Shopkeeper/Shopkeeperaddproduct'
import GenerateBillshopkeeper from './pages/Shopkeeper/GenerateBillshopkeeper'



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    
    <Route path="/" element={<Layout/>}>
    <Route path="/home" element={<Home/>}/>
    <Route path="/about-us" element={<AboutContent/>}/>
    <Route path="/contact-us" element={<ContactUs/>}/>
    <Route path="/admin-login" element={<AdminLogin/>}/>
    <Route path="/shop-login" element={<ShopLogin/>}/>
 
    </Route>


    <Route Route path="/admin" element={<AdminLayout/>}>
      <Route path ="dashboard" element={
        <ProtectedRoute allowedRole ="ADMIN">
        <AdminDashboard/>
        </ProtectedRoute>}/>
      <Route path ="register/shopkeeper" element={
        <ProtectedRoute>
        <AdminRegisterShopkeeper/>
        </ProtectedRoute>}/>
        </Route>

    <Route Route path="/yourshop" element={<ShopkeeperLayout/>}>
      <Route path ="dashboard" element={
        <ProtectedRoute allowedRole="SHOPKEEPER">
        <ShopDashboard/>
        </ProtectedRoute>}/>

      <Route path ="add-product" element={
        <ProtectedRoute allowedRole="SHOPKEEPER">
        <Shopkeeperaddproduct/>
        </ProtectedRoute>}/>

      <Route path ="generate-bill" element={
        <ProtectedRoute allowedRole="SHOPKEEPER">
        <GenerateBillshopkeeper/>
        </ProtectedRoute>}/>
      
        </Route>
  
    </>
  )
)

function App() {
 

  return <RouterProvider router={router}/>
}

export default App
