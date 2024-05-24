import React from 'react'
import { getHeroById } from '../services/getHeroById'
import { useParams } from 'react-router-dom';
import { HeroDetail } from '../components/HeroDetail';

export const HeroDetailView = () => {
    let { heroId } = useParams();
    const hero = getHeroById(heroId)

  return (
    hero.map(hero => <HeroDetail hero={hero}/>)
  )
}
