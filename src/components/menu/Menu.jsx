import './menu.css'


// eslint-disable-next-line react/prop-types
export const Menu = ({toggleMenu}) => {
  return (
    <div className={toggleMenu ? 'menu-container active' : 'menu-container'}>
       

        <div className='veil'></div>

        <ul className='menu-items'>
            <li>Home</li>
            <li>Our offer</li>
            <li>Why us</li>
            <li>Contact</li>
        </ul>
   
    </div>
  )
}
