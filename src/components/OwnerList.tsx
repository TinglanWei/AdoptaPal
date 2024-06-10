import { useEffect, useState } from "react";
import { Adoption } from "../models/AdoptionForm";
import { postAdoption } from "../services/adoptionService";
import { Col, Container, Row } from "react-bootstrap";
import { OwnerCard } from "./OwnerCard";
import "./css/OwnerList.css";

export function OwnerList() {
  const [owner, setOwner] = useState<Adoption[]>([]);

  useEffect(() => {
      postAdoption().then((owner) => setOwner(owner));
  }, []);

  return (
    <div className="OwnerList">
      <Container className="featured-owner">
        <h2>Connect with our shelters and individual owners</h2>
      </Container>
      <Row className="g-4 justify-content-center">  {/* g-4 provides gap, justify-content-center centers the items */}
        {owner.map((own) => (
          <Col lg={4} md={6} sm={12} > {/* Responsive columns */}
            <OwnerCard owner={own} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
