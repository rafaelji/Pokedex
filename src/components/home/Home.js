import React from 'react';
import Pokedex from './pokedex.png';
import './Home.css';

import {Link} from "react-router-dom";

function Home(props) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 pt-5 text-center">
          <h1>Pokédex Online</h1>
          <img src={Pokedex} className="pokedex" alt="Pokédex"/>
          <br />
          <Link to="/app" style={{marginTop: '10rem'}} className="btn btn-primary w-50">Enter</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
