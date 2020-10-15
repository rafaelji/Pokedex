import React, {useEffect, useState} from 'react';
import GetFormsService from "../../../services/GetFormsService";
import './Forms.css';

function Forms(props) {
  const [forms, setForms] = useState({});

  useEffect(() => {
    async function getPokemonForms(a) {
      if(props.pokemon && props.pokemon.forms && props.pokemon.forms.length > 0) {
        const result = await GetFormsService.get(props.pokemon.forms[0].url.substr(39));
        setForms(result.sprites)
        console.log('ow', result)
      }
    }

    getPokemonForms();
  }, [props.pokemon]);

  return (
    <>
      <h2 className="text-center">Other Forms</h2>
      <div className="forms-cards">
        <div className="card poke-card" style={{width: "18rem"}}>
          <img src={forms.back_default} className="card-img-top" alt="..." />
        </div>
        <div className="card poke-card" style={{width: "18rem"}}>
          <img src={forms.front_default} className="card-img-top" alt="..." />
        </div>
        <div className="card poke-card" style={{width: "18rem"}}>
          <img src={forms.back_shiny} className="card-img-top" alt="..." />
        </div>
        <div className="card poke-card" style={{width: "18rem"}}>
          <img src={forms.front_shiny} className="card-img-top" alt="..." />
        </div>
      </div>
    </>
  );
}

export default Forms;
