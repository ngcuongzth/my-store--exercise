import React from 'react'
import { featureProducts } from '../../ultils/constant'
import { colors, layouts } from '../../ultils/StyleVariables'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import featuredIcon from '../../img/featured_products.svg'
import Product from './Product';
import { Button } from '@mui/material';
const FeatureProducts = () => {
    // console.log(featureProducts)
    return (
        <FeatureWrapper>
            <div className="section-center">
                <header>
                    <h1 className="title-section">
                        Sản phẩm nổi bật
                    </h1>
                    <img src={featuredIcon} alt="feature-img" />
                </header>
                <article className="products">
                    {featureProducts.map((item, index) => {
                        return <Product key={item.id} index={index} {...item} />
                    })}
                </article>
                <div className="btn-wrapper">
                    <Button sx={{ minWidth: "unset", padding: 0 }} className='normal-btn'>
                        <Link to="/products">Xem thêm</Link>
                    </Button>
                </div>
            </div>
        </FeatureWrapper>
    )
}

const FeatureWrapper = styled.section`
 .section-center {
    padding-top: 4rem;
  }
  header{
    display: flex;
    align-items: flex-end;
    gap: 2rem;
    img{
        width: 4rem;
        height: 4rem;
    }
  }
  .products{
    display: grid;
    grid-template-columns: repeat(5,1fr);
    gap: 3rem;
    margin: 3rem 0;
  }

  .btn-wrapper{
    display: flex;
    justify-content: center;
    button{
        border-radius: 0.5rem;
        border: 2px solid transparent;
        background-color: ${colors.mainBgColor};
        text-transform: inherit;
        &:hover{
            color: ${colors.primaryColor};
            border: 2px solid ${colors.primaryColor};
        }
    }
    a{
        padding: 0.5rem 1rem;
        color: inhrit;
        letter-spacing: ${layouts.mainSpacing};
        font-weight: 600;
    }
  }
  @media screen and (max-width: 1200px){
    .products{
        grid-template-columns: repeat(4,1fr);
    }
  }
  @media screen and (max-width: 991px){
    .products{
        grid-template-columns: repeat(3,1fr);
    }
  }
  @media screen and (max-width: 768px){
    .products{
        grid-template-columns: repeat(2,1fr);
    }
  }
    @media screen and (max-width: 576px){
        .products{
            grid-template-columns: repeat(1,1fr);
        }
  }
 
`



export default FeatureProducts