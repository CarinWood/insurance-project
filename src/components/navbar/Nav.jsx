import { Link } from 'react-router-dom'

import './nav.css'


export const Nav = () => {
 
  return (
    <nav>
        <a href="/" className='nav-item'>Home</a>
        <a href="#" className='nav-item'>Our offer</a>
        <a href="#" className='nav-item'>Why us</a>
        <Link to="/contact" className='nav-item'>Contact</Link>
    </nav>
  )
}
