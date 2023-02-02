import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

function Navbar() {

    return (
        <div className="container">
            <ul className='nav'>
                <li > <NavLink className='liclass' to="/">Home</NavLink></li>
                <li > <NavLink className='liclass' to="/Search">Search</NavLink></li>
                <li > <NavLink className='liclass' to="/About">About</NavLink></li>
                <li > <NavLink className='liclass' to="/Contact">Contact</NavLink></li>
            </ul>
            <NavLink className='apod' to="/">AstroPIC</NavLink>
        </div>
    )
}

export default Navbar