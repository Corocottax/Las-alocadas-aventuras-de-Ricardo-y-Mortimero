import React from 'react';
/* import { NavLink } from 'react-router-dom';
import { Locations } from '../Locations/Locations'; */
import "./Galeria.scss"

export const Planets = ({planets}) => {

  /* let planetID = "/PlanetsDetail/"; */

  return (
  
    <div className='album'>

    {/* planetID = "/PlanetsDetail/"; */}

    {planets.map((planet) => {

        return(

            <div className='carta' key={planet.id}>
            {/* {planetID += planet.id} */}
              {/* <NavLink to={planetID} activeclassname={"active"}> */}
                <h1>{planet.name}</h1>
                <img className='planeta' src='https://c.tenor.com/PjI-fL_eodcAAAAd/rick-and-morty-rick.gif' alt={planet.name} />
                <p>{planet.type}</p>
                <p>{planet.dimension}</p>
              {/* </NavLink> */}
            </div>

        );
    
    })}

  </div>);
};
