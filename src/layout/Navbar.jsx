import { Menu } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [toggle, setToggle] = useState(false);


  return (
    <>
        <div className='navbar flex bg-linear-to-r from-blue-900 to-black p-4 text-white justify-between'>
            <div>Logo</div>
            <div className='md:block hidden'>
              <ul className='flex gap-10'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className='md:hidden block' onClick={() => setToggle(!toggle)}>
              <Menu />
            </div>
        </div>

        <div className={` ${toggle ? "block" : "hidden"}  mobile-navbar bg-linear-to-r from-blue-900 to-black text-white text-center`}>
          <p>Home</p>
          <p>About</p>
          <p>Services</p>
          <p>Contact</p>
        </div>
    </>
  )
}

export default Navbar
