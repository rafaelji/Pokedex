import React from 'react';
import {Link} from "react-router-dom";

function PokeCard(props) {
  return (
    <div className="card">
      <img src={`${process.env.PUBLIC_URL}/sprites/${props.index + 1}.png`} className="card-img-top" alt={props.name} />
      <div className="card-body text-center">
        <Link to="/" className="btn btn-primary w-100">{props.name}</Link>
      </div>
    </div>
  );
}

export default PokeCard;
