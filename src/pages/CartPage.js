import React from 'react'
import styled from 'styled-components/macro'
import { Button } from '@mui/material'
import Slide from '../components/Cart/Slide';
import CartContainer from '../components/Cart/CartContent'
import { Link } from 'react-router-dom';
import { colors } from '../ultils/StyleVariables';
const Cart = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <div className='wrapper'>
          <Button className="back-btn">
            <Link to="/">Trở về trang chủ</Link>
          </Button>
          <Slide/>
          <CartContainer/>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  padding-top: 2rem;
  .back-btn{
    padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        border: 2px solid transparent;
        background-color: ${colors.mainBgColor};
        text-transform: uppercase;
        font-size: 1.4rem;
        margin-bottom:  2rem;
        &:hover{
            color: ${colors.primaryColor};
            border: 2px solid ${colors.primaryColor};
        }
    }
`

export default Cart