import { useEffect, useState } from "react"
import { getProduct } from "../services";
import { Link, useParams } from "react-router-dom";
import assets from "../assets";

export const Product = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams()
    useEffect(() => {
        const getProductById = async () => {
            try {
                const data = await getProduct(id);
                setProduct(data)
            } catch (error) {
                console.log(error);
            }
        }
        getProductById();
    })
    return (
        <Link to={`/products/${product.id}`} className="grid grid-cols-4 duration-300 ease rounded-lg" key={product.id}>
            <div className="flex items-center justify-center h-[302px] w-full">
                <img className="w-[190px] h-[230px] object-contain" src={product.image} alt="tovar" />
            </div>
            <div className="tovar-info p-3">
                <h3 className='tovar-name'>{product.title}</h3>
                <div className="to-basket flex justify-between items-center">
                    <div className="prices">
                        <p className='months-price'>{product.price}</p>
                        <p className="old-price"><del>{product.price}</del></p>
                    </div>
                    <div className="basket-img">
                        <img src={assets.basket} alt="basket" />
                    </div>
                </div>
            </div>
        </Link>
    )
}
