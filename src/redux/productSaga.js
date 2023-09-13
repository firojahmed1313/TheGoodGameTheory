import { takeEvery, put } from 'redux-saga/effects'
import { PRODUCT_LIST,SEARCH_PRODUCT, SET_PRODUCT_LIST } from './constant';
import { httpGet } from '../utils/api.js';


function* getProducts() {
    console.log("firoj3")

    try {    
        let { data } = yield httpGet("https://api.punkapi.com/v2/beers");
        console.warn("product saga is called", data)
        yield put({type: SET_PRODUCT_LIST, payload: data})
    } catch (error) {
        console.warn(error)
    }
    
}

function* searchProducts(searchTerm) {
    try {
        const searchTer=searchTerm.payload
        const url=`https://api.punkapi.com/v2/beers?beer_name=${searchTer}`
        console.log(url)
        let { data } = yield httpGet(url);
        console.warn("searchProducts saga is called", data)
        console.log("r2")
        yield put({type: SET_PRODUCT_LIST, payload: data})
    } 
    catch (error) {
        console.warn(error)
    }
    
    
}

function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProducts)
    yield takeEvery(SEARCH_PRODUCT, searchProducts)
}

export default productSaga;


