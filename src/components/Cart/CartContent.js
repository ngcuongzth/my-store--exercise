import React from 'react'
import {colors, layouts, transitions} from '../../ultils/StyleVariables';
import styled from 'styled-components/macro';
import {cart_products, products} from '../../ultils/constant';
import formatPrice from '../../ultils/formatPrice'
import {Button} from '@mui/material';
const CartContent = () => { // console.log(cart_products)
    let calcTotal = 0;
    return (
        <Wrapper>
            <div className="title">
                <div className="title-content">
                    Sản phẩm
                </div>
                <div className="title-content">
                    Giá
                </div>
                <div className="title-content">
                    Số lượng
                </div>
                <div className="title-content">
                    Tổng
                </div>
            </div>
            <div className="content">
                <div className='content-wrapper'>
                    {
                    cart_products.map((item) => {
                        const {id, model, quantity} = item;
                        let thumb;
                        let _price;
                        const total = products.filter((product) => {
                            if (product.id === model) {
                                thumb = product.colors[0].images[0];
                                _price = product.price;
                                return true;
                            }
                            return false;
                        })[0].sale_off_price * quantity;
                        calcTotal += total;
                        return <div className='cart-item'
                            key={id}>
                            <div className='thumb'>
                                <img src={thumb}/>
                            </div>
                            <div className='price'>
                                <h3>{
                                    formatPrice(_price)
                                }</h3>
                            </div>
                            <div className='quantity'>
                                <h3>{quantity}</h3>
                            </div>
                            <div className='total'>
                                <h3>{
                                    formatPrice(total)
                                }</h3>
                            </div>
                        </div>
                })
                } </div>
            </div>
            <div className='bill'>
                <label>
                    Tổng
                </label>
                <span>{formatPrice(calcTotal)}</span>
            </div>
            <div className='button-wrapper'>
                <Button>
                    xoá giỏ hàng
                </Button>
                <Button>
                  Thanh toán
                </Button>
            </div>

        </Wrapper>
    )
}
const Wrapper = styled.section `
padding: 2rem;
margin-top: 2rem;
background-color: ${
    colors.linkHoverColor
};
border-radius: 1rem;
  .title{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 2rem;
    padding: 2rem;
    border-radius: 1rem;
    background-color: ${
    colors.mainBgColor
};

    .title-content{
      color: ${
    colors.textNormalColor
};
      font-weight: 600;
      letter-spacing: ${
    layouts.mainSpacing
};
    }
  }
  .button-wrapper{
    display: flex;
    justify-content: flex-end;
    button{
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      border: 2px solid transparent;
      margin: 1rem;
      background-color: ${
    colors.mainBgColor
};
      text-transform: uppercase;
      font-size: 1.4rem;
      margin-bottom:  2rem;
      &:hover{
          color: ${
    colors.primaryColor
};
          border: 2px solid ${
    colors.primaryColor
};
      }
  }
    }
  }
  .content{
    margin: 1rem 0;
  }
  .cart-item{
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 2rem;
    border-bottom: 2px solid #fff;
    img{
      height: 10rem;
      border-radius: 0.5rem;
    }
  }

  .bill{
    background-color: ${colors.mainBgColor};
    border-radius: 0.5rem;
    padding: 2rem;
    width: 30rem;
    gap: 2rem;
    label{
      font-size: 1.6rem;
      color: ${colors.textNormalColor};
      font-weight: 600;
      letter-spacing: ${layouts.mainSpacing};
      margin-right: 2rem;
    }
    span{
      font-size: 1.6rem;
      color: ${colors.priceColor};
      font-weight: 600;

    }
  }
`
export default CartContent
