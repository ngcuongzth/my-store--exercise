import { useCountdown } from "../../ultils/useCountdown";
import React from "react";
import styled from "styled-components/macro";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import tagImg from "../../img/tag.svg";
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import { listSaleOff } from "../../ultils/constant";
import { Link } from "react-router-dom";
import formatPrice from "../../ultils/formatPrice";
import {
  colors,
  layouts,
  transitions,
  shadows,
} from "../../ultils/StyleVariables";
const FlashSale = () => {
  return (
    <FlashWrapper>
      <div className="section-center">
        <header>
          <h1 className="title-section">Flash sale online</h1>
          <p>countdown</p>
        </header>
        <div className="slider">
          <Swiper
            className="mySwiper"
            breakpoints={{
              0: {
                slidesPerView: 1,
                width: 0,
              },
              576: {
                slidesPerView: 1,
                // slidesPerGroup: true,
                width: 576,
              },
              768: {
                slidesPerView: 3,
                // slidesPerGroup: true,
                width: 768,
              },
              991: {
                slidesPerView: 3,
                // slidesPerGroup: true,
                width: 991,
              },
              1200: {
                slidesPerView: 5,
                // slidesPerGroup: true,
                width: 1200,
              },
            }}
            slidesPerView={5}
            spaceBetween={30}
            centeredSlides={true}
            // centeredSlides={true}
            slidesPerGroupSkip={1}
            loopFillGroupWithBlank={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
          >
            {listSaleOff.map((prod, index) => {
              const { id, colors, sale_off_price, name, tag, price } = prod;
              const img = colors[0].images[0];
              const off = Math.floor(((price - sale_off_price) / price) * 100);
              return (
                <SwiperSlide key={id}>
                  <Link
                    className={`${index % 2 === 0 ? "slide-link even" : "slide-link odd"
                      }`}
                    to={`/products/${prod.id}`}
                  >
                    <div className="tag-wrapper">
                      {off > 5 && <img className="tag" src={tagImg} alt="" />}
                      {off > 5 && <span> -{off}%</span>}
                    </div>
                    <img className="thumb" src={img} alt={prod.name} />
                    <footer>
                      <h4 className="title">
                        {name.length > 50
                          ? `${name.substring(0, 50)}...`
                          : name}
                      </h4>
                      <div className="desc">
                        <div className="sale-wrapper">
                          <span className="sale_off_price">
                            {formatPrice(sale_off_price)}
                          </span>
                        </div>
                        <div className="price-wrapper">
                          <span className="price">{formatPrice(price)}</span>
                        </div>
                      </div>
                    </footer>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </FlashWrapper>
  );
};

const FlashWrapper = styled.section`
  .section-center {
    padding-top: 4rem;
  }
  .slide-link {
    transition: ${transitions.mainTransition};
    margin: 0.2rem;
    position: relative;

    &.even {
      background-color: ${colors.mainBgColor};
      &:hover {
        box-shadow: ${shadows.shadowMainRightBottom};
      }
    }

    &.odd {
      background-color: ${colors.secondBgColor};
      &:hover {
        box-shadow: ${shadows.shadowSecondRightBottom};
      }
    }
    padding: 2rem;
    display: block;
    min-height: 30rem;
    background-color: ${colors.secondBgColor};
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img.thumb {
      border-radius: 0.5rem;
      margin-top: 1rem;
    }
    .tag-wrapper {
      position: absolute;
      right: -1.8rem;
      top: 0;
      span {
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
        letter-spacing: ${layouts.mainSpacing};
        color: ${colors.priceColor};
        font-weight: 600;
      }
    }
    img.tag {
      height: 4rem;
    }
    &:hover {
      footer h4 {
        color: ${colors.secondColor};
      }
    }
  }
  header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
      letter-spacing: ${layouts.mainSpacing};
      font-weight: 400;
      border-radius: 10px;
    }
  }
  h4 {
    min-height: 5rem;
    color: ${colors.textNormalColor};
    transition: ${transitions.mainTransition};
  }
  .desc {
    & .sale_off_price {
      color: ${colors.priceColor};
      font-weight: 600;
    }
    .price-wrapper {
      display: flex;
      justify-content: flex-end;
    }
    & .price {
      color: ${colors.textNormalColor};
      font-weight: 400;
      font-size: 1.2rem;
      text-decoration: line-through;
    }
  }
  footer {
    margin-top: 1rem;
  }
  .slider {
    margin: 3rem 0;
  }
  /* swiper css */
 
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

`;
export default FlashSale;
