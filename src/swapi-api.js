import fetch from 'node-fetch';

const getSwapiPageGenerator = (entity) => {
  return async function* () {
    let nextPage = `https://swapi.dev/api/${entity}/`;
    do {
      const response = await fetch(nextPage);
      const data = await response.json();
      nextPage = data.next;
      yield data.results;
    } while (nextPage);
  };
};

const swapiEntities = {
  people: {
    [Symbol.asyncIterator]: getSwapiPageGenerator('people'),
  },
  planets: {
    [Symbol.asyncIterator]: getSwapiPageGenerator('planets'),
  },
  films: {
    [Symbol.asyncIterator]: getSwapiPageGenerator('films'),
  },
  species: {
    [Symbol.asyncIterator]: getSwapiPageGenerator('species'),
  },
  vehicles: {
    [Symbol.asyncIterator]: getSwapiPageGenerator('vehicles'),
  },
  starships: {
    [Symbol.asyncIterator]: getSwapiPageGenerator('starships'),
  },
};

const swapi = {
  getPeople: () => swapiEntities.people,
  getPlanets: () => swapiEntities.planets,
  getFilms: () => swapiEntities.films,
  getSpecies: () => swapiEntities.species,
  getVehicles: () => swapiEntities.vehicles,
  getStarships: () => swapiEntities.starships,
};

// log all swapi just for testing
for (const entity of Object.keys(swapiEntities)) {
  for await (const page of swapiEntities[entity]) {
    console.log(page);
  }
}

export default swapi;
