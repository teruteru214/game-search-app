import { useState } from "react";
import axios from "axios";

interface PokemonData {
  name: string;
  sprites: {
    front_default: string;
  };
}

const PokemonSearch = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);

  const searchPokemon = async () => {
    try {
      const encodedName = encodeURIComponent(pokemonName);
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${encodedName}`
      );
      setPokemonData(response.data);
    } catch (error) {
      console.log(error);
      setPokemonData(null);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
      />
      <button onClick={searchPokemon}>Search</button>

      {pokemonData && (
        <div>
          <h2>{pokemonData.name}</h2>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
        </div>
      )}
    </div>
  );
};

export default PokemonSearch;
