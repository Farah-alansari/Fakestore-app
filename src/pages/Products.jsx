import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button, Row, Col, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) return <Spinner animation="border" className="m-5" />;

  return (
    <Row className="m-4">
      {products.map((product) => (
        <Col md={4} key={product.id} className="mb-4">
          <Card>
            <Card.Img variant="top" src={product.image} height="250" />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>${product.price}</Card.Text>
              <Button
                as={Link}
                to={"/products/" + product.id}
                className="btn btn-primary"
              >
                View Details
              </Button>

              <Button
                as={Link}
                to={"/edit-product/" + product.id}
                className="btn btn-warning ms-2"
              >
                Edit
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Products;
