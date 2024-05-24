import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const HeroDetail = ({hero}) => {
  return (
    <section className='mx-auto px-2 px-sm-5 px-md-0 mt-5 d-flex justify-content-center'>
      <div className='row justify-content-center '>
        <article className="col-lg-4 text-center px-0">
            <img src={hero.url} className='rounded-start img-fluid' width={500} height={200}/>
        </article>
        <article className="col-lg-8">
            <h2>{hero.superhero}</h2>
            <p className='fw-bold'>Publisher: <span className='fw-normal'>{hero.publisher}</span></p>
            <p className='fw-bold'>Alter ego: <span className='fw-normal'>{hero.alter_ego}</span></p>
            <p className='fw-bold'>First_appearance: <span className='fw-normal'>{hero.first_appearance}</span></p>
            <p className='fw-bold'>Characters: <span className='fw-normal'>{hero.characters} </span></p>
            <Button as={Link} to="/" variant="primary" className='btn btn-primary'>Regresar</Button>
        </article>
      </div>

    </section>
  )
}
