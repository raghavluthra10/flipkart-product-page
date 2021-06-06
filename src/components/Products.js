import React from 'react';
import styled from 'styled-components';


const Products = ({ title,company, imageSrc, price, currency, id, ideal, size }) => {
    return (
        <ProductsContainer>
            <ProductsImage src={imageSrc} alt=''  />
            <ProductsCompany>
                {company}
            </ProductsCompany>

            <ProductsTitle>
                {title}
            </ProductsTitle>

            <ProductsPrice>
                {currency}  {price}
            </ProductsPrice>
            
            <ProductsSizes>
                {/* Sizes: {size.map((size) => ( <span> {size} </span> ))} */}
            </ProductsSizes>
        </ProductsContainer>
    )
}

export default Products

const ProductsImage = styled.img`
    height: 400px;
    width: 100%;
`;


const ProductsContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 300px;
`;

const ProductsCompany = styled.h4`
    color: gray;
`;

const ProductsTitle = styled.h5`
    font-weight: 500;
`;

const ProductsPrice = styled.h3`
    font-weight: 600;
`;

const ProductsSizes = styled.h4`
    font-weight: 500;
`;