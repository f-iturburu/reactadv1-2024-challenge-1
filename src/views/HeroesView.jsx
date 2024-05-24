import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getHeroesByPublisher } from "../services/getHeroesByPublisher";
import { HeroCard } from "../components/HeroeCard";
import { SearchComponent } from "../components/SearchComponent";

export const HeroesView = () => {
  const [heroes, setHeroes] = useState();
  let { publisher } = useParams();

  useEffect(() => {
    setHeroes(getHeroesByPublisher(publisher));
  }, [publisher]);

  return (
    <>
      {!publisher ? <SearchComponent setHeroes={setHeroes} /> : null}
      <div className="d-flex flex-wrap w-100 justify-content-center">

        {heroes
          ? heroes?.map((hero) => <HeroCard key={hero.id} heroe={hero} />)
          : null}
          
        {heroes?.length == 0 ? (
          <h1>No hemos encontrado el heroe que buscabas</h1>
        ) : null}
      </div>
    </>
  );
};
