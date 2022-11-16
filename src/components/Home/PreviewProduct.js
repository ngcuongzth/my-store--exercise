import React from 'react'
import styled from 'styled-components/macro'
import ReactPlayer from 'react-player';

const PreviewProduct = () => {
    return (
        <VideoWrapper>
            <ReactPlayer
                url='https://www.youtube.com/watch?v=9tobL8U7dQo'
                width="100%"
                height="100%"
                playing={false}
                controls={true}
                loop={true}
            />
        </VideoWrapper>
    )
}

const VideoWrapper = styled.article`

    max-width: 991px;
    height: 50rem;
    margin: 4rem auto;
    @media screen and (max-width: 1200px){
        height: 50rem;
    }
    @media screen and (max-width: 991px){
        height: 40rem;
    }
      @media screen and (max-width: 768px){
        height: 40rem;
    }
      @media screen and (max-width: 576px){
        height: 30rem;
    }
`

export default PreviewProduct