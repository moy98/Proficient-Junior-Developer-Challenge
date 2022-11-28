
import React, {useState} from 'react'
import Data from './Data'


const Dataprovider = () => {

    const [id] = useState([
        {
            id: 1,
            title: "Beds",
            image: require('../img/beds.png'),
            meters: 1.2
        },

        {
            id: 2,
            title: "Refrigerator",
            image: require('../img/refrigerator.png'),
            meters: 2,
        },
        {
            id: 3,
            title: "Furniture",
            image: require('../img/furniture.png'),
            meters: 0.5,
        },
        {
            id: 4,
            title: "Oven",
            image: require('../img/oven.png'),
            meters: 0.6,
        },
        {
            id: 5,
            title: "Sofa",
            image: require('../img/sofa.png'),
            meters: 1.5,
        },
        {
            id: 6,
            title: "Tv",
            image: require('../img/tv.png'),
            meters: 0.25,
        },
        {
            id: 7,
            title: "Washer-dryer",
            image: require('../img/washer-dryer.png'),
            meters: 0.5,
        },
        {
            id: 8,
            title: "Dining",
            image: require('../img/dining.png'),
            meters: 2,
        },
        {
            id: 9,
            title: "Desk",
            image: require('../img/desk.png') ,
            meters: 0.75,
        },
        {
            id: 10,
            title: "Wardrobe",
            image: require('../img/wardrobe.png'),
            meters: 3.2,
        }
    ])

    return (
        <div>
{id.map((id) =>{
    return (
        <Data title={id.title} image = {id.image}/>
    )
})}
        </div>
    )
}

export default Dataprovider
