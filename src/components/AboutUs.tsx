import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './css/AboutUs.css';

const AboutUs = () => {
  return (
    <Container className="about-us my-5">
      <Row>
        <Col xs={12}>
          <h1 className="text-center">About Us</h1>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col xs={12}>
          <Card>
            <Card.Body>
              <Card.Title>AdoptaPal</Card.Title>
              <Card.Text>
                AdoptaPal is a cool platform that connects people wanting to adopt pets with shelters and individual fosters. They’re all about growing a supportive pet community, making sure every animal finds a loving home. By encouraging open communication and strong relationships, AdoptaPal really helps improve the lives of pets and boosts adoption success.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col xs={12}>
          <Card>
            <Card.Body>
              <Card.Title>Author</Card.Title>
              <Card.Text>
                This is a static responsive web app project built using React and Typescript. Access the repository through:
                <a href="https://github.com/TinglanWei/AdoptaPal" target="_blank" rel="noopener noreferrer"> GitHub</a>.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;
