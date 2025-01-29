import React, { useState } from 'react'
import { getCategory } from '../services'
import "../pages/home.css"
export const Mens = () => {
    const [category, setCategory] = useState([])
    const data = getCategory("men's clothing")
    setCategory(data)
    return (
        <div className="container">
            <div className="tovar-cards">
                {category?.length ? category.map(item => (
                    <div className="tovar" key={item.id}>
                        <div className="tovar-img">
                            <img src={item.image} alt="tovar" />
                        </div>
                        <div className="tovar-info">
                            <h3 className='tovar-name'>{item.title.length > 30 ? `${item.title.slice(0, 30)}...` : item.title}</h3>
                            <p className='months-price'>{item.price}</p>
                            <div className="to-basket">
                                <div className="prices">
                                    <p className="old-price"><del>{item.price}</del></p>
                                    <p className="new-price">{item.price}</p>
                                </div>
                                <div className="basket-img">
                                    <img src="./src/assets/to-basket.svg" alt="basket" />
                                </div>
                            </div>
                        </div>
                    </div>
                )) : "Loading..."}
            </div>
        </div>
    )
}
