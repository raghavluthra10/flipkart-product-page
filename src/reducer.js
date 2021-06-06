import productsList from './ProductsJSON';

export const initialState = [
    ...productsList
    // filterBrands: [...productsList]
]

const reducer = (state, action) => {
    switch(action.type){
        case 'SORT_HIGH_TO_LOW':
            return state = action.sortHighToLow;
        case 'SORT_LOW_TO_HIGH':
            return state = action.sortLowToHigh;
        case 'FILTER_WITH_BRAND':
            return state = action.filterBrand;
        default:
            return state;
    }
};

export default reducer;
