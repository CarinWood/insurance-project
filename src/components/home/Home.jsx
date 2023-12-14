/* eslint-disable react/no-unescaped-entities */
import './home.css'
import family from '../../assets/img/family.png'
import { Nav } from '../navbar/Nav'
import { Link } from 'react-scroll'
import { RxHamburgerMenu } from "react-icons/rx";
import { Menu } from '../menu/Menu';
import { useState } from 'react';

export const Home = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const foldMenu = () => {
      setToggleMenu(!toggleMenu)
      console.log(toggleMenu)
  }

  return (
    <div className="home" id="home">
      <div  className="hamburger-wrapper">
        <RxHamburgerMenu className={toggleMenu ?'hamburger-menu white': 'hamburger-menu'} onClick={()=> foldMenu()}/>
      </div>
 
    <Menu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}/>
 
    <Nav/>
        <section>
        <h1>We've got you Covered.</h1>
        <p className='home-text'>
          Together we keep each other safe at home or at work. By paying a tiny
          fee a day, you are fully insured all day long. You get
          it all for as little as <span>$0.4 per pay</span>
        </p>
        <div className='btn-area'>
        <button className='join-btn'>JOIN NOW</button>
        </div>
        <img src={family} alt="family" className='familiy-pic'/>
      </section>
      <aside>
        <article className='learn-more'>
            <p>What do we have to offer?</p>
            <Link to="steps" spy={true} smooth={true} duration={500}><h2>Learn more</h2></Link>
        </article>
        <article className='join'>
            <p>What are you waiting for?</p>
            <h2>Join today</h2>
        </article>
      </aside>
    </div>
  );
};
