import React, { useEffect, useState } from "react";
import CardPokemon from './card/cardpokemon'


const Pokemon = () => {
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon");
            const data = await response.json();
            setPokemons(data.results);
        }
        fetchData();
    }, []);

    return (
        <>
            {pokemons.map((pkm) => (
                <CardPokemon PokemonItem={pkm} key={pkm.name}></CardPokemon>
            ))}
        </>
    );
};

export default Pokemon;