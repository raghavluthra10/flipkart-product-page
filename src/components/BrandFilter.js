import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useStateValue } from '../StateProvider';


const BrandFilter = () => {
    // use useEffect to put filter and remove it

    const [ initialState, dispatch ] = useStateValue();


    const filterBrandsWithThisArray = [];
    const newArr = [];

    const filterByBrand = (company) => {
        filterBrandsWithThisArray.push(company);
         
        const newArr = [];

            for(let arr in initialState) {
                for(let filter in filterBrandsWithThisArray) {
                   if(initialState[arr].company === filterBrandsWithThisArray[filter]) {
                        newArr.push(initialState[arr])
                        
                        
                }
    
            }
           
        }
                        // dispatch({
                        //     type: 'FILTER_WITH_BRAND',
                        //     filterBrand: newArr,
                        // })

            console.log(newArr)
    }



    return (
        <Container>
            <Heading>
                Filter By Brands:-
            </Heading>
            <form>
                    <div>
                        <input type='checkbox' name='Raymond' onClick={(e) => filterByBrand(e.target.name)} />
                        <label> Raymond </label>
                    </div>
                    <div>
                        <input type='checkbox' name='Jack & Jones' onClick={(e) => filterByBrand(e.target.name)} />
                        <label> Jack & Jones </label>
                    </div>
                    <div>
                        <input type='checkbox' name='Calvin Klein Jeans' onClick={(e) => filterByBrand(e.target.name)} />
                        <label> Calvin Klein Jeans </label>
                    </div>
                    <div>
                        <input type='checkbox' name='Tommy Hilfiger' onClick={(e) => filterByBrand(e.target.name)} />
                        <label> Tommy Hilfiger </label>
                    </div>
                    <div>
                        <input type='checkbox' name='SG RAJSAHAB' onClick={(e) => filterByBrand(e.target.name)} />
                        <label> SG RAJSAHAB </label>
                    </div>
                    <div>
                        <input type='checkbox' name='Superdry' onClick={(e) => filterByBrand(e.target.name)} />
                        <label  > Superdry </label>
                    </div>
               
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