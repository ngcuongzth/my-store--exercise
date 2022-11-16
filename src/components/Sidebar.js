import React from 'react'
import styled from 'styled-components/macro'
import { Link, NavLink } from 'react-router-dom'
import logo from '../img/logo.svg'
import { FaTimesCircle } from "react-icons/fa";
import { colors, transitions, layouts } from '../ultils/StyleVariables';
import { links } from '../ultils/constant'
import { useGlobalContext } from '../GlobalContext';
import { sideLinks } from '../ultils/constant';
import { Button } from '@mui/material';
import { AiOutlineSearch } from "react-icons/ai";

import SearchForm, { SearchSidebar } from "../components/SearchForm"
const Sidebar = () => {
    const { isOpenSidebar, handleCloseSidebar } = useGlobalContext();
    return (
        <SidebarWrapper className={`${isOpenSidebar === false && 'sidebar-close'}`}>
            <div className="section-center">
                <header>
                    <Link to="/" onClick={() => {
                        handleCloseSidebar();
                    }}>
                        <img src={logo} alt="sidebar-logo" />
                    </Link>
                    <Button sx={{ minWidth: "unset", padding: 0 }} className='normal-btn' onClick={() => {
                        handleCloseSidebar();
                    }}>
                        <FaTimesCircle className='svg-25-25' />
                    </Button>
                </header>
                <main>
                    {links.map((item) => {
                        const { id, text, link, icon } = item;
                        return <NavLink to={link} key={id} onClick={() => {
                            handleCloseSidebar();
                        }}>
                            {icon}
                            <h4>{text}</h4>
                        </NavLink>
                    })}
                    <SearchSidebar>
                        <form onClick={(e) => {
                            e.preventDefault();
                        }}>
                            <input type="text" placeholder='Tìm kiếm...' />
                            <Button sx={{ minWidth: "unset", padding: 0 }} type="submit" className='normal-btn'>
                                <AiOutlineSearch className="svg-25-25" />
                            </Button>
                        </form>
                    </SearchSidebar>
                </main>
                <footer>
                    {sideLinks.map((item) => {
                        const { id, icon, text, link } = item;
                        return <Link to={link} key={id}>
                            {icon}
                            <h4>{text}</h4>
                        </Link>
                    })}
                </footer>
            </div>
        </SidebarWrapper>
    )
}


const SidebarWrapper = styled.aside`
    position: fixed;
    top: 0;
    left:0;
    right: 0;
    bottom:0;
    background-color: ${colors.mainBgColor};
    z-index: 10;
    transition: ${transitions.mainTransition};
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: ${layouts.headerHeight};
        img{
            height: 8rem;
        }
        button{
            height: 2.5rem;
            width: 2.5rem;
            &:hover{
                svg{
                    fill: ${colors.linkHoverColor};
                    transition: ${transitions.mainTransition};
                }
            }
        }
        svg{
            fill: ${colors.primaryColor};
        }
    }

    main{
        margin-top: 2rem;
        a{
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 2rem 3rem;
            color: ${colors.textNormalColor};
            transition: ${transitions.mainTransition};
            margin-bottom: 1rem;
            border-radius: ${layouts.radius5};
            &:hover{
                color: ${colors.primaryColor};
                transform: translateX(1rem);
                background-color : ${colors.linkHoverColor};
            }
            &.active{
                color: ${colors.primaryColor};
                transform: translateX(1rem);
                background-color : ${colors.linkHoverColor};}
            }
        }
    footer{
        margin-top: 2rem;
        display: flex;
        justify-content: center;
        gap: 2rem;
        a{
            display: flex;
            gap: 1rem;
            padding: 1rem 2rem;
            border-radius: ${layouts.radius20};
            transition: ${transitions.mainTransition};
            &:hover{
                background-color: ${colors.primaryColor};
                color: ${colors.mainBgColor};
                &{
                    svg{
                        fill: ${colors.mainBgColor};
                    }
                }
            }
        }
    }
        h4{
            color: inherit;
            font-weight: 500;
            letter-spacing: ${layouts.mainSpacing};
        }
        svg{
            width: 2.5rem;
            height: 2.5rem;
            fill: ${colors.primaryColor};
        }

`





export default Sidebar