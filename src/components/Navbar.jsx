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
                    <li><NavLink to='/contact'>Contact</NavLink></li>  {/* Fixed: lowercase */}
                    <li><NavLink to='/service'>Service</NavLink></li>  {/* Fixed: lowercase */}
                    <li><NavLink to='/register'>Register</NavLink></li>  {/* Fixed: lowercase */}
                    <li><NavLink to='/login'>Login</NavLink></li>  {/* Fixed: lowercase */}
                </ul>
            </nav>
        </div>
      </header>
    </div>
  )
}

export default Navbar