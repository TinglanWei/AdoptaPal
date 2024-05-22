import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Footer = () => {
    return (
        <Navbar bg="dark" variant="dark" className="navbar-fixed-bottom">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src="https://i.imgur.com/EyRaLKR.jpeg"
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                        alt="AdoptaPal Logo"
                    />
                    AdoptaPal
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="https://github.com/TinglanWei/AdoptaPal" target="_blank">
                        Contact author @github
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Footer;
