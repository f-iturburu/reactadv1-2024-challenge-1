import React from "react";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const HeroCard = ({heroe}) => {
  return (
    <Card style={{ width: '18rem' }} className='m-3'>
        <Card.Img variant="top" src={heroe.url} style={{height:"300px", objectFit: "cover", objectPosition: "top",}}/>
        <Card.Body>
        <Card.Title>{heroe.superhero}</Card.Title>
        <p>{heroe.alter_ego}</p>       
        <Card.Text>{heroe.first_appearance}</Card.Text>       
        <Link className='btn btn-dark' to={`/hero/${heroe.id}`}>Ver Mas</Link>
        </Card.Body>
    </Card>
  )
}