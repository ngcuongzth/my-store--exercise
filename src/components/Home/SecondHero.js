import React from 'react'
import styled from 'styled-components/macro'
import heroBg from '../../img/bg_landing_1.jpg'
import Customers from './Customers'
const SecondHero = () => {
    return (
        <HeroWrapper>
            <div className="section-center">
                <Customers />
            </div>
        </HeroWrapper>
    )
}

const HeroWrapper = styled.section`
margin-top: 3rem;
    /* height: 100vh; */
    background-image: url(${heroBg});
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
export default SecondHero