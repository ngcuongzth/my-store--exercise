import React from 'react'
import { colors, layouts, shadows, transitions } from '../../ultils/StyleVariables'
import styled from 'styled-components/macro'
import feedbackIcon from '../../img/feedback-img.svg'
import { useGlobalContext } from '../../GlobalContext'
import Customer from './Customer'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


import tagImg from "../../img/tag.svg";
// import required modules
const Feedback = () => {
  const { customers } = useGlobalContext();
  return (
    <FeedbackWrapper>
      <header>
        <h1 className="title-section">
          Feedback
        </h1>
        <img src={feedbackIcon} alt="feedback-img" />
      </header>
      <div className="slider">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          breakpoints={{
            1200: {
              slidesPerView: 1,
            },
          }}
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {customers.map((item, index) => {
            return <SwiperSlide key={index}>
              <Customer {...item} />
            </SwiperSlide>
          })}
        </Swiper>
      </div>
    </FeedbackWrapper>
  )
}

const FeedbackWrapper = styled.section`
padding-top: 4rem;
    header{
        display: flex;
        gap: 2rem;
        img{
            width: 4rem;
            height: 4rem;
        }
    }
.slider{
    margin: 4rem 0;
}
.swiper-button-prev,
  .swiper-rtl.swiper-button-next {
    &:hover::after {
      color: ${colors.secondColor};
    }
    &::after {
      font-size: 3rem;
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
      font-size: 3rem;
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


`
export default Feedback