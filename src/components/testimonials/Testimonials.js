import React from 'react'
import './testimonials.css'
import AVATAR2 from '../../assets/avatar2.png'
import AVATAR1 from '../../assets/avatar1.png'
import AVATAR3 from '../../assets/avatar3.png'
import AVATAR from '../../assets/avatar.png'


import { Pagination } from "swiper";

import {Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'




const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
      className='container testimonials__container'
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
       
      >
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={AVATAR1} alt="client" />
          </div>
          <h5 className="clients__name">Bazooka</h5>
          <small className="client__reviews">Keep up the good work</small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={AVATAR2} alt="client" />
          </div>
          <h5 className="clients__name">Jordan</h5>
          <small className="client__reviews">You did a very incredible Job i love it </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={AVATAR3} alt="client" />
          </div>
          <h5 className="clients__name">Cadbury</h5>
          <small className="client__reviews">You're Amazing</small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={AVATAR} alt="client" />
          </div>
          <h5 className="clients__name">Abdulmaleek</h5>
          <small className="client__reviews">Nice</small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Testimonials