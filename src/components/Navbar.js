import React from 'react'
import styled from 'styled-components/macro'
import { links } from '../ultils/constant'
import { Link, NavLink } from 'react-router-dom'
import { colors, layouts, transitions } from '../ultils/StyleVariables'
const Navbar = () => {
    return (
        <NavbarWrapper>
            <div className="section-center">
                {links.map((item) => {
                    const { id, text, link, icon } = item;
                    return <NavLink to={link} key={id}>
                        {/* {icon} */}
                        <h3>{text}</h3>
                    </NavLink>
                })}
            </div>
        </NavbarWrapper>
    )
}

const NavbarWrapper = styled.nav`
padding-top: 10rem;
height: 4rem;
display: flex;
align-items: center;
    .section-center{
        height: 100%;
        display: flex;
        justify-content: flex-end;
        gap: 3rem;
    }
    a{
        display: flex;
        align-items: center;
        gap: 1rem;
        color: ${colors.textNormalColor};
        letter-spacing: ${layouts.mainSpacing};
        transition: ${transitions.mainTransition};
        &.active{
            color: ${colors.primaryColor};
        }
        &:hover{
            color: ${colors.primaryColor};
            svg{
                fill: ${colors.primaryColor};
            }
        }
    }
    svg{
        width: 2.5rem;
        height: 2.5rem;
    }
`

export default Navbar