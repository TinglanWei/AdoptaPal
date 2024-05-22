import { Navbar, Container, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';
import './css/Header.css';

export function Header() {
    return (
        <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/AdoptaPal">
                    <img src="https://i.imgur.com/EyRaLKR.jpeg" alt="AdoptaPal Logo" width="50" height="50" />
                    AdoptaPal
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Discover Pets" id="discover-pets-dropdown">
                            <NavDropdown.Item href="/AdoptaPal/dogs">Dogs</NavDropdown.Item>
                            <NavDropdown.Item href="/AdoptaPal/cats">Cats</NavDropdown.Item>
                            <NavDropdown.Item href="/AdoptaPal/others">Other Animals</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/AdoptaPal/find-owner">Find Owner</Nav.Link>
                        <Nav.Link href="/AdoptaPal/adoption-guidelines">Adoption Guidelines</Nav.Link>
                        <Nav.Link href="/AdoptaPal/about-us">About Us</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl type="text" placeholder="Search pets" className="ml-3" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
