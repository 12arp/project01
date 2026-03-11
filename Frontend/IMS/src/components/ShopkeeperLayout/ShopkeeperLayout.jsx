import React from 'react'

import ShopkeeperNavbar from "./ShopkeeperNavbar"


import { Outlet } from 'react-router-dom';


function Layout() {
  return (
    <>
   <ShopkeeperNavbar/>
    <Outlet/>

    
    
    </>
   
  )
}

export default Layout