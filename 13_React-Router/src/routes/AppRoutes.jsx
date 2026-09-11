
import React from 'react'
import { Route, Routes } from 'react-router'
import Explore from '../pages/Explore'
import Discover from '../pages/Discover'
import Features from '../pages/Features'
import Home from '../pages/Home'
import About from '../pages/About'

const AppRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/explore" element={<Explore />}></Route>
            <Route path="/discover" element={<Discover />}></Route>
            <Route path="/features" element={<Features />}></Route>
            <Route path="/about" element={<About />}></Route>
        </Routes>
    </div>
  )
}

export default AppRoutes