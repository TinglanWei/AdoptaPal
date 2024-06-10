import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import "./css/AdoptionGuidelines.css";

const AdoptionGuidelines = () => {
  return (
    <Container className="adoption-guidelines">
      <Row className="justify-content-md-center">
        <Col xs={12} md={8}>
          <h1>Adoption Guidelines</h1>
          <p>
            Welcome to our adoption guidelines page. Here, you'll find all the
            information you need to consider before adopting a new family
            member. Our goal is to ensure you are well prepared for this big
            step.
          </p>

          <h3>Eligibility Criteria</h3>
          <ListGroup>
            <ListGroup.Item>Must be 18 years or older.</ListGroup.Item>
            <ListGroup.Item>
              Provide proof of address and identification.
            </ListGroup.Item>
            <ListGroup.Item>
              Agree to a home visit by one of our staff if required.
            </ListGroup.Item>
            <ListGroup.Item>
              Must not have a history of animal abuse.
            </ListGroup.Item>
          </ListGroup>

          <h3>Adoption Process</h3>
          <ListGroup>
            <ListGroup.Item>
              Visit our shelter or browse our online database to find a pet
              you’d like to adopt.
            </ListGroup.Item>
            <ListGroup.Item>
              Fill out the adoption application form.
            </ListGroup.Item>
            <ListGroup.Item>
              Attend an interview with our adoption counselor.
            </ListGroup.Item>
            <ListGroup.Item>
              Pay the adoption fee, which covers the cost of care, vaccinations,
              and spaying/neutering.
            </ListGroup.Item>
          </ListGroup>

          <h3>After You Adopt</h3>
          <p>
            Adopting a pet is a lifelong commitment. Here are a few tips to help
            you get started:
          </p>
          <ListGroup>
            <ListGroup.Item>
              Establish a routine for your pet, including regular feeding times,
              walks, and playtime.
            </ListGroup.Item>
            <ListGroup.Item>
              Visit a veterinarian regularly to ensure your pet stays healthy.
            </ListGroup.Item>
            <ListGroup.Item>
              Train your pet to follow simple commands to help with behavior
              management.
            </ListGroup.Item>
          </ListGroup>

          <p>
            If you have any questions or need further information, please
            contact us.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AdoptionGuidelines;
