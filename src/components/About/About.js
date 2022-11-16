import React from 'react'
import { aboutData } from '../../ultils/constant'
import styled from 'styled-components/macro'
import { Button } from '@mui/material'
import {Link} from 'react-router-dom'
import { colors} from '../../ultils/StyleVariables'
const About = () => {
  return (
    <AboutWrapper className='section-center'>
        <h1>Giới thiệu về My Store</h1>
        {aboutData.map((item, index)=>{
            return <section key={index}>
                <h2>{item.title}</h2>
                <ul className='section-list'>
                    {
                        item.list.map((item)=>{
                            return <article key={item.id}>
                                <li className='para-item'>{item.text}</li>
                            </article>
                        })
                    }
                </ul>
            </section>
        })}
        <div className='btn-wrapper'>
            <Button className='back-btn'>
        <Link to="/">
            Trở về trang chủ
        </Link>
            </Button>
        </div>
    </AboutWrapper>
  )
}

const AboutWrapper = styled.main`
padding-top: 2rem;
    .para-item{
        font-size: 1.4rem;
    }
    h1{
        text-align: center;
        color: ${colors.primaryColor};
        font-weight: 600;
    }
    h2{
        font-weight: 600;
        padding: 1rem 0;
    }
    ul, li{
        list-style: square;
        margin: 0 3rem;
    }
    .btn-wrapper{
        display: flex;
        justify-content: center;
        margin-top: 2rem;
    }
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

export default About