import React from 'react';
import styled from 'styled-components';
import FiltersSection from './FiltersSection';
import ProductsSection from './ProductsSection';

const Bottom = () => {
    return (
        <ContainerBottom>
            <FiltersSection  />
            <ProductsSection  />
        </ContainerBottom>
    )
}

export default Bottom


const ContainerBottom = styled.div`
    height: 100%;
    display: flex;
`;