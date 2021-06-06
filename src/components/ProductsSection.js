import React, { useState } from 'react';
import './ProductsSection.css';
import Products from './Products';
import Button from '@material-ui/core/Button';
import { useStateValue } from '../StateProvider';

const ProductsSection = () => {

    const [ initialState, dispatch ] = useStateValue();

    const lowToHigh = () => {
        const lowHigh = initialState.map(p => p).sort((a,b) => a.price - b.price);
        dispatch({
            type: 'SORT_LOW_TO_HIGH',
            sortLowToHigh: lowHigh,
        })
    };

    const highToLow = () => {
        const highLow = initialState.map(p => p).sort((a,b) => a.price - b.price).reverse();
        dispatch({
            type: 'SORT_HIGH_TO_LOW',
            sortHighToLow: highLow,
        })
    };

    return (
        <div className='productsSection'>
            <div className='productsSection__intro'>
                <h5>
                    Home  >  Clothing and ...
                </h5>

                <p>
                    Given how powerful social media has become these days, everyone around
                    the world wants to look their best at all times. Thus, the right clothing
                    and accessories are almost always in demand. Good-quality shirts, T-shirts,
                    trousers, jeans, shorts, tops, sarees, kurtis, lehenga, dresses, skirts, bra,
                    innerwear, and more are some of the examples that people love and need to wear
                    . Watches, earrings, rings, bracelets, chains, etc can accentuate the look of
                    every outfit. Thus, it’s important to wear complementing accessories when you dress up in your finest
                </p>
            </div>

            <div className='productsSection__sort'>
                <h4>
                    Clothing And Accessories <span> (Showing 1 – 40 products of 81,470 products) </span>
                </h4>

                <div>
                    <Button color='primary' className='productsSection__sortButton' onClick={highToLow}> 
                        Price-- High to Low 
                    </Button>

                    <Button color='primary' onClick={lowToHigh}>
                        Price--Low to High 
                    </Button>
                </div>
            </div>

            <div className='productsSection__products'>
                {initialState.map((products) => (
                    <Products 
                    title={products.title}
                    imageSrc={products.imageSrc}
                    company={products.company}
                    price={products.price}
                    currency={products.currency}
                    id={products.id}
                    ideal={products.ideal}
                    size={products.size}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductsSection;
