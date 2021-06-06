import React from 'react';
import styled from 'styled-components';
import { useStateValue } from '../StateProvider';


const BrandFilter = () => {

    const [ initialState, dispatch ] = useStateValue();

    const filterByBrand = (company) => {
        // console.log(company)
        const filteredByBrands = []
        const filteredArrForBrand = initialState.filter((brand) => brand.company === company);
        const finalFilterArr = filteredByBrands.push(filteredArrForBrand)
        console.log(finalFilterArr)
    }

    return (
        <Container>
            <Heading>
                Filter By Brands:-
            </Heading>
            <form>
                {initialState.map((brand) => (
                    <div>
                        <input type='checkbox' onClick={() => filterByBrand(brand.company)} />
                        <label> {brand.company} </label>
                    </div>
                ))}
            </form>
        </Container>
    )
}

export default BrandFilter

const Container = styled.div` 
    background-color: white;
    border-radius: 5px;
    padding: 20px;
`;

const Heading = styled.h4`
    font-weight: 500;

`;