import { NavLink } from 'react-router-dom'
import logo from '../../assets/CroppedARLLogo.png'
import '../../styles/navbar.css'

export default function Navbar() {
  return (
    <header className="arl-navbar">
      <div className="container">
        <div className="arl-logo">
          <img src={logo} alt="ARL logo" />
        </div>

        <nav className="arl-nav">
          <NavLink to="/" end className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink>
          <NavLink to="/calendar" className={({isActive}) => isActive ? 'active' : ''}>Calendar</NavLink>
          <NavLink to="/standings" className={({isActive}) => isActive ? 'active' : ''}>Standings</NavLink>
          <NavLink to="/drivers" className={({isActive}) => isActive ? 'active' : ''}>Drivers</NavLink>
          <NavLink to="/results" className={({isActive}) => isActive ? 'active' : ''}>Results</NavLink>
          <NavLink to="/news" className={({isActive}) => isActive ? 'active' : ''}>News</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>About</NavLink>
        </nav>
      </div>
    </header>
  )
}
