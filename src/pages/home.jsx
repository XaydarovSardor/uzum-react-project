import { useEffect } from "react"
import "./home.css"
function Home() {
    // const [products, setProducts] = useState([])
    // useEffect(() => {  // ✅ useEffect JSX dan tashqarida bo'lishi kerak!
    //     fetch("https://fakestoreapi.com/products")
    //         .then(res=>res.json())
    //         .then(data=>console.log(data))
    // }, []);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(data => console.log(data))
    }, [])
    return (
        <main className='home'>
            <section className="intro-section">
                <div className="container"></div>
            </section>
            <section className="tovars">
                <div className="container">

                    <div className="title-box">
                        <h3 className='title'>Arzon narxlar</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4017 24.9974C13.9889 24.533 14.0308 23.8218 14.4952 23.409L20.2992 18.2499L14.4952 13.0907C14.0308 12.6779 13.9889 11.9669 14.4017 11.5025C14.8145 11.0381 15.5256 10.9963 15.99 11.409L22.74 17.409C22.9802 17.6226 23.1176 17.9286 23.1176 18.2499C23.1176 18.5712 22.9802 18.8772 22.74 19.0907L15.99 25.0907C15.5256 25.5035 14.8145 25.4618 14.4017 24.9974Z" fill="#1F2026" />
                        </svg>
                    </div>
                    <div className="tovar-cards">
                        {products?.length ? products.map(item => (
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
                        )) : "-"}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home