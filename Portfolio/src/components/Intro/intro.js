import React from 'react'
import './intro.css'
import { Link } from 'react-scroll'
const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Vivek</span><br/> Website Designer</span>
            <p className='introPara'>I am a skilled web designer with experience in creating <br/>visiually appealing and user friendly Website</p>
            <Link><button className='btn'><img src='./assets/hireme.png' alt='' className='btnImg'/>Hire me</button></Link>
        </div>
        <img src='./assets/image2.png' alt='Profile' className='bg'/>
    </section>
  )
}

export default Intro