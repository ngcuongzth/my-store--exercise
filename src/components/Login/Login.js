import React from 'react'
import {colors,layouts} from '../../ultils/StyleVariables'
import loginImg from '../../img/login.gif'
import { Button } from '@mui/material'
import { loginFields } from '../../ultils/constant'
import LoginForm from './LoginForm'
import styled from 'styled-components/macro';
import {Link} from 'react-router-dom'
const Login = () => {
  return (
    <LoginWrapper>
        <div className='section-center'>
      <Button className="back-btn">
        <Link to="/">
        Trở về trang chủ
        </Link>
        </Button>
            <div className='form-wrapper'>
                <form>
                <img className="img-side" src={loginImg}/>
                <div className="form-content">
                    <LoginForm/>
                </div>
                </form>
            </div>
        </div>
    </LoginWrapper>
  )
}
const LoginWrapper = styled.section`
.back-btn{
  border: 2px solid ${colors.mainBgColor};
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
.section-center {
  margin: 4rem auto;
}
padding-top: 4rem;
  form{
    display: grid;
    grid-template-columns: 30rem auto;
    gap: 10rem;
    align-items: center;
    justify-content: center;
  }
  .form-content{
    padding: 2rem;
    background-color: ${colors.mainBgColor};
  }
  .form-primary{
    margin: 2rem 0;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  @media screen and (max-width: 1024px){
    .img-side{
      display: none;
    }
    .form-content{
      width: 70rem;
    }
    form{
      grid-template-columns: unset;
    }
  }
`


export default Login