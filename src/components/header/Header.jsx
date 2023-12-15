import './header.css'
import man from '../../assets/img/man-baby.png'
import { Nav } from '../navbar/Nav'

export const Header = () => {
  return (
    <header>
        <h1 className='header-text'>Oh, hello there!</h1>
        <img className='man-baby-pic' src={man} alt="man and baby" />
        <Nav/>
    </header>
  )
}
