import React from 'react'
import "./Card.css"

const Card = ({ item }) => {
    return (
        <div className='card__div'>
            <div className='div__img'>
                <h3 className='name_h'>{item.name}</h3>
                <img src={item.image} alt="" style={{width:'150px', height:'200px'}} />
            </div>

            <div className='price__div'>
                <p className='new__price'>${item.price}</p>
                <p className='p'><del>$1000</del></p>
                <button className='card'>20%</button>
            </div>
        </div>
    )
}

export default Card