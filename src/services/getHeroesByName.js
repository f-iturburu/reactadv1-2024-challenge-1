import { heroes } from "../data/heroes";

export const getHeroesByName = (value) => {
  const foundHeroes = heroes.filter((hero) => {
    return hero.superhero.toLowerCase().includes(value.toLowerCase());
  });
  return foundHeroes;
};
