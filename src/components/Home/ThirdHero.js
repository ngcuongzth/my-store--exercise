import React from 'react'
import { colors, layouts, shadows, transitions } from '../../ultils/StyleVariables'
import styled from 'styled-components/macro'
import HeroImg from '../../img/bg_landing_3.png';
import PreviewProduct from './PreviewProduct';
import videoIcon from '../../img/video-icon.svg'
const ThirdHero = () => {
    return (
        <HeroWrapper>
            <div className="section-center">
                <header>
                    <h1 className="title-section">
                        Reviews
                    </h1>
                    <img src={videoIcon} alt="video-img" />
                </header>
                <div className="video-wrapper">
                    <PreviewProduct />
                </div>
            </div>
        </HeroWrapper>
    )
}

const HeroWrapper = styled.section`
margin-top: 4rem;
 header{
    display: flex;
    align-items: flex-end;
    gap: 2rem;
    margin-top: 2rem;
    img{
        width: 4rem;
        height: 4rem;
    }
  }
  .video-wrapper{
    border-radius: 5px;
    margin-top: 2rem;
  }
`

export default ThirdHero