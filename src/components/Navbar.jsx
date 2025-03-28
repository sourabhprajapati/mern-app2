import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div>
      <header>
        <div className="container">
            <div className="logo-brand">
                <NavLink to='/'>Vsync Technology</NavLink>
            </div>
            <nav>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                    <li><NavLink to='/Service'>Service</NavLink></li>
                    <li><NavLink to='/Register'>Register</NavLink></li>
                    <li><NavLink to='/Login'>Login</NavLink></li>

                </ul>
            </nav>
        </div>
      </header>
    </div>
  )
}

export default Navbar
