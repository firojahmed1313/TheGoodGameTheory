import { SEARCH_MOVIES, SET_PRODUCT_LIST} from "./constant"


export const productData = (state = { filtereddata: [], apiidata: [] }, action) => {
    switch (action.type) {
        case SET_PRODUCT_LIST:
            console.warn("PRODUCT_LIST condition ", action)
            console.log("firoj4")
            return {...state , apiidata: action.payload ,filtereddata:action.payload }
        
        default:
            return state
    }
}