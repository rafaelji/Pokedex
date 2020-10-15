import React from 'react';
import './Details.css';

import { useParams, useRouteMatch, } from "react-router-dom";

function Details() {
  let { id } = useParams();

  return (
    <h1>Detalhes {id}</h1>
  );
}

export default Details
