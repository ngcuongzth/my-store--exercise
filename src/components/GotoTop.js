import React from 'react'
import styled, { keyframes } from 'styled-components/macro'
import gotoTopIcon from '../img/gototop.svg'
import ScrollToTop from "react-scroll-to-top";
const GotoTop = () => {


    return (
        <GotoTopWrapper className="wrapper">
            <ScrollToTop smooth top={800} component={
                <img src={gotoTopIcon} alt="gototop" />
            }>
            </ScrollToTop>
        </GotoTopWrapper>
    )
}



const GotoTopWrapper = styled.div`
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: 10;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: movebtn 2s infinite ease-in-out;
    img{
        width: 4rem;
        height: 4rem;
        margin: 0 auto;
    }

   @keyframes movebtn {
    25%{
        transform: translateY(8px);
    }
    50%{
        transform: translateY(0px);
    }
    75%{
        transform: translateY(-8px);
    }
    100%{
        transform: translateY(0px);
    }
  }
`


export default GotoTop