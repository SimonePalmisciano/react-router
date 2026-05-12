import { useState } from "react";
import { Container, Row, Card, Col } from "react-bootstrap";

function PaginaProdotto() {
    const [product, setProduct] = useState({});

    return (
        <Container>
            <Card className="bg-body-tertiary text-black" >
                <Card.Header className="d-flex align-items-center">
                    <h5 className="card-title">{title}</h5>
                </Card.Header>
                <img src={image} className="img-fluid product-img" alt={name} />
                <Card.Body>
                    <p className="card-description">{description}</p>
                </Card.Body>
                <ul className="list-group list-group-flush text-center">
                    <li className="fw-bold fs-4"> {price} &euro; </li>
                </ul>
            </Card>
        </Container>
    )
}
export default PaginaProdotto