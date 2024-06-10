import { Card } from "react-bootstrap";
import { Adoption } from "../models/AdoptionForm";

interface OwnerCardProps {
  owner: Adoption;
}

export function OwnerCard(props: OwnerCardProps) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          <strong>{props.owner.firstName} {props.owner.lastName}</strong>
        </Card.Title>
        {props.owner.aboutSelf}
      </Card.Body>
      <Card.Footer>
        <Card.Text>
          Contact: {props.owner.phoneNumber}
        </Card.Text>
        <Card.Text>
          {props.owner.email}
        </Card.Text>
      </Card.Footer>
    </Card>
  );
}
