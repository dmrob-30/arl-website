import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/navbar'
import Home from './pages/Home'
import Calendar from './pages/Calendar'
import Drivers from './pages/Drivers'
import Results from './pages/Results'
import Standings from './pages/Standings'
import News from './pages/News'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/results" element={<Results />} />
        <Route path="/standings" element={<Standings />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
