import React from 'react'
import logo from '../assets/img/houseLogo.svg';

const ComponentHeader = () => {
  return (
    <div className='containerHeader'>
        <header className="App-header">
        <img src={logo} className="Header-logo" alt="logo" />
            <nav className='Header-nav'>

                <a className='HeaderItem' href=''>How We Work</a>
                <a className='HeaderItem' href=''> Services</a>
                <a className='HeaderItem' href=''>Free Quote</a>
                <a className='HeaderItem' href=''>Contact</a>
            </nav>
            
        </header>
    </div>
  )
}

export default ComponentHeader
