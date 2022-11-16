import React from 'react'
import styled from 'styled-components/macro';
import logo from '../img/logo.svg'
import { AiFillMail, AiOutlinePhone, AiFillContacts, AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai";
import { colors, layouts, transitions } from '../ultils/StyleVariables';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <FooterWrapper>
            <div className="section-center">
                <div className="footer-col">
                    <img src={logo} alt="logo" />
                    <ul className="links">
                        <li>
                            <Link to="/">
                                <AiFillMail />
                                <span>
                                    mail: author@gmail.com
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <AiOutlinePhone />
                                <span>
                                    hotline: 18008119
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <AiFillContacts />
                                <span>
                                    CSKH: 19009011
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h3 className="title">Liên kết</h3>
                    <ul className="links">
                        <li>
                            <Link to="/">
                                <AiFillFacebook />
                                <span>
                                    Facebook
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <AiFillInstagram />
                                <span>
                                    Instagram
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <AiFillTwitterSquare />
                                <span>
                                    Twitter
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h3 className="title">Liên kết</h3>
                    <ul className="links">
                        <li>
                            <Link to="/">
                                <AiFillFacebook />
                                <span>
                                    Facebook
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <AiFillInstagram />
                                <span>
                                    Instagram
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <AiFillTwitterSquare />
                                <span>
                                    Twitter
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
        </FooterWrapper>
    )
}


const FooterWrapper = styled.footer`
    background-color: ${colors.primaryColor};
    padding: 3rem 0;
    .section-center{
        display: grid;
        grid-template-columns: repeat(3,1fr);
        gap: 2rem;
    }
    .footer-col{
        .title{
            height: 10rem;
            display: flex;
            align-items: center;
            color: ${colors.mainBgColor};
        }
        img{
            height: 10rem;
        }
        span{
            color: ${colors.mainBgColor};
        }
        svg{
            height: 3rem;
            width: 3rem;
            fill: ${colors.mainBgColor}
        }
    }
    .links li a{
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    @media screen and (max-width:991px){
         .section-center{
             grid-template-columns: repeat(2,1fr);
         }
    }
    @media screen and (max-width: 768px){
         .section-center{
             grid-template-columns: 1fr;
         }
         
    }
`
export default Footer