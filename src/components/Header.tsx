import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './css/Header.css';

export function Header() {
    return (
        <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">
                    <img src="/img/logo.jpg" alt="AdoptaPal Logo" width="50" height="50" />
                    AdoptaPal
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Discover Pets" id="discover-pets-dropdown">
                            <NavDropdown.Item href="/dogs">Dogs</NavDropdown.Item>
                            <NavDropdown.Item href="/cats">Cats</NavDropdown.Item>
                            <NavDropdown.Item href="/others">Other Animals</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/find-owner">Find Owner</Nav.Link>
                        <Nav.Link href="/adoption-guidelines">Adoption Guidelines</Nav.Link>
                        <Nav.Link href="/about-us">About Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
