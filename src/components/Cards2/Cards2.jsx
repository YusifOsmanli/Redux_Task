import React from 'react'
import "./Cards2.css"
import { useSelector } from 'react-redux'
import Card2 from '../Card2/Card2'
import { Swiper,SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules'


const Cards2 = () => {
    const { data, loading } = useSelector(state => state.data)
  return (
    <div className=''>
        <div className='card__header'>
          <h3>Deal of the day up to 20% off Special offer</h3>
        </div>
        <div className='cards2'>
         
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {
              data.map((item, index) => {
                return <SwiperSlide  className="mySlide"> <Card2 item={item} key={index} /></SwiperSlide>
              })
            }
          </Swiper>
        </div>

      </div>
  )
}

export default Cards2