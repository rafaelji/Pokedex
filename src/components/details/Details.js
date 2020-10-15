import React, {useEffect, useState} from 'react';
import './Details.css';

import { useParams } from "react-router-dom";
import GetPokemonService from "../../services/GetPokemonService";

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
              <div>
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
                <h2 className="text-center">Abilities</h2>
                <div className="accordion ability-list" id="accordion">
                  {
                    pokemon.abilities && pokemon.abilities.map((item, index) => {
                      return (
                        <div className="card" key={index}>
                          <div className="card-header" id={'headingOne' + index}>
                            <h2 className="mb-0">
                              <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
                                      data-target={"#collapseOne" + index} aria-expanded="true" aria-controls={"collapseOne" + index}>
                                {item.ability.name}
                              </button>
                            </h2>
                          </div>

                          <div id={"collapseOne" + index} className={index > 0 ? "collapse" : "collapse show"} aria-labelledby={'headingOne' + index}
                               data-parent="#accordion">
                            <div className="card-body">
                              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                              3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
                              coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes
                              anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                              occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard
                              of them accusamus labore sustainable VHS.
                            </div>
                          </div>
                        </div>
                      );
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Details
