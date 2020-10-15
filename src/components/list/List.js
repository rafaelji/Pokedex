import React, {useState, useEffect} from 'react';
import './List.css';

import { Link } from "react-router-dom";

import PokemonListService from "../../services/PokemonListService";

function List() {
  const [pokemonList, setPokemonList] = useState([]);
  const [isBottom, setIsBottom] = useState(false);
  const [firstTime, setFirstTime] = useState(true);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  function handleScroll() {
    const scrollTop = (document.documentElement
      && document.documentElement.scrollTop)
      || document.body.scrollTop;

    const scrollHeight = (document.documentElement
      && document.documentElement.scrollHeight)
      || document.body.scrollHeight;

    if (scrollTop + window.innerHeight + 50 >= scrollHeight) {
      setIsBottom(true);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    async function getAllPokemons() {
      try {
        setIsLoading(true);
        const data = await PokemonListService.listAll(offset);
        setPokemonList(prevState => prevState.concat(data.results));
        setOffset(offset + 20);
        setIsBottom(false);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    if ((isBottom || firstTime) && !isLoading) {
      getAllPokemons(offset);
    }
  }, [isBottom, firstTime]);

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
