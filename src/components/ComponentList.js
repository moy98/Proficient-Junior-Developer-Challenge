import React from 'react'
import Dataprovider from '../assets/context/Dataprovider'
const ComponentList = () => {
  return (

    <div>
      <section className='App-title'>
      <h2 className='Title-question'>What items to store?</h2>
      <span className='Title-text'>Select which items you wish to store before moving to your new home. We’ll keep ’em safe!</span>
      </section>
      <Dataprovider/>
    </div>
  )

}

export default ComponentList
