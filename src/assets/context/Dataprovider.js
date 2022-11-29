
import React, { useState } from 'react'
import Data from './Data'


const Dataprovider = () => {

    const [data,setdata] = useState([
        {
            id: 1,
            title: "Beds",
            image: require('../img/beds.png'),
            meters: 1.2,
            quantity: 0,
        },

        {
            id: 2,
            title: "Refrigerator",
            image: require('../img/refrigerator.png'),
            meters: 1,
            quantity: 0,
        },
        {
            id: 3,
            title: "Furniture",
            image: require('../img/furniture.png'),
            meters: 0.5,
            quantity: 0,
        },
        {
            id: 4,
            title: "Oven",
            image: require('../img/oven.png'),
            meters: 0.6,
            quantity: 0,
        },
        {
            id: 5,
            title: "Sofa",
            image: require('../img/sofa.png'),
            meters: 1.5,
            quantity: 0,
        },
        {
            id: 6,
            title: "Tv",
            image: require('../img/tv.png'),
            meters: 0.25,
            quantity: 0,
        },
        {
            id: 7,
            title: "Washer-dryer",
            image: require('../img/washer-dryer.png'),
            meters: 0.5,
            quantity: 0,
        },
        {
            id: 8,
            title: "Dining",
            image: require('../img/dining.png'),
            meters: 2,
            quantity: 0,
        },
        {
            id: 9,
            title: "Desk",
            image: require('../img/desk.png'),
            meters: 0.75,
            quantity: 0,
        },
        {
            id: 10,
            title: "Wardrobe",
            image: require('../img/wardrobe.png'),
            meters: 3.2,
            quantity: 0,
        }
    ])

    return (
        <div className='row'>
            {data.map((data) => {
                return (
                    <Data key={data.id} title={data.title} image={data.image} quantity={data.quantity} id={data.id} meters={data.meters}/>
                )
            })}
        </div>
    )
}

export default Dataprovider
