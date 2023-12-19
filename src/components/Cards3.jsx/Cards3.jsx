import React from 'react'
import "./Cards3.css"
import { useSelector } from 'react-redux'
import Card from '../Card/Card'


const Cards3 = () => {
    const { data, loading } = useSelector(state => state.data)
    return (
        <div>
            <div>
                <div className='cards'>
                    {
                        data.slice(0, 5).map((item, index) => {
                            return <Card item={item} key={index} />
                        })
                    },

                </div>

            </div>
        </div>
    )
}

export default Cards3