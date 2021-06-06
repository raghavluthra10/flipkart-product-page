import productsList from './ProductsJSON';
// import  { useState } from 'react';

// export const [ initialState, setInitialState ] = useState([...productsList]);
export const initialState = [
    ...productsList
]

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'SORT_HIGH_TO_LOW':
            return state = action.sortHighToLow;
        case 'SORT_LOW_TO_HIGH':
            return state = action.sortLowToHigh;
        default:
            return state;
    }
};

export default reducer;
