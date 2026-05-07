import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar' // match real filename/casing
import Home from './pages/Home'
import Calendar from './pages/Calendar'
import Standings from './pages/Standings'
import Drivers from './pages/Drivers'
import Results from './pages/Results'
import News from './pages/News'
import About from './pages/About'
import Footer from './components/layout/Footer'

export default function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/standings" element={<Standings />} />
                    <Route path="/drivers" element={<Drivers />} />
                    <Route path="/results" element={<Results />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    )
}
