import React, { useRef } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_8ub51yk', 'template_9rpgu2h', form.current, 'dEnJ5Hc_TKsELIkP9')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    
    <section  id='contactPage'>
        <div id='clients'>
            <h1 className='contactPageTitle'>My Client</h1>
            <p className='clientDesc'>I have had the opportunity to work with a diverse group of companies. Some of the notable companies I have worked with includes</p>
            <div className='clientImgs'>
                <img src='./assets/walmart.png' alt='' className='clientImg'/>
                <img src='./assets/facebook.png' alt='' className='clientImg'/>

                <img src='./assets/microsoft.png' alt='' className='clientImg'/>

                <img src='./assets/adobe.png' alt='' className='clientImg'/>

            </div>
        </div>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact me</h1>
            <span className='contactDesc'>Please fill out the form to discuss any work opportunities.</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your name' name='your_name'/>
                <input type='email' className='email' placeholder='Your email' name='your_email'/>
                <textarea className='msg'name='message' rows='5' placeholder='Your message' ></textarea>
                <button className='submitBtn' type='submit' value='send'  >Submit</button>
                <div className='links'>
                    <img src='./assets/facebook-icon.png'className='link' alt='fb icon'/>
                    <img src='./assets/twitter.png'className='link' alt='twiter icon'/>
                    <img src='./assets/youtube.png'className='link' alt='yt icon'/>
                    <img src='./assets/instagram.png'className='link' alt='ig icon'/>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact