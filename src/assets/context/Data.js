import React from 'react'

import ListBtn from '../../components/ListBtn'

const Data = (props) => {
    return (
        <div className='App-list'>
            <section className='List-section' >
                <div className='List-card'>
                    <img src={props.image} className='card-img' />
                    <h3>{props.title}</h3>
                </div>
                <ListBtn />
            </section>
        </div>
    )
}

export default Data
