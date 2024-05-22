import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Pet } from "../models/pet";
import { getPetById } from "../services/petService";
import { Card, Col, Row } from "react-bootstrap";
import '../components/css/petDetails.css';

export function PetDetails(){
    const { id } = useParams();
    const [pet, setPet] = useState<Pet | null>(null);

    useEffect(() => {
        if(id !== undefined){
            getPetById(Number(id)).then((pet) => {setPet(pet)})
        }
    }, [id]);

    return(
        <div className="PetDetails">
            { pet &&
            <Row className="justify-content-md-center">
                <Col lg={8}>
                    <Card className="mb-3">
                        <Row noGutters>
                            <Col md={5}>
                                <img src={`/img/${pet.image}`}/>
                            </Col>
                            <Col md={7}>
                                <Card.Body>
                                    <Card.Title as="h1">{pet.name}</Card.Title>
                                    <Card.Text>
                                        <strong>Breed:</strong> {pet.breed}
                                    </Card.Text>
                                    <Card.Text>
                                        <strong>Gender:</strong> {pet.isBoy ? 'Boy' : 'Girl'}
                                    </Card.Text>
                                    <Card.Text>
                                        <strong>Location:</strong> {pet.location}
                                    </Card.Text>
                                    <Card.Text>
                                        <strong>Vaccination:</strong> {pet.vaccinated ? 'Yes' : 'No'}
                                    </Card.Text>
                                    <Card.Text className="mb-4">
                                        {pet.description}
                                    </Card.Text>
                                    {/* Additional details or actions like buttons for adoption could go here */}
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row> }
        </div>
    )
}