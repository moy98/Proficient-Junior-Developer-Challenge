import React from 'react'
import ListBtn from './ListBtn'
import beds from'../assets/img/beds.svg'
const ComponentList = () => {
  return (
    <div className='App-list'>
      <section className='List-section' >
        <div className='List-card'>
        <img src={beds} className='card-img' />
        <h3>Beds</h3>
        </div>
        <ListBtn />
      </section>
    </div>
  )
}

export default ComponentList
