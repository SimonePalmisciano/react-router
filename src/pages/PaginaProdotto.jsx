import { useEffect, useState } from "react";
import { Container, Row, Card, Col } from "react-bootstrap";
import { useParams } from "react-router";
import { fetchProduct } from "../hooks/useFetch";

function PaginaProdotto() {
    const { productId } = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        fetchProduct(productId)
            .then(data => {
                console.log(data);
                setProduct(data)
            })
    }, [])


    return (
        <Container>
            <Card className="bg-body-tertiary text-black" >
                <Card.Header className="d-flex align-items-center">
                    <h5 className="card-title">{product.title}</h5>
                </Card.Header>
                <img src={product.image} className="img-fluid product-img" alt={product.name} />
                <Card.Body>
                    <p className="card-description">{product.description}</p>
                </Card.Body>
                <ul className="list-group list-group-flush text-center">
                    <li className="fw-bold fs-4"> {product.price} &euro; </li>
                </ul>
            </Card>
        </Container>
    )
}
export default PaginaProdotto;


