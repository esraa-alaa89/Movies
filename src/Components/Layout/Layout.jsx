import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer'

export function Layout( {userData , logOut} ) 
{
  return <>
    <Navbar userData = {userData} logOut = {logOut} />
    <div className='container'><Outlet/></div>
    <Footer/>
  </>
}
