import React from 'react'
import "./Section3.css"

const Section3 = () => {
  return (
    <div className='section3__div'>
        <div className='shekil__div'>
            <img src="https://htmldemo.net/pustok/pustok/image/bg-images/promo-banner-mid.jpg" alt="" />
            <div className='yazi__div'>
                <h1>BUT 3. GET FREE 1.</h1>
                <p>50% off for selected products in Pustok</p>
                <button>See More</button>
            </div>
        </div>
        <div className='shekil__div'>
            <img src="https://htmldemo.net/pustok/pustok/image/bg-images/promo-banner-small.jpg" alt="" />
            <div className='yazi__div2'>
                <p>$26.00</p>
            <h2>PRAISE FOR <br /> THE NIGHT CHILD</h2>
                <button>Buy Now</button>
            </div>
        </div>
    </div>
  )
}

export default Section3