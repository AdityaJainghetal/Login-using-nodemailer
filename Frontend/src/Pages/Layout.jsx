import React from 'react'
import Topmenu from './Topmenu'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  return (
    <>
    <Topmenu/>
    <br />
    <Outlet/>
    <br />
    <Footer/>
    </>
  )
}

export default Layout