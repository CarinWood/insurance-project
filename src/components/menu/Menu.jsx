import './menu.css'
import { Link } from 'react-scroll'
import {Link as Routerlink} from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export const Menu = ({toggleMenu, setToggleMenu}) => {

  const handleClick = () => {
    setToggleMenu(!toggleMenu)
  }

  return (
    <div className={toggleMenu ? 'menu-container active' : 'menu-container'}>

        <div className='veil'></div>

        <ul className='menu-items'>
            <Link to="home" spy={true} smooth={true} duration={500} onClick={handleClick}><li>Home</li></Link>
            <Link to="offer" spy={true} smooth={true} duration={500} offset={20} onClick={handleClick}><li>Our offer</li></Link>
            <Link to="about" spy={true} smooth={true} duration={500} offset={120} onClick={handleClick}><li>About us</li></Link>
            <Routerlink to="/contact" onClick={handleClick}><li>Contact</li></Routerlink>
        </ul>
   
    </div>
  )
}
