import React from 'react'
import './works.css'
const Works = () => {
  return (
    <section id='works'>
       <h2 className='worksTitle'>My Portfolio</h2>
       <span className='worksDesc'>I take pride in paying attentionto the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create strong online presence</span>
        <div className='worksImgs'>
            <img src='./assets/portfolio-1.png' alt='' className='worksImg'/>
            <img src='./assets/portfolio-2.png' alt='' className='worksImg'/>
            <img src='./assets/portfolio-3.png' alt='' className='worksImg'/>
            <img src='./assets/portfolio-4.png' alt='' className='worksImg'/>
            <img src='./assets/portfolio-5.png' alt='' className='worksImg'/>
            <img src='./assets/portfolio-6.png' alt='' className='worksImg'/>
        </div>
        <button className='worksBtn'>See more</button>
    </section>
  )
}

export default Works