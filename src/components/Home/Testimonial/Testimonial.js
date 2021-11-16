import React from 'react';
import { Card } from 'react-bootstrap';
import './Testimonial.css'

const Testimonial = ({testimonial}) => {
    const {name, quote, from, img} = testimonial;
    return (
        <Card style={{ width: '18rem' }} className=" container p-3">
                <Card.Title>{quote}</Card.Title>
                <Card.Body className="card-info d-flex justify-content-between">
                    <div>
                        <Card.Img variant="top" src={img} />
                    </div>
                    <div>
                        <Card.Text style={{color: '#1CC7C1', fontWeight: 'bold'}} className="fw-bold">{name}</Card.Text>
                        <Card.Text>{from}</Card.Text>
                    </div>
                </Card.Body>
        </Card>
    );
};

export default Testimonial;