import { useState } from "react";
import axios from "axios";
import { Form, Button, Container } from "react-bootstrap";

function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (
      !title.trim() ||
      !price.trim() ||
      !description.trim() ||
      !category.trim()
    ) {
      setError("All fields are required.");
      return;
    }

    setError("");

    axios
      .post("https://fakestoreapi.com/products", {
        title: title,
        price: price,
        description: description,
        category: category,
      })
      .then(() => {
        alert("Product created!");
        setTitle("");
        setPrice("");
        setDescription("");
        setCategory("");
      });
  };

  return (
    <Container className="mt-4">
      <h3>Add Product</h3>

      <Form onSubmit={handleSubmit} className="mt-3">
        {/* Title */}
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            isInvalid={!!error && !title}
          />
        </Form.Group>

        {/* Price */}
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            isInvalid={!!error && !price}
          />
        </Form.Group>

        {/* Description */}
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            isInvalid={!!error && !description}
          />
        </Form.Group>

        {/* Category */}
        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Control
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            isInvalid={!!error && !category}
          />
        </Form.Group>

        {/* Error Message */}
        {error && <p className="text-danger">{error}</p>}

        <Button type="submit" className="mt-2">
          Create
        </Button>
      </Form>
    </Container>
  );
}

export default AddProduct;
