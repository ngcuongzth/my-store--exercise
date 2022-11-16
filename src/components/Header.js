import React from 'react'
import { sideLinks } from '../ultils/constant';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro'
import logo from '../img/header-logo.svg';
import { layouts, colors, transitions } from "../ultils/StyleVariables"
import SearchForm from './SearchForm'
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from '../GlobalContext';
import Button from '@mui/material/Button';




const Header = () => {
    const { handleOpenSidebar } = useGlobalContext();
    return (
        <HeaderWrapper>
            <div className="section-center">
                <Button sx={{ minWidth: "unset", padding: 0 }} className="toggle-sidebar normal-btn" onClick={() => {
                    handleOpenSidebar();
                }}>
                    <FaBars className='svg-25-25' />
                </Button>
                <section className="header-left">
                    <Link to="/">
                        <img src={logo} alt="header-logo" />
                    </Link>
                    <SearchForm header_search />
                </section>
                <section className="header-right">
                    {sideLinks.map((item) => {
                        const { id, text, link, icon } = item;
                        return <Link to={link} key={id}>
                            {icon}
                            <h4>{text}</h4>
                        </Link>
                    })}
                </section>
            </div>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.header`
    background-image: linear-gradient(to right,${colors.primaryColor}, ${colors.secondGradientColor});
    height: ${layouts.headerHeight};
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 10;
    .section-center{
        display: grid;
        grid-template-columns: 3fr 2fr;
        gap: 1rem;
        height: 100%;
        position: relative;
    }
    .toggle-sidebar{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
        display: none;
        transition: ${transitions.mainTransition};
        padding: 0.5rem;
        svg{
            fill: ${colors.primaryColor};
        }
        &:hover{
            color: ${colors.primaryColor};
                background-color: ${colors.linkHoverColor};
                & svg{
                    fill: ${colors.primaryColor};
                }
        }
    }
    .header-left{
        height: 100%;
        display: grid;
        grid-template-columns: 20rem auto;
        gap:2rem;
        a{
            height: 100%;
        }
        img{
            height: ${layouts.headerHeight};
        }
    }
    .header-right{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap:2rem;
        a{
            color: ${colors.mainBgColor};
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 0.5rem 1rem;
            border-radius: ${layouts.radius20};
            transition: ${transitions.mainTransition};
            &:hover{
                color: ${colors.primaryColor};
                background-color: ${colors.mainBgColor};
                & svg{
                    fill: ${colors.primaryColor};
                }
            }
        }
        h4{
            color: inherit;
            letter-spacing: ${layouts.mainSpacing};
            font-weight: 500;
        }
        svg{
            width: 2.5rem;
            height: 2.5rem;
            fill: ${colors.mainBgColor};
        }
    }

    @media screen and (max-width: 992px){
        .toggle-sidebar{
            display: block;
        }
        .header-right{
            display: none;
        }
        .section-center{
            grid-template-columns: 8fr 2fr;
        }
    }
    @media screen and (max-width: 768px){
        .header-search{
            display: none;
        }
    }
`

export default Header