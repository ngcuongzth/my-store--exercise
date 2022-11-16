import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { brands } from '../../ultils/constant';
import styled from 'styled-components';
import { colors, transitions } from '../../ultils/StyleVariables';
import { useGlobalContext } from '../../GlobalContext';
const SlideBrands = () => {
  const { handleFilterBrand } = useGlobalContext();
  return (
    <Wrapper>
      <div className="section-center">
        <Swiper
          spaceBetween={20}
          centeredSlides={true}
          breakpoints={{
            576: {
              slidesPerView: 4,
              width: 576,
            },
            768: {
              width: 768,
              slidesPerView: 5
            },
            991: {
              width: 991,
              slidesPerView: 5
            },
            1200: {
              width: 1200,
              slidesPerView: 7
            }
          }}
          slidesPerView={3}
          autoplay={{
            delay: 2500,
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
          {brands.map((item, index) => {
            const { id, name, logo } = item;
            return <SwiperSlide key={id}>
              {
                <div className="logo-wrapper" onClick={() => {
                  handleFilterBrand(name);
                }}>
                  <img src={logo} alt={name} />
                </div>
              }
            </SwiperSlide>
          })}
        </Swiper>
      </div>
    </Wrapper>
  )
}


const Wrapper = styled.article`
margin-top: 2rem;
padding: 1rem 0;

.section-center{
  background-color: ${colors.linkHoverColor};
  padding: 1rem;
  border-radius: 1rem;

}
.logo-wrapper{
  height: 5rem;
  width: 12rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  transition: ${transitions.mainTransition};
  border: 2px solid ${colors.linkHoverColor};
  &:hover{
    cursor: pointer;
    border: 2px solid ${colors.primaryColor};
  }
  img{
    max-width: 12rem;
    max-height: 7rem;
    border-radius: 1rem;
    padding: 2px;
  }
}

/* swiper css */
 
  .swiper-button-prev,
  .swiper-rtl.swiper-button-next {
    &:hover::after {
      color: ${colors.secondColor};
    }
    &::after {
      font-size: 2rem;
      color: ${colors.primaryColor};
      transition: ${transitions.mainTransition};
    }
  }

  .swiper-button-next,
  .swiper-rtl.swiper-button -prev {
    &:hover::after {
      color: ${colors.secondColor};
    }
    &::after {
      font-size: 2rem;
      color: ${colors.primaryColor};
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
    background: ${colors.primaryColor};
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
  // width: 100%;
  // height: 100%;
  object-fit: cover;
}
.swiper-pagination{
  display: none;
}
.swiper-slide{
  background-color: transparent;
}
`


export default SlideBrands