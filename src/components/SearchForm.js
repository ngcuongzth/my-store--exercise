import React from 'react'
import styled, { css } from 'styled-components/macro'
import { colors, layouts } from '../ultils/StyleVariables'
import { AiOutlineSearch } from "react-icons/ai";
import Button from '@mui/material/Button';
const SearchForm = () => {
    return (
        <FormWrapper>
            <form onClick={(e) => {
                e.preventDefault();
            }}>
                <input type="text" placeholder='Tìm kiếm...' />
                <Button sx={{ minWidth: "unset", padding: 0 }} type="submit" className='normal-btn'>
                    <AiOutlineSearch className="svg-25-25" />
                </Button>
            </form>
        </FormWrapper>
    )
}

const FormWrapper = styled.article`
    display: flex;
    align-items: center;
    max-width: 35rem;
    form{
        display: flex;
        align-items: center;
        width:100%;
        position: relative;
    }
    input{
        background-color: ${colors.mainBgColor};
        border: 2px solid transparent;
        font-size: 1.4rem;
        letter-spacing: ${layouts.mainSpacing};
        border-radius: ${layouts.radius20};
        padding: 0.5rem 1rem;
        width: 100%;
        color: ${colors.textNormalColor};
        letter-spacing: ${layouts.mainSpacing};
        height: 3.6rem;
    }
    button{
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        right: 0;
        top:0;
        bottom: 0;
        width: 3.6rem;
        border-radius: ${layouts.radius20};
        background-color: ${colors.mainBgColor};
        border: 2px solid transparent;
        // MUI css 
        color: ${colors.primaryColor};
        svg{
            fill: ${colors.primaryColor};
        }
    }
    @media screen and (max-width:768px){
        display: none;
    }
`


const SearchSidebar = styled(FormWrapper)`
    margin: 4rem auto;
    max-width: 45rem;
    width: 80%;
    input, button{
        background-color: ${colors.linkHoverColor};
    }
    @media screen and (max-width:768px){
        display: flex;
    }

`
export default SearchForm
export { SearchSidebar }