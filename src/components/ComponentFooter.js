import logo from '../assets/img/houseLogo.svg';

import React from 'react'

const ComponentFooter = () => {
  return (
    <div>
      <footer className='App-footer'>
        <section>
        <img src={logo} className="App-logo" alt="logo" />
        <p>It is a long established fact that a reader will be distracted by the readable content of a page whenters. </p>
        </section>

        <section>
          <div>
            <h2>About Us</h2>
          </div>
          <div>
            <ul>
            <li><a className='' href=''>About</a></li>
              <li><a className='' href=''>Privacy & Policy</a></li>
              <li><a className='' href=''>Terms & Conditions</a></li>
              <li><a className='' href=''>Faq</a></li>
            </ul>    
          </div>  
        </section>   
        
        <section>
          <div>
            <h2>Navigate</h2>
          </div>
          <div>
            <ul>
              <li><a className='' href=''>How We Work</a></li>
              <li><a className='' href=''>Services</a></li>
              <li><a className='' href=''>Faq</a></li>
              <li><a className='' href=''>Contact</a></li>
              <li><a className='' href=''>Free Quote</a></li>
            </ul>    
          </div>  
        </section> 

        <section>
          <div>
            <h2>Contact  Us</h2>
          </div>
          <div>
            <ul>
              <li className=''>Ricardo Margain 444</li>
              <li className=''>Call: +52 81 1234 5678</li>
              <li className=''>Email: info@challenge.com</li>
            </ul>    
          </div>  
        </section> 
      </footer>
    </div>
  )
}

export default ComponentFooter
