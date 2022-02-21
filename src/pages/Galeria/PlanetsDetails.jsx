import React from 'react';

export const PlanetsDetails = ({residents}) => {

  console.log(residents);

  return(
  
  <div className='album'>

    {residents.map((resident) => {

        return(

            <div className='carta' key={resident.id}>
                <h1>{resident.name}</h1>
                <img src={resident.image} alt={resident.name} />
                <p>{resident.status}</p>
                <p>{resident.species}</p>
                <p>{resident.gender}</p>
            </div>

        );
    
    })}

  </div>);
};
