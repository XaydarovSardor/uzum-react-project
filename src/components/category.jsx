import { useEffect, useState } from "react"
import { getCategory } from "../services"
import { Link, useParams } from "react-router-dom"
import assets from "../assets";

export const Category = () => {
    const { category } = useParams();
    const [products, setProducts] = useState({});
    useEffect(() => {
        const getCategoryProduct = async () => {
            try {
                const data = await getCategory(category);
                setProducts(data);
            } catch (error) {
                console.log(error);
            }
        }
        getCategoryProduct();
    }, [products])

    return (
        <div className="container">
            <div className="flex items-stretch gap-6 justify-between py-8">
                <div className="py-4 w-[400px] flex flex-col">
                    <h3>Turkumlar</h3>
                    <div className="my-6 flex flex-col items-start px-4">
                        <button >Maishiy texnika</button>
                        <button>Elektronika</button>
                    </div>
                    <h2 className="mt-5">Narx, baho, so'm</h2>
                    <div className="flex gap-3 mt-7">
                        <input className="border p-3 placeholder:text-gray-500 text-gray-500 w-[150px] rounded-sm" type="text" placeholder="dan 129000" />
                        <input className="border p-3 placeholder:text-gray-500 text-gray-500 w-[150px] rounded-sm" type="text" placeholder="oldin 2000000" />
                    </div>
                </div>
                <div>
                    <div className="grid grid-cols-4 gap-5">
                        {products?.length ? products?.map(item => (
                            <Link to={`/products/${item.id}`} className="duration-300 ease hover:scale-[1.1] shadow-lg rounded-lg hover:shadow-xl" key={item.id}>
                                <div className="flex items-center justify-center h-[302px] w-full">
                                    <img className="w-[190px] h-[230px] object-contain" src={item.image} alt="tovar" />
                                </div>
                                <div className="tovar-info border-t border-[#000] p-3">
                                    <h3 className='tovar-name'>{item.title.length > 30 ? `${item.title.slice(0, 30)}...` : item.title}</h3>
                                    <div className="to-basket flex justify-between items-center">
                                        <div className="prices">
                                            <p className='months-price'>{item.price}</p>
                                            <p className="old-price"><del>{item.price}</del></p>
                                        </div>
                                        <div className="basket-img">
                                            <img src={assets.basket} alt="basket" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )) : <h3>Loading...</h3>}
                    </div>
                </div>
            </div>
        </div>
    )
}
