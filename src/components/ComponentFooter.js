import logo from '../assets/img/houseLogo.svg';
import whatsApp from '../assets/img/whatsApp_logo.svg';
import twitter from '../assets/img/twitter_logo.svg';
import facebook from '../assets/img/facebook_logo.svg';
import instagram from '../assets/img/instagram_logo.svg';
import circle from '../assets/img/circle.svg'

import React from 'react'

const ComponentFooter = () => {
  return (
    <div>
      <footer className='App-footer'>
        <section className='Footer-section'>
          <img src={logo} className="Footer-logo" alt="logo" />
          <p className='Logo-text'>It is a long established fact that a reader will be distracted by the readable content of a page whenters. </p>

          <div>
            <a className='Footer-icon' href='https://twitter.com/'><img src={twitter} /></a>
            <a className='Footer-icon' href='https://www.facebook.com/'><img src={facebook} /></a>
            <a className='Footer-icon' href='https://www.instagram.com/'><img src={instagram} /></a>
          </div>
        </section>

        <section className='Footer-section'>

          <h2>About Us</h2>

          <div>
            <ul>
              <li><a className='Footer-text' href=''>About</a></li>
              <li><a className='Footer-text' href=''>Privacy & Policy</a></li>
              <li><a className='Footer-text' href=''>Terms & Conditions</a></li>
              <li><a className='Footer-text' href=''>Faq</a></li>
            </ul>
          </div>


        </section>

        <section className='Footer-section'>
          <h2>Navigate</h2>


          <ul>
            <li><a className='Footer-text' href=''>How We Work</a></li>
            <li><a className='Footer-text' href=''>Services</a></li>
            <li><a className='Footer-text' href=''>Faq</a></li>
            <li><a className='Footer-text' href=''>Contact</a></li>
            <li><a className='Footer-text' href=''>Free Quote</a></li>
          </ul>


        </section>

        <section className='Footer-section'>

          <h2>Contact  Us</h2>
          <address>
            <p>Ricardo Margain 444 </p>
            <a className='Footer-text' href='tel:+528112345678'> Call: +52 81 1234 5678</a>
            <a className='Footer-text' href='mailto:info@challenge.com'>Email: info@challenge.com</a>

          </address>

          <a href='https://github.com/moy98'> <img src={whatsApp} /></a>
        </section>
      </footer>
    </div>
  )
}

export default ComponentFooter
