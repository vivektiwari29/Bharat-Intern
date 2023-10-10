import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-scroll';

const Navbar = () => { 
  const [showMenu, setShowMenu]= useState(false);
  return (
        <nav className='navbar'>
            <img  src='./assets/logo.png' alt='' className='logo '/>
            <div className='desktopMenu'>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>

                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Portfolio</Link>

                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Clients</Link>

            </div>
            <button className='desktopMenuBtn' onClick={()=>{
              document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>
                <img src='./assets/contact.png' alt='' className='desktopMenuImg'/>Contact me</button> 


                <img  src='./assets/menu.png' alt='Menu' className='mobMenu'  onClick={()=>setShowMenu(!showMenu)}/>
            <div className='navMenu' style={{ display : showMenu? 'flex' : 'none'}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>About</Link>

                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Portfolio</Link>

                <Link activeClass='active' to='client' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Clients</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Contact</Link>

            </div>
           
        </nav>
    
  )
}

export default Navbar