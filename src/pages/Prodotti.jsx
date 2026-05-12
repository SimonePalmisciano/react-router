import { useEffect } from "react"
import { useState } from "react"

const API_URL = "https://fakestoreapi.com/products"

function Prodotti() {
    const [products, setProducts] = useState([])

    const fetchProducts = () => {
        fetch(API_URL)
            .then(response => {
                return response.json();
            })
            .then(jsonData => {
                setProducts(jsonData);
            })
    }

    useEffect(() => {
        fetchProducts()
    }, []);

    return (
        <div className="container my-5">
            <div className="row row-gap-3">
                {products.map(product => {
                    const {
                        id,
                        title,
                        price,
                        description,
                        image
                    } = product;
                    return (
                        <div key={id} className="card bg-body-tertiary col-sm-12 col-md-6 col-lg-4">
                            <img src={image} className="img-fluid product-img" alt={name} />
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text">{description}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="">{price}€</li>
                            </ul>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Prodotti