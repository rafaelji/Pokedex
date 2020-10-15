import React, {useState, useEffect} from 'react';
import './List.css';

import { Link } from "react-router-dom";

import PokemonListService from "../../services/PokemonListService";

function List() {
  const [pokemonList, setPokemonList] = useState([]);

  async function getAllPokemons() {
    try {
      const result = await PokemonListService.listAll();
      setPokemonList(result.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <>
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 offset-1">
              <h1>Pokédex</h1>
              <div className="poke-cards">
                {
                  pokemonList.length > 0 && pokemonList.map((pokemon, key) => {
                    return (
                      <div className="card" key={key}>
                        <img src={`${process.env.PUBLIC_URL}/sprites/${key + 1}.png`} className="card-img-top" alt="..." />
                        <div className="card-body text-center">
                          <Link to="/" className="btn btn-primary w-100">{pokemon.name}</Link>
                        </div>
                      </div>
                    );
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default List;
