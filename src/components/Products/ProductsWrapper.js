import React from "react";
import styled from "styled-components/macro";
import { colors, transitions, layouts } from "../../ultils/StyleVariables";
import { useGlobalContext } from "../../GlobalContext";
import Product from "../Home/Product";
import { Button } from "@mui/material";
const ProductsWrapper = () => {
  const { tempProducts, setTempProducts, products } = useGlobalContext();
  const handleSeeAll = () => {
    setTempProducts(products);
  }
  return (
    <Wrapper>
      <div className="section-center">
        <Button onClick={() => {
          handleSeeAll();
        }} className="see-all">tất cả sản phẩm</Button>
        <div className="wrapper">
          {tempProducts.map((item, index) => {
            const { id } = item;
            return <Product key={id} index={index} {...item} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .section-center {
    margin: 4rem auto;
  }
  .see-all{
    padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        border: 2px solid transparent;
        background-color: ${colors.mainBgColor};
        text-transform: uppercase;
        font-size: 1.4rem;
        margin-bottom:  2rem;
        &:hover{
            color: ${colors.primaryColor};
            border: 2px solid ${colors.primaryColor};
        }
    }
  .wrapper {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
  }
  @media screen and (max-width: 1200px) {
    .wrapper {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  @media screen and (max-width: 991px) {
    .wrapper {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media screen and (max-width: 768px) {
    .wrapper {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (max-width: 576px) {
    .wrapper {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
export default ProductsWrapper;
