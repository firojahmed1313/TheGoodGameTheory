import {combineReducers} from 'redux'
import {productData} from './productReducer'
export default combineReducers({
    apidata:productData,
})