import React from 'react'
import "./Card2.css"


const Card2 = ({ item }) => {
    return (


        <div className='card2'>

            <div className='cardlar'>
                <h3 >{item?.name}</h3>
                <img src={item?.image} alt="" />
            </div>
            <div className='qiymet'>
                <p className=''>${item?.price}</p>
                <p className=''><del>$1000</del></p>
                <button className=''>20%</button>
            </div>
            <div className='cartlar'>
                <div>
                    <p>00</p>
                    <p>Days</p>
                </div>
                <div>
                    <p>00</p>
                    <p>Hours</p>
                </div>
                <div>
                    <p>00</p>
                    <p>Mins</p>
                </div>
                <div>
                    <p>00</p>
                    <p>Secs</p>
                </div>
            </div>

        </div>

    )
}

export default Card2