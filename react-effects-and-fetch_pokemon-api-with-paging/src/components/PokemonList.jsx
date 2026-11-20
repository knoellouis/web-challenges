import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [offSet, setOffset] = useState(0);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${offSet}`,
        );
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [offSet]);

  const loadNextPage = () => {
    setOffset(offSet + 20);
  };
  const loadPreviousPage = () => {
    offSet >= 20 ? setOffset(offSet - 20) : setOffset(0);
  };

  return (
    <main>
      <button type="button" onClick={loadPreviousPage}>
        Previous Page
      </button>
      <button type="button" onClick={loadNextPage}>
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
