import React from 'react'
import './skills.css'

const Skills = () => {
    return (
        <section id='skills'>
            <span className='skillTitle'>What I do</span>
            <span className='skillDesc'>I am a skilled and passionate web designer with experience in creating visiually appealing and User-friendly websites. I have a strong understanding of design and keen eye for detail.I'm proficient in HTML, CSS and Javascript.   </span>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src='./assets/ui-design.png' className='skillBarImg' alt='UI design' />
                    <div className='skillBarText'>
                        <h2>UI/UX Design</h2>
                        <p>This is a demo text that can be changed while making production ready website


                        </p>
                    </div>
                </div>

                <div className='skillBar'>
                    <img src='./assets/website-design.png' className='skillBarImg' alt='Website Design' />
                    <div className='skillBarText'>
                        <h2>Website-design</h2>
                        <p>This is a demo text that can be changed while making production ready website

                        </p>
                    </div>
                </div>

                <div className='skillBar'>
                    <img src='./assets/app-design.png' className='skillBarImg' alt='App design' />
                    <div className='skillBarText'>
                        <h2>App-Design</h2>
                        <p>This is a demo text that can be changed while making production ready website

                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills