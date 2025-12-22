import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div className='navbar flex bg-linear-to-r from-blue-900 to-black p-4 text-white justify-between'>
            <div>Logo</div>
            <div>
              <ul className='flex gap-10'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar
