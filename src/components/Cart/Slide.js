import React from 'react'
import styled from 'styled-components/macro'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from 'react-router-dom';
import { colors, transitions } from '../../ultils/StyleVariables';
import { cart_slide } from '../../ultils/constant';
const Slide = () => {
  return (
    <Wrapper>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 250000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {cart_slide.map((item)=>{
          const {id, url_product, img} = item;
          return <SwiperSlide key={id}>
            <Link to={url_product}>
              <img src={img}/>
            </Link>
          </SwiperSlide>
        })}
      </Swiper>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  border-radius: 1rem;
  overflow: hidden;
/* swiper css */
 
.swiper-button-prev,
.swiper-rtl.swiper-button-next {
  &:hover::after {
    color: ${colors.secondColor};
  }
  &::after {
    font-size: 3rem;
    color: ${colors.mainBgColor};
    transition: ${transitions.mainTransition};
  }
}

.swiper-button-next,
.swiper-rtl.swiper-button -prev {
  &:hover::after {
    color: ${colors.secondColor};
  }
  &::after {
    font-size: 3rem;
    color: ${colors.mainBgColor};
    transition: ${transitions.mainTransition};
  }
}
.swiper-button-prev,
.swiper -rtl.swiper-button-next {
  left: 0;
}
.swiper-button-next,
.swiper-rtl.swiper-button-prev {
  right: 0;
}

.swiper-pagination-bullet {
  background: ${colors.mainBgColor};
  opacity: 0.7;
}
.swiper-pagination-bullet-active {
  background: ${colors.secondColor};
  opacity: 0.9;
}
.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal,
.swiper-pagination-custom,
.swiper-pagination-fraction {
  bottom: 0;
}
.swiper {
width: 100%;
height: 100%;
}

.swiper-slide {
text-align: center;
font-size: 18px;
background: #fff;

/* Center slide text vertically */
display: -webkit-box;
display: -ms-flexbox;
display: -webkit-flex;
display: flex;
-webkit-box-pack: center;
-ms-flex-pack: center;
-webkit-justify-content: center;
justify-content: center;
-webkit-box-align: center;
-ms-flex-align: center;
-webkit-align-items: center;
align-items: center;
}

.swiper-slide img {
display: block;
width: 100%;
height: 100%;
object-fit: cover;
}
`

export default Slide