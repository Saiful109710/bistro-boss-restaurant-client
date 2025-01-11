import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../pages/shared/Footer/Footer'
import Navbar from '../pages/shared/Navbar/Navbar'

const MainLayout = () => {
  const location = useLocation()
  const noNavbarFooter = location.pathname.includes('login')
  return (
    <div>
        {noNavbarFooter || <Navbar></Navbar>}
        <Outlet></Outlet>
        {noNavbarFooter || <Footer></Footer>}
    </div>
  )
}

export default MainLayout
