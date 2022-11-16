import React from "react";
import styled from "styled-components/macro";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { colors, layouts } from "../ultils/StyleVariables";
import { useGlobalContext } from "../GlobalContext";
import { useParams } from "react-router-dom";
import SlideProduct from "../components/SingleProduct/SlideProduct"
import InfoProduct from "../components/SingleProduct/InfoProduct"
const SingleProduct = () => {
  const product_id = useParams().product_id;
  const { products, setTempProducts } = useGlobalContext();

  const thisProduct = products.filter((product, index) => {
    if (product.id === product_id) {
      return true;
    }
    return false;
  })[0];

  const { description, colors, id } = thisProduct;
  return (
    <SingleWrapper>
      <div className="section-center">
        <Button className="hero-btn">
          <Link onClick={() => {
            setTempProducts(products);
          }} to="/products">Trở về trang sản phẩm</Link>
        </Button>
        <div className="product">
          <SlideProduct {...thisProduct} />
          <InfoProduct description={description} id={id} />
        </div>
      </div>
    </SingleWrapper>
  );
};

const SingleWrapper = styled.main`
  padding-top: 2rem;
  .hero-btn {
    border: 2px solid ${colors.mainBgColor};
    &:hover {
      background-color: ${colors.mainBgColor};
      border-color: ${colors.primaryColor};
    }
    a {
      color: ${colors.primaryColor};
      font-weight: 600;
      letter-spacing: ${layouts.mainSpacing};
    }
  }
  .product{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin: 2rem 0;
  }

  @media screen and (max-width: 991px){
     .product{
   
    grid-template-columns: 1fr;
    
  }
  }
`;

export default SingleProduct;
