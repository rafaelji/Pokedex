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
              <Ability index={item.ability.url.substr(34,2)} item={item} key={index} />
            );
          })
        }
      </div>
    </>
  );
}

export default AbilityList;
