import React from 'react'
import styled from 'styled-components/macro';
import { colors, layouts, shadows, transitions } from '../../ultils/StyleVariables'

const Customer = (props) => {
    const { id, name, thumb, feedback, info } = props;
    return (
        <CustomerWrapper>
            <div className="customer">
                <div className="img-wrapper">
                    <img src={thumb} alt={name} />
                </div>
                <div className="feed">
                    <h3 className="name">{name}</h3>
                    <h5 className="info">{info}</h5>
                    <p className="content">
                        {` " ${feedback} "`}
                    </p>
                </div>
            </div>
        </CustomerWrapper>
    )
}

const CustomerWrapper = styled.article`
padding: 4rem;
border-radius: 1rem;
    .customer{
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 2rem;
    }
    .img-wrapper{
        img{
            width: 30rem;
            height: 30rem;
            border: 2px solid ${colors.mainBgColor};
            border-radius: 5px;
            transition: ${transitions.mainTransition};
            cursor: pointer;
            &:hover{
                box-shadow: ${shadows.shadowSecondRightBottom}
            }
        }
    }
    .feed{
        border: 2px solid ${colors.mainBgColor};
        padding: 2rem;
        .name{
            color: ${colors.secondColor};
            font-weight: 600;
            letter-spacing: ${layouts.mainSpacing};
        }
        .info{
            margin-top: 2rem;
            color: ${colors.textNormalColor};
            font-weight: 400;
        }
        .content{
            margin-top: 2rem;
            color: ${colors.priceColor};
        }
    }
   @media screen and (max-width: 768px) {
    .customer{
        grid-template-columns: 2fr 3fr;
    }
       .img-wrapper{
        img{
            width: 25rem;
            height: 25rem;
        }
    }
    .feed{
        /* padding: 1rem 0; */
        & .info{
            margin-top: 1rem;
        }
        & .content{
            margin-top: 1rem;
        }
    } 
   }
`

export default Customer