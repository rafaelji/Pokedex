import React from 'react';
import {Link, useRouteMatch} from "react-router-dom";

function PokeCard(props) {
  const match = useRouteMatch();

  return (
    <div className="card">
      <img src={`${process.env.PUBLIC_URL}/sprites/${props.index + 1}.png`} className="card-img-top" alt={props.name} />
      <div className="card-body text-center">
        <Link to={`${match.url}/${props.name}`} className="btn btn-primary w-100">{props.name}</Link>
      </div>
    </div>
  );
}

export default PokeCard;
