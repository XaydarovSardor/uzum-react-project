import axios from "axios";
import API_URL from "./api";

export const getAllProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}/products`)
        return await response.data
    } catch (error) {
        console.log(error);
    }
}
export const getAllCategories = async () => {
    try {
        const response = await axios.get(`${API_URL}/products/categories`)
        return await response.data
    } catch (error) {
        console.log(error);
    }
}

export const getCategory = async (category) => {
    try {
        const response = await axios.get(`${API_URL}/products/category/${category}`)
        return await response.data
    } catch (error) {
        console.log(error);
    }
}

export const getProduct = async (product) => {
    try {
        const response = await axios.get(`${API_URL}/products/${product}`)
        return await response.data
    } catch (error) {
        console.log(error);
    }
}