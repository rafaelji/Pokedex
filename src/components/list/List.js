import React, {useState, useEffect} from 'react';
import './List.css';

import PokemonListService from "../../services/PokemonListService";

function List() {
  const [pokemonList, setPokemonList] = useState([]);

  async function getAllPokemons() {
    try {
      const result = await PokemonListService.listAll();
      setPokemonList(result);
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
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">{pokemon.name}</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up
                            the bulk of the card's content.</p>
                          <a href="#" className="btn btn-primary">Go somewhere</a>
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
