import { Link } from 'react-router-dom'
import '../css/NavBar.css'
import logo from '../Assets/logo.jpeg'
export default function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="navbar-logo">
        <img src={logo} alt="Logo" className="logo-image" />
      </Link>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/Menu">Menu</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact Us</Link>
      </div>

      <Link to="/OrderNow" className="navbar-order">
        Order Now
      </Link>

    </nav>
  )
}