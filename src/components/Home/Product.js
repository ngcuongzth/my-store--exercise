import React from 'react'
import styled, { css } from 'styled-components/macro'
import { Link } from 'react-router-dom'
import formatPrice from '../../ultils/formatPrice'
import tagImg from '../../img/tag.svg';
import { colors, transitions, shadows, layouts } from '../../ultils/StyleVariables'
const Product = (props) => {
  const { id, name, price, sale_off_price, colors, index } = props;
  const img = colors[0].images[0];
  const off = Math.floor(((price - sale_off_price) / price) * 100);
  return (
    <ProductWrapper>
      <Link className={`${index % 2 === 0 ? "product-link even" : "product-link odd"}`} to={`/products/${id}`}>
        <div className="tag-wrapper">
          {off > 5 && <img className="tag" src={tagImg} alt="" />}
          {off > 5 && <span> -{off}%</span>}
        </div>
        <img className="thumb" src={img} alt={id} />
        <footer>
          <h4> {name.length > 50
            ? `${name.substring(0, 50)}...`
            : name}</h4>
          <div className="desc">
            <div className="sale-wrapper">
              <span className='sale_off_price'>{formatPrice(sale_off_price)}</span>
            </div>
            <div className="price-wrapper">
              <span className="price">{formatPrice(price)}</span>
            </div>
          </div>
        </footer>
      </Link>
    </ProductWrapper>
  )
}

const ProductWrapper = styled.div`
    min-height: 300px;
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
  h4{
    min-height: 5rem;
    color: ${colors.textNormalColor};
    -webkit-transition: all ease-in-out 0.4s;
    transition: all ease-in-out 0.4s;
  }
  footer {
    margin-top: 1rem;
  }
  .product-link{
    padding: 2rem;
    border-radius: 1rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    transition: ${transitions.mainTransition};
    position: relative;
    img.thumb{
      border-radius: 0.5rem;
      margin-top: 2rem;
    }
    &:hover {
      footer h4 {
        color: ${colors.secondColor};
      }
    }
     &.odd{
        background-color: ${colors.mainBgColor};
        &:hover{
            box-shadow: ${shadows.shadowMainRightBottom};
        }
    }

    &.even{
        background-color : ${colors.secondBgColor};
         &:hover{
            box-shadow: ${shadows.shadowSecondRightBottom};
        }
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
  }
`

export { ProductWrapper };

export default Product