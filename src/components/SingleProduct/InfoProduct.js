import React from 'react'
import styled from 'styled-components/macro';
import { colors, layouts } from '../../ultils/StyleVariables';
const InfoProduct = (props) => {
    const { description, id } = props;
    const {
        CPU,
        RAM,
        card,
        connector,
        design,
        hard_disk,
        operating_system,
        screen,
        size,
        special,
    } = description;
    return (
        <Wrapper>
            <h3 className="id">Mã sản phẩm: {id}</h3>
            <div className="desc">
                <div className="info">
                    <span className="label">CPU:</span>
                    <span className="value">{CPU}</span>
                </div>
                <div className="info">
                    <span className="label">RAM:</span>
                    <span className="value">{RAM}</span>
                </div>
                <div className="info">
                    <span className="label">Card:</span>
                    <span className="value">{card}</span>
                </div>
                <div className="info">
                    <span className="label">Kết nối:</span>
                    <span className="value">{connector}</span>
                </div>
                <div className="info">
                    <span className="label">Thiết kế:</span>
                    <span className="value">{design}</span>
                </div>
                <div className="info">
                    <span className="label">Ổ cứng:</span>
                    <span className="value">{hard_disk}</span>
                </div>
                <div className="info">
                    <span className="label">Hệ điều hành:</span>
                    <span className="value">{operating_system}</span>
                </div>
                <div className="info">
                    <span className="label">Màn hình:</span>
                    <span className="value">{screen}</span>
                </div>
                <div className="info">
                    <span className="label">Kích thước:</span>
                    <span className="value">{size}</span>
                </div>
                <div className="info">
                    <span className="label">Tính năng đặc biệt:</span>
                    <span className="value">{special}</span>
                </div>
            </div>
        </Wrapper>
    )
}


const Wrapper = styled.article`
    padding: 2rem;
    border-radius: 10px;
    background-color: ${colors.linkHoverColor};

    .info{
        margin: 1rem 0;
        display: grid;
        grid-template-columns: 10rem auto;
    }
    .label{
        color: ${colors.primaryColor};
        letter-spacing: ${layouts.mainSpacing};
        font-weight: 600;
    }
    .value{
        color: ${colors.textNormalColor};
        
    }
`
export default InfoProduct