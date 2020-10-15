import React from 'react';

function Ability(props) {
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
}

export default Ability;
