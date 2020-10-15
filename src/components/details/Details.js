import React, {useEffect, useState} from 'react';
import './Details.css';

import { useParams } from "react-router-dom";
import GetPokemonService from "../../services/GetPokemonService";
import AbilityList from "./ability-list/AbilityList";
import Profile from "./profile/Profile";
import Forms from "./forms/Forms";

function Details() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    async function getPokemonData() {
      const data = await GetPokemonService.get(id);
      console.log('ei', data);
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
              <Profile pokemon={pokemon} id={id} />
              <AbilityList pokemon={pokemon} />
              <Forms pokemon={pokemon} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Details
