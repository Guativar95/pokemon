import React, { useEffect, useState } from "react";

const CardPokemon = ({ PokemonItem }) => {
  const [pokemonData, setPokemonData] = useState(undefined);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(PokemonItem.url);
      const data = await response.json();
      setPokemonData(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      {pokemonData === undefined ? (
        "Cargando..."
      ) : (
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">{pokemonData.name} </h5>
          </div>
          <div className="card-body">
            <img
              src={pokemonData.sprites.other.dream_world.front_default}
              alt="pokemon"
            ></img>
          </div>
          <div className="card-footer">
            <ul>
              <li className="card-text text capitalize"> <span>Habilidad</span> : {pokemonData.abilities[0].ability.name}</li>
              <li className="card-text text capitalize"><span>Especie</span> : {pokemonData.species.name}</li>
        
            </ul>      
          </div>
        </div>
      )}
    </div>
  );
};



export default CardPokemon;
