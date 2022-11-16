import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  
    $primary-color: #9370DB;
    $text-white: #fff;
    $text-black: #000;
    $max-width: 1200px;
    $normal-text-size: 14px;
    
    $header-color: #999;
    html{
        scroll-behavior: smooth;
    }
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
    * {
        margin: 0;
        padding: 0;
        font: inherit;
        font-size: 62.5%;
    }
    body {
        line-height: 1.5;
        font-family: 'Poppins', sans-serif;
    }
    img,
    picture,
    video,
    canvas,
    svg {
        display: block;
        max-width: 100%;
    }
    img{
        object-fit:cover;
    }
    input,
    button,
    textarea,
    select {
        outline: none;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    p,a,span,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        overflow-wrap: break-word;
        letter-spacing: 1px;
    }
    h1{
        font-size: 2.2rem;
    }
    h2{
        font-size: 2rem;
    }
    h3{
        font-size: 1.8rem;
    }
    h4{
        font-size: 1.6rem;
    }
    h5{
        font-size: 1.4rem;
    }

    p,span,a, div,section,article{
        font-size: 1.4rem;
    }
    @media screen and (max-width: 768px){
        h1{
            font-size: 2rem;
        }
        h2{
            font-size: 1.8rem;
        }
        h3{
            font-size: 1.6rem;
        }
        h4{
            font-size: 1.4rem;
        }
        h5{
            font-size: 1.2rem;
        }
        span, a, p{
            font-size: 1.2rem;
        }
    }
    .section-center{
        max-width: 120rem;
        width: 90%;
        margin: 0 auto;
    }
    .normal-btn{
        border: none;
        background-color: transparent;
        outline: none;
        min-width: unset;
    }
    button{
        cursor: pointer;
    }
    .svg-25-25{
        height: 2.5rem;
        width: 2.5rem;
    }
    .sidebar-close{
        transform: translateX(-100%);
    }
    .search-sidebar{
        @media screen and (max-width: 768px){
            display: flex;
        }
    }
     .title-section {
      color: #fffff0;
      background-image: linear-gradient(
        to right,
        #daa158,
       #7B68EE
      );
      padding: 0.5rem 1rem;
       letter-spacing: 1px;
      font-weight: 400;
      border-radius: 10px;
    }
    ul, li{
        list-style: none;
    }
    
`;
