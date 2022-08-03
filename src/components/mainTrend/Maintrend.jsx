import React from 'react'
import './maintrend.css'
import alex from '../../Images/alex.jpg'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../../node_modules/swiper/swiper.min.css";

// import required modules
import {Navigation, Pagination } from "swiper";

const Maintrend = () => {
  return (
    <section id="maintrend">
        <h1 className="maintrend-title">Trending</h1>
        <Swiper 
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="swiper-centre"

        breakpoints={{
            // when window width is >= 640px
            600: {
              width: 600,
              slidesPerView: 2,
            },
            // when window width is >= 768px
            1024: {
              width: 1024,
              slidesPerView: 2.2,
            },
            1450: {
              width: 1024,
              slidesPerView: 3,
            },
          }}
        >
            <SwiperSlide><div className="maintrend-item">
                <div className="item-container">
                    <img src={alex} alt="Trending" className='maintrend-pic'/>
                    <div className="maintrend-details">
                        <div className="pic-title">Poseidon</div>
                    <div className="pic-caption">Poseidon Lorem ipsum dolor sit amet consectetur adipisicing.</div>
                    </div>
                </div>
            </div></SwiperSlide>
            <SwiperSlide><div className="maintrend-item">
                <div className="item-container">
                    <img src={alex} alt="Trending" className='maintrend-pic'/>
                    <div className="maintrend-details">
                        <div className="pic-title">Poseidon</div>
                    <div className="pic-caption">Poseidon Lorem ipsum dolor sit amet consectetur adipisicing.</div>
                    </div>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="maintrend-item">
                <div className="item-container">
                    <img src={alex} alt="Trending" className='maintrend-pic'/>
                    <div className="maintrend-details">
                        <div className="pic-title">Poseidon</div>
                    <div className="pic-caption">Poseidon Lorem ipsum dolor sit amet consectetur adipisicing.</div>
                    </div>
                </div>
            </div>
            </SwiperSlide>
           
        </Swiper>
            
    </section>
  )
}

export default Maintrend