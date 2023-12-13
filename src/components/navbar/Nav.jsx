import { Link } from 'react-router-dom'
import './nav.css'


export const Nav = () => {
 
  return (
    <nav>
        <a href="#home"><p className='nav-item'>Home</p></a>
        <a href="#"><p className='nav-item'>Our offer</p></a>
        <a href="#"><p className='nav-item'>Why us</p></a>
        <Link to="/contact"><a href="#"><p className='nav-item'>Contact</p></a></Link>
    </nav>
  )
}
