import React from 'react'
import styled from 'styled-components/macro'
import { colors, transitions, shadows } from '../../ultils/StyleVariables'
import { FaAngleDown } from "react-icons/fa";
import { filter_brands, filter_more, filter_price } from '../../ultils/constant';
import { useGlobalContext } from '../../GlobalContext';
import { Button } from '@mui/material';
const Filter = () => {
    const { setTempProducts, products } = useGlobalContext();
    const handleFilterBrands = (query) => {
        const result = products.filter((item) => {
            if (item.brand === query) {
                return true;
            }
            return false;
        })
        setTempProducts(result)
    }

    const handleFilterMore = (query) => {
        let result;
        if (query === "a_to_z") {
            result = products.sort((a, b) => {
                return a.name.localeCompare(b.name);
            })
        }
        else if (query === "z_to_a") {
            result = products.sort(function (a, b) {
                return b.name.localeCompare(a.name);
            })
        }
        else if (query === "hight_to_low") {
            result = products.sort((a, b) => {
                return b.sale_off_price - a.sale_off_price;
            })
        }
        else if (query === "low_to_high") {
            result = products.sort((a, b) => {
                return a.sale_off_price - b.sale_off_price;
            })
        }
        else if (query === "on_sale") {
            result = products.filter((item) => {
                if (item.on_sale === true) {
                    return true;
                }
                return false
            })
        }
        setTempProducts([...result])
    }

    const handleFilterPrice = (query) => {
        console.log(query);
        let result;
        if (query === "8_to_10") {
            result = products.filter((item) => {
                if (item.sale_off_price >= 8000000 && item.sale_off_price < 10000000) {
                    return true;
                }
                return false;
            })
        }
        if (query === "10_to_15") {
            result = products.filter((item) => {
                if (item.sale_off_price >= 10000000 && item.sale_off_price < 15000000) {
                    return true;
                }
                return false;
            })
        }
        if (query === "15_to_20") {
            result = products.filter((item) => {
                if (item.sale_off_price >= 15000000 && item.sale_off_price < 20000000) {
                    return true;
                }
                return false;
            })
        }
        if (query === "20_to_30") {
            result = products.filter((item) => {
                if (item.sale_off_price >= 20000000 && item.sale_off_price < 30000000) {
                    return true;
                }
                return false;
            })
        }
        if (query === "30_up") {
            result = products.filter((item) => {
                if (item.sale_off_price > 30000000) {
                    return true;
                }
                return false;
            })
        }
        setTempProducts([...result]);
    }
    return (
        <Wrapper>
            <div className='section-center'>
                <div className="filter">
                    <h3 className="filter-label">Lọc danh sách:</h3>
                    <div className="filter-content">
                        <div className="filter-item">
                            <h4 className="sub-title">Hãng:
                                <FaAngleDown />
                            </h4>
                            <ul className="sub-list">
                                {filter_brands.map((item) => {
                                    const { id, query, text } = item;
                                    return <Button onClick={() => {
                                        handleFilterBrands(query);
                                    }} key={id}>{text}</Button>
                                })}
                            </ul>
                        </div>
                        <div className="filter-item">
                            <h4 className="sub-title">Giá:
                                <FaAngleDown />
                            </h4>
                            <ul className="sub-list">
                                {filter_price.map((item) => {
                                    const { id, text, query } = item;
                                    return <Button onClick={() => {
                                        handleFilterPrice(query)
                                    }} key={id}>
                                        {text}
                                    </Button>
                                })}
                            </ul>
                        </div>

                        <div className="filter-item">
                            <h4 className="sub-title">Sắp xếp theo:
                                <FaAngleDown />
                            </h4>
                            <ul className="sub-list">
                                {filter_more.map((item) => {
                                    return <Button key={item.id} onClick={() => {
                                        handleFilterMore(item.query);
                                    }}>
                                        {item.text}
                                    </Button>
                                })}
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
.filter{
    position: relative;
    display: flex;
    justify-content: flex-end;
    gap: 3rem;
        padding: 1rem;
        border-radius: 10px;
        background-color: ${colors.linkHoverColor};
    }
    .filter-label{
        color: ${colors.secondColor};
        display: flex;
        align-items: center;
        font-weight: 600;
    }
    .filter-content{
        display: flex;
        gap: 3rem;
    }
    .sub-title{
        display: flex;
        align-items: center;
        svg{
            font-size: 1.5rem;
        }
        &:hover{
            cursor: pointer;
        }
    }
    
    .filter-item{
        padding: 1rem;
            transition: ${transitions.mainTransition};
        &:hover{
            color: ${colors.primaryColor};
            .sub-list{
                display: grid;
            }
        }
    }
    .sub-list{
        display: none;
        position: absolute;
        right: 0;
        left: 0;
        background-color: ${colors.linkHoverColor};
        padding: 2rem;
        border-radius: 1rem;
        box-shadow: ${shadows.shadowThirdRightBottom};
        color: ${colors.textNormalColor};
        grid-template-columns: repeat(3,1fr);
        gap: 1rem;
        z-index: 10;
        button{
            font-size: 1.4rem;
            cursor: pointer;
            text-transform: capitalize;
            transition: ${transitions.mainTransition};
        }
        button:hover{
            color: ${colors.primaryColor};
        }
    }
    `

export default Filter
