import React from 'react';

function Profile(props) {
  return (
    <>
      <img src={`${process.env.PUBLIC_URL}/sprites/${props.id}.png`} className="card-img-top col-12 offset-md-3 col-md-6 offset-lg-4 col-lg-4" alt="pokemon image" />
      <h1>{props.pokemon && props.pokemon.name ? props.pokemon.name : 'Loading...'}</h1>
      <table className="table col-12 offset-md-3 col-md-6 offset-lg-4 col-lg-4">
        <tbody>
        <tr>
          <td>Weight</td>
          <td className="text-right">{props.pokemon.weight}</td>
        </tr>
        <tr>
          <td>Height</td>
          <td className="text-right">{props.pokemon.height}</td>
        </tr>
        </tbody>
      </table>
    </>
  );
}

export default Profile;
