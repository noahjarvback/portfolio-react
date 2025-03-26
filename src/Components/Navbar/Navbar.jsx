import React from 'react'
import './Navbar.css' 
//import logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <h1>Noah</h1>
        <ul className="nav-menu">
            <li>Hem</li>
            <li>Om mig</li>
            <li>Kompetenser</li>
            <li>Portfolio</li>
            <li>Kontaktauppgifter</li>
        </ul>
        <div className="nav-connect">Kontakta mig</div>
    </div>
  )
}

export default Navbar