import React from 'react'
import "./Section.css"

const Section = () => {
    return (
        <div>
            <div className='content__div'>
                <div className='section__div'>
                    <div className='icon__div'>
                        <i class="fa-solid fa-truck"></i>
                    </div>
                    <div>
                        <h3>Free Shipping Item</h3>
                        <p>Orders over $500</p>
                    </div>
                </div>
                <div className='section__div'>
                    <div className='icon__div'>
                        <i class="fa-solid fa-rotate-right"></i>
                    </div>
                    <div>
                        <h3>Money Back Guarantee</h3>
                        <p>100% money back</p>
                    </div>
                </div>
                <div className='section__div'>
                    <div className='icon__div'>
                        <i class="fa-solid fa-piggy-bank"></i>
                    </div>
                    <div>
                        <h3>Cash On Delivery</h3>
                        <p>Lorem ipsum dolor amet</p>
                    </div>
                </div>
                <div className='section__div'>
                    <div className='icon__div'>
                        <i class="fa-solid fa-life-ring"></i>
                    </div>
                    <div>
                        <h3>Help & Support</h3>
                        <p>Call us : + 0123.4567.89</p>
                    </div>
                </div>

            </div>
            <div className='content__div2'>
                <div><img src="https://htmldemo.net/pustok/pustok/image/bg-images/promo-banner-with-text.jpg" alt="" /></div>
                <div><img src="https://htmldemo.net/pustok/pustok/image/bg-images/promo-banner-with-text-2.jpg" alt="" /></div>
            </div>
        </div>
    )
}

export default Section