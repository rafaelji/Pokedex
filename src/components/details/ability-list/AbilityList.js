import React from 'react';
import Ability from "./ability/Ability";

function AbilityList(props) {
  return (
    <>
      <h2 className="text-center">Abilities</h2>
      <div className="accordion ability-list" id="accordion">
        {
          props.pokemon.abilities && props.pokemon.abilities.map((item, index) => {
            return (
              <Ability index={index} item={item} key={index} />
            );
          })
        }
      </div>
    </>
  );
}

export default AbilityList;
