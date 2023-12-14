import './footer.css'
import { RiArrowUpSFill } from "react-icons/ri";
import { Link } from 'react-scroll'

export const Footer = () => {
  return (
    <footer>
        <Link to="home" spy={true} smooth={true} duration={500} offset={100}><RiArrowUpSFill className='icon'/></Link>
        <Link to="home" spy={true} smooth={true} duration={500} offset={100}>Take me up again!</Link>
    </footer>
  )
}
