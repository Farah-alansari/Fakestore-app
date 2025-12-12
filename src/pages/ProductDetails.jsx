import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Button, Spinner, Card } from "react-bootstrap";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data));
  }, [id]);

  if (!product) return <Spinner animation="border" className="m-5" />;

  return (
    <Container className="mt-4">
      <Card className="p-4">
        <div className="d-flex">
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "250px", marginRight: "30px" }}
          />
          <div>
            <h2>{product.title}</h2>
            <h4>${product.price}</h4>
            <p>{product.description}</p>
            <p>
              <strong>Category:</strong> {product.category}
            </p>

            <Button
              href={`/edit-product/${id}`}
              variant="primary"
              className="me-3"
            >
              Edit
            </Button>

            <Button
              variant="danger"
              onClick={() => {
                if (!confirm("Are you sure you want to delete this product?"))
                  return;
                axios
                  .delete(`https://fakestoreapi.com/products/${id}`)
                  .then(() => {
                    alert("Product Deleted.");
                    window.location.href = "/products";
                  });
              }}
            >
              Delete
            </Button>
          </div>
        </div>
      </Card>
    </Container>
  );
}

export default ProductDetails;
