import React from 'react';
import BrandFilter from './BrandFilter';
import styled from 'styled-components';

const FiltersSection = () => {
    return (
        <Container className='filtersSeection' >
                <BrandFilter  />
                {/* size filter */}
                {/* gender */}
        </Container>
    )
}

export default FiltersSection

const Container = styled.div`
    flex: 0.2;
    padding: 10px;
    background-color: rgb(240,242,245);
`;