import styled from "styled-components/macro";
import { colors, layouts } from "../../ultils/StyleVariables";
import React, { useState } from "react";
import formatPrice from "../../ultils/formatPrice";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";


const SlideProduct = ({ name, price, sale_off_price, colors }) => {
  const myGallery = colors[0].images;
  const [mainThumb, setMainThumb] = useState(myGallery[0]);
  const [thumbIndex, setThumbIndex] = useState(0);

  const handleChangeThumb = (index) => {
    setMainThumb(myGallery[index]);
    setThumbIndex(index);
  };
  return (
    <Wrapper className="thumb">
      <div className="main-thumb">
        <img src={mainThumb} alt="thumb" />
      </div>
      <div className="sub-thumbs">
        {myGallery.slice(0, 4).map((item, index) => {
          return (
            <img key={index}
              src={item}
              onClick={() => {
                handleChangeThumb(index);
              }}
              className={`${thumbIndex === index ? "sub-thumb active" : "sub-thumb"
                }`}
            />
          );
        })}
      </div>

      <div className="desc">
        <h3 className="name">{name}</h3>
        <div className="sale-wrapper">
          <h4>
            Giá chỉ còn:
          </h4>
          <span className="sale_off_price">
            {formatPrice(sale_off_price)}
          </span>
        </div>
        <div className="price-wrapper">
          <h4>
            Giá gốc:
          </h4>
          <span className="price">{formatPrice(price)}</span>
        </div>
        <Button className="addToCart">
          <Link to="/cart">Thêm vào giỏ hàng</Link>
        </Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background-color: ${colors.linkHoverColor};
  border-radius: 0.5rem;
  padding: 2rem;
  .sub-thumbs {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    border: 2px solid ${colors.linkHoverColor};
    margin-top: 1rem;
    img {
      cursor: pointer;
      border-radius: 0.5rem;
      border: 1px solid ${colors.secondColor};

      &.active {
        border: 2px solid ${colors.primaryColor};
      }
    }
  }
  .main-thumb {
    img {
      cursor: pointer;
      border-radius: 1rem;
      border-radius: 0.5rem;
      border: 1px solid ${colors.secondColor};
    }
  }
  .desc {
    margin-top: 2rem;
    h3 {
      color: ${colors.primaryColor};
      font-weight: 600;
      letter-spacing: ${layouts.mainSpacing};
      min-height: 3rem;
    }
    & .sale_off_price {
      color: ${colors.priceColor};
      font-weight: 600;
    }
    .sale-wrapper{
        display: flex;
        align-items: flex-end;
        gap: 1rem;
          h4{
        font-weight: 400;
        color: ${colors.textNormalColor};
      }
    }
     .price-wrapper {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      gap: 1rem;
      h4{
        font-weight: 400;
        color: ${colors.textNormalColor};

      }
    }
    & .price {
      color: ${colors.textNormalColor};
      font-weight: 400;
      font-size: 1.2rem;
      text-decoration: line-through;
    }
  }

  .addToCart {
    border: 2px solid ${colors.mainBgColor};
    color: ${colors.primaryColor};

    &:hover{
        background-color: ${colors.mainBgColor};
        border-color: ${colors.primaryColor};
    }
    a{
        color: ${colors.primaryColor};
        font-weight: 600;
        letter-spacing: ${layouts.mainSpacing};
        
    }
  }
    @media screen and (max-width: 991px){
    padding: 3rem;
    
  }

`;

export default SlideProduct;
