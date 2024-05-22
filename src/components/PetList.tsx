import { useEffect, useState } from "react";
import { Pet } from "../models/pet";
import { getPets } from "../services/petService";
import { Col, Row } from "react-bootstrap";
import { PetCard } from "./PetCard";
import "./css/PetList.css";

export function PetList() {
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    getPets().then((pets) => setPets(pets));
  }, []);

  return (
    <div className="PetList">
      <Row className="g-4 justify-content-center">  {/* g-4 provides gap, justify-content-center centers the items */}
        {pets.map((pet) => (
          <Col lg={4} md={6} sm={12} key={pet.id}> {/* Responsive columns */}
            <PetCard pet={pet} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
