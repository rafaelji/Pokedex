import React, {useEffect, useState} from 'react';
import './Details.css';

import { useParams } from "react-router-dom";
import GetPokemonService from "../../services/GetPokemonService";
import AbilityList from "./ability-list/AbilityList";

function Details() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    async function getPokemonData() {
      const data = await GetPokemonService.get(id);
      setPokemon(data);
    }

    getPokemonData();
  }, []);

  return (
    <>
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 offset-1">
              <img src={`${process.env.PUBLIC_URL}/sprites/${id}.png`} className="card-img-top col-12 offset-md-3 col-md-6 offset-lg-4 col-lg-4" alt="pokemon image" />
              <h1>{pokemon && pokemon.name ? pokemon.name : 'Loading...'}</h1>
              <table className="table col-12 offset-md-3 col-md-6 offset-lg-4 col-lg-4">
                <tbody>
                  <tr>
                    <td>Weight</td>
                    <td className="text-right">{pokemon.weight}</td>
                  </tr>
                  <tr>
                    <td>Height</td>
                    <td className="text-right">{pokemon.height}</td>
                  </tr>
                </tbody>
              </table>
              <AbilityList pokemon={pokemon} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Details
