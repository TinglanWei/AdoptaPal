import { Card } from "react-bootstrap";
import { Pet } from "../models/pet";
import '../components/css/PetCard.css';
import { Link } from "react-router-dom";

interface PetCardProps{
    pet : Pet
}

export function PetCard(props:PetCardProps){
    return(
        <Card>
            <Card.Img variant="top" src={`${props.pet.image}`}></Card.Img>
            <Card.Body>
                <Card.Title>{props.pet.name} ({props.pet.breed})</Card.Title>
                {props.pet.description}
            </Card.Body>
            <Card.Footer>
                <Link to={`/AdoptaPal/adoptions/${props.pet.id}`} className="btn btn-primary ml-2">Adopt Me</Link>
                <Link to={`/AdoptaPal/details/${props.pet.id}`} className="btn btn-secondary ml-2">Details</Link>
            </Card.Footer>
        </Card>
    )
}