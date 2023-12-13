import './header.css'
import man from '../../assets/img/man-baby.png'

export const Header = () => {
  return (
    <header>
        <h1>Oh, hello there!</h1>
        <img className='man-baby-pic' src={man} alt="man and baby" />
    </header>
  )
}
