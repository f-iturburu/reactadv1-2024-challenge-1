import { heroes } from "../data/heroes";
import { publishers } from "../utils/publishers";

export const getHeroesByPublisher = (publisher) => {
  const recievedPublisher = publishers[publisher] || publishers.default;

  if (recievedPublisher) {
    return heroes.filter((hero) => hero.publisher == recievedPublisher);
  }

  return heroes;
};
