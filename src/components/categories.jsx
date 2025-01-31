import { useEffect, useState } from "react"
import { getAllCategories } from "../services"
import "./category.css"
import { Link } from "react-router-dom"
export const Categories = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        const getCategories = async () => {
            try {
                const data = await getAllCategories()
                setCategories(data)
            } catch (error) {
                console.log(error);
            }
        }
        getCategories()
    }, [])

    return (
        <div className="categories">
            <div className="container">
                {categories?.length ? <ul className="categories-lists">
                    {categories?.map((category, idx) => (
                        <li key={idx} className="category">
                            <Link to={`/categories/${category}`}>{category}</Link>
                        </li>
                    ))}
                </ul> : <h3>Categoriyalar topilmadi</h3>}
            </div>
        </div>
    )
}
