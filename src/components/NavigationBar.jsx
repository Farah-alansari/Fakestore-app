import { Navbar, Nav, Container } from "react-bootstrap";

function NavigationBar() {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Navbar.Brand href="/" style={{ fontWeight: "700" }}>
          FakeStore
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" style={{ fontWeight: "500" }}>
              Home
            </Nav.Link>
            <Nav.Link href="/products" style={{ fontWeight: "500" }}>
              Products
            </Nav.Link>
            <Nav.Link href="/add-product" style={{ fontWeight: "500" }}>
              Add Product
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
