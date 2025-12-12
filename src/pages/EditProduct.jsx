import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Form, Button, Container, Spinner } from "react-bootstrap";

function EditProduct() {
  const { id } = useParams();

  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      setProduct({
        title: res.data.title,
        price: res.data.price,
        description: res.data.description,
        category: res.data.category,
      });
      setLoading(false);
    });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`https://fakestoreapi.com/products/${id}`, product).then(() => {
      alert("Product updated successfully!");
    });
  };

  if (loading) {
    return <Spinner animation="border" className="m-5" />;
  }

  return (
    <Container className="mt-4">
      <h3>Edit Product</h3>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mt-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={product.title}
            onChange={(e) => setProduct({ ...product, title: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mt-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mt-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={product.description}
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mt-3">
          <Form.Label>Category</Form.Label>
          <Form.Control
            value={product.category}
            onChange={(e) =>
              setProduct({ ...product, category: e.target.value })
            }
          />
        </Form.Group>

        <Button type="submit" className="mt-3">
          Update Product
        </Button>
      </Form>
    </Container>
  );
}

export default EditProduct;
