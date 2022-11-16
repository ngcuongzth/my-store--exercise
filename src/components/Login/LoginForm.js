import React from 'react'
import { loginFields } from '../../ultils/constant'
import styled from 'styled-components';
import { Button } from '@mui/material'
import { FaFacebookSquare, FaGooglePlusSquare } from "react-icons/fa";
import {colors, layouts} from '../../ultils/StyleVariables'
const LoginForm = () => {
  return (
    <Wrapper>
        <h2>Đăng nhập</h2>
        <div className="btn-wrapper">
          <Button className="login-auth">
            <FaFacebookSquare />
            <h4>Đăng nhập với Facebook</h4>
          </Button>
          <Button  className="login-auth">
            <FaGooglePlusSquare />
            <h4>Đăng nhập với Google</h4>
          </Button>
        </div>
        <div className="form-primary">
                  {loginFields.map((item, index)=>{
                    return <div className="field" key={index}>
                      <label htmlFor={`field_${index}`}>{item.title}</label>
                      <input id={`field_${index}`} key={index} type={item.type} placeholder={item.placeholder}/>
                    </div>
                  })}
                <div className='remember'>
                  <input type="checkbox"/>
                  <label>Nhớ mật khẩu </label>
                </div>
        </div>
        <div className="btn-wrapper">
          <Button className="login-auth bottom">
            <h4>Đăng nhập</h4>
          </Button>
          <Button  className="login-auth bottom">
            <h4>Đăng ký</h4>
          </Button>
        </div>
        <div className='forget'>
                  <Button className="forget-btn">Quên mật khẩu</Button>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
label,input{
  color: ${colors.textNormalColor};
  font-size: 1.5rem;
}
.forget{
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
  .forget-btn{
    color: ${colors.primaryColor};
    text-transform: none;
    font-size: 1.4rem;
  }
}
.remember{
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  input{
    width: 2rem;
  }
}
input{
  padding: 0.2rem 0.8rem;
  border: 2px solid transparent;
  border-radius: 0.5rem;

  &:focus{
    border: 2px solid ${colors.primaryColor};
  }
}
  .login-auth{
    background-color: ${colors.linkHoverColor};
    display: flex;
    gap: 1rem;
    h4{
      font-size: 1.4rem;
    }
  }
  .btn-wrapper{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 2rem;
    margin-top: 2rem;
  }
  svg{
    width: 3rem;
    height: 3rem;
  }
  .field{
    display: grid;
    grid-template-columns: 10rem auto;
    gap: 2rem;
    align-items: center;
  }

  @media screen and (max-width: 1024px){
    .form-content{
      width: 60rem;
    }
    .img-side{
      display: none;
    }
  }
`

export default LoginForm