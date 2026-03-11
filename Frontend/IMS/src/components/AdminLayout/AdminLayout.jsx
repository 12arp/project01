import React from 'react'

import AdminNavbar from './AdminNavbar'


import { Outlet } from 'react-router-dom';


function Layout() {
  return (
    <>
   <AdminNavbar/>
    <Outlet/>

    
    
    </>
   
  )
}

export default Layout