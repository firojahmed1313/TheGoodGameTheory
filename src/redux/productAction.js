import { PRODUCT_LIST ,SEARCH_PRODUCT } from "./constant"

export const productList = () => {
    console.log("firoj2")

    return {
        type: PRODUCT_LIST,
    }
}
export const productSearch = (query) => {
    console.log(query)
    console.log("r1")

    return {
        type: SEARCH_PRODUCT,
        payload:query
    }
}
