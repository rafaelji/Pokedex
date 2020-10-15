import React from 'react';
import {Link, useRouteMatch} from "react-router-dom";

import './Pokecard.css';

function PokeCard(props) {
  const match = useRouteMatch();

  return (
    <div className="card poke-card">
      <img src={`${process.env.PUBLIC_URL}/sprites/${props.index + 1}.png`} className="card-img-top" alt={props.name} />
      <div className="card-body text-center">
        <Link to={`${match.url}/${props.index + 1}`} className="btn btn-primary w-100">{props.name}</Link>
      </div>
    </div>
  );
}

export default PokeCard;
