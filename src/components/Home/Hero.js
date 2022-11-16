import React from 'react'
import styled from 'styled-components/macro'
import heroBg from '../../img/hero_bg.webp'
import HeroTitle from '../../img/hero_title.svg'
import HeroGif from '../../img/hero_right.svg'
import { colors, layouts } from '../../ultils/StyleVariables';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
const Hero = () => {
    return (
        <HeroWrapper>
            <img src={heroBg} alt="hero-bg" className="hero-bg" />
            <div className="content section-center">
                <article className="left">
                    <div className="left-content">
                        <div className="title-wrapper">
                            <img src={HeroTitle} alt="" className="hero-title" />
                        </div>
                        <p className="desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sequi ex eaque expedita tempora corporis nesciunt delectus quasi accusamus suscipit aspernatur eum corrupti inventore nihil, voluptate odio magni reiciendis natus.
                        </p>
                        <div className="btn-wrapper">
                            <Button className="hero-btn">
                                <Link to="/products">Shop now</Link>
                            </Button>
                        </div>
                    </div>
                </article>
                <article className="right">
                    <img src={HeroGif} alt="hero-img" />
                </article>
            </div>
        </HeroWrapper>
    )
}


const HeroWrapper = styled.section`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    .title-wrapper{
        img{
            height: 20rem;
        }
    }
    img.hero-bg{
        height: calc(100vh - 12rem);
        width: 100%;
    }
    .content{
        position: absolute;
        top: 0;
        display: grid;
        align-items: flex-end;
        grid-template-columns: 3fr 2fr;
        gap: 3rem;
        align-items: center;
        height: 100%;
    }
    .left{
        p{
            color: ${colors.textNormalColor};
            font-weight: 400;
            letter-spacing: ${layouts.mainSpacing};
            line-height: 2.6rem;
        }
        
    }
    .right{
        img{
            width: 35rem;
            height: 35rem;;
            margin: 0 auto;
        }
    }
    .btn-wrapper{
        display: flex;
        justify-content: flex-end;
        margin-top: 2rem;
    }
    .hero-btn{
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

    @media screen  and (max-width: 1200px) {
        .right{
            img{
                width: 35rem;
                height: 35rem;
            }
        }
    }
    @media screen and (max-width: 768px){
        .content{
            grid-template-columns: 1fr;
        }
        .right{
            display: none;
        }
        .title-wrapper{
            margin: 2rem 0;
            img{
                height: 20rem;
                margin: 0 auto;
            }
        }        
    }
`
export default Hero