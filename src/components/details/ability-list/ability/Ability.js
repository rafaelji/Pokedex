import React, {useEffect, useState} from 'react';
import GetAbilityService from "../../../../services/GetAbilityService";
import {Link} from "react-router-dom";

function Ability(props) {
  const [ability, setAbility] = useState({});

  useEffect(() => {
    async function getAbilityDetails() {
      const result = await GetAbilityService.get(props.index);
      setAbility(result);
    }

    getAbilityDetails();
  }, []);

  return(
    <div className="card" key={props.index}>
      <div className="card-header" id={'headingOne' + props.index}>
        <h2 className="mb-0">
          <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
                  data-target={"#collapseOne" + props.index} aria-expanded="true" aria-controls={"collapseOne" + props.index}>
            {props.item.ability.name}
          </button>
        </h2>
      </div>

      <div id={"collapseOne" + props.index} className={props.index > 0 ? "collapse" : "collapse show"} aria-labelledby={'headingOne' + props.index}
           data-parent="#accordion">
        <div className="card-body">
          <p><strong>Effect Changes:</strong> {ability && ability.effect_entries && ability.effect_changes.length > 0 ? ability.effect_entries[1].effect : 'None'}</p>
          <p><strong>Effect Entries:</strong> {ability && ability.effect_entries && ability.effect_entries.length > 0 ? ability.effect_entries[1].effect : 'None'}</p>
          <p><strong>Generation:</strong> {ability && ability.generation ? ability.generation.name.substr(11).toUpperCase() : 'None'}</p>
          <p><strong>Present on main series:</strong> {ability && ability.is_main_series ? 'Yes' : 'No'}</p>
        </div>
      </div>
    </div>
  );
}

export default Ability;
