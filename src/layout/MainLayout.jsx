import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../pages/shared/Footer/Footer'
import Navbar from '../pages/shared/Navbar/Navbar'

const MainLayout = () => {
  const location = useLocation()
  console.log(location)
  const noNavbarFooter = location.pathname.includes('login') || location.pathname.includes('register')
  return (
    <div>
        {noNavbarFooter || <Navbar></Navbar>}
        <Outlet></Outlet>
        {noNavbarFooter || <Footer></Footer>}
    </div>
  )
}

export default MainLayout
