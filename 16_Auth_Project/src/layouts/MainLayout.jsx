import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#08090b] text-white">
        <Navbar />
        <main className="ml-64 min-h-screen">
          <Outlet/>
        </main>
    </div>
  )
}

export default MainLayout