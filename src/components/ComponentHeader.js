import React from 'react'
import logo from '../assets/img/houseLogo.svg';

const ComponentHeader = () => {
  return (
    <div>
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <nav>
                <a className='' href=''>how we work</a>
                <a className='' href=''> Services</a>
                <a className='' href=''>Free Quote</a>
                <a className='' href=''>contact</a>
            </nav>
            
        </header>
    </div>
  )
}

export default ComponentHeader
