import React from "react";
import CardPokemon from './CardPokemon';

export const cards = (results) => {
    return (
        <div className="container">
            <ul className="cards">
                {
                    results.map (p=>{
                        <li className="card-item" key={p.name}>
                            <cardpokemon url={p.url}></cardpokemon>
                        </li>
                    })
                }
            </ul>
        </div>
    ) 
}

export default cards;