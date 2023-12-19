import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

import { Autoplay, Pagination } from 'swiper/modules';
const Slider = () => {
  return (
    <Swiper
      pagination={true}
      modules={[Pagination, Autoplay]}
      className="swiper"
      autoplay={{
        delay: 1500,
        disableOnInteraction: false
      }}>
      <div>
        asdasd
      </div>
      <SwiperSlide className='swiper-slide '><img style={{ height: '400px', width: '50%' }} src="https://htmldemo.net/pustok/pustok/image/bg-images/home-slider-2-ai.png" alt="" />
        <div className='text'>
          <h1>
          H.G.WELLS <br />
          De Vengeance
          </h1>
          <p>
            Cover Up Front Of Books And <br />
             Leave Summary
          </p> <br /><br />
          <button className='text_button'>
            $78.09 - Order Now !
          </button>
        </div>

      </SwiperSlide>
      <SwiperSlide className='swiper-slide2'>
        <div className='text2'>
          <h1>
          J.D.KURTNESS <br />
          De Vengeance
          </h1>
          <p>
            Cover Up Front Of Books And <br />
             Leave Summary
          </p> <br /><br />
          <button className='text_button'>
            $78.09 - Order Now !
          </button>
        </div>
        <img style={{ height: '400px', width: '50%' }} src="https://htmldemo.net/pustok/pustok/image/bg-images/home-slider-1-ai.png" alt="" /></SwiperSlide>
    </Swiper>
  )
}

export default Slider