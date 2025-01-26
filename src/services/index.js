import API_URL from "./api"

export const gerAllProduct = ()=>{
    fetch(`${API_URL}`/products)
}
export const getCategories = () =>{
    fetch(`${API_URL}`/categories)
}