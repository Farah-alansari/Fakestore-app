import { Container, Button } from "react-bootstrap";

function Home() {
  return (
    <Container className="mt-5 text-center">
      <h2 className="mb-3">Welcome to FakeStore</h2>
      <p className="mb-4">
        This is a simple React app for shop using FakeStoreAPI.
      </p>
      <Button href="/products" varient="primary" className="mt-3">
        View Products
      </Button>
    </Container>
  );
}

export default Home;
