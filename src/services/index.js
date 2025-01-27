import API_URL from "./api"

export const getAllProduct = ()=>{
    fetch(`${API_URL}`/products)
}
export const getCategories = () =>{
    fetch(`${API_URL}/products/categories`)
}