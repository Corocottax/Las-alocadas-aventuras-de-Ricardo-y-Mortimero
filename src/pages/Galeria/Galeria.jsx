import React, { useContext } from 'react';
import { ProfileContext } from '../../contexts/ProfileContext';
import "./Galeria.scss"

export const Galeria = ({characters}) => {

  const {setProfile} = useContext(ProfileContext)

  const changeProfile = (newProfile) => {

    setProfile(newProfile)
    document.body.setAttribute("theme", newProfile.species.toLowerCase())

  }

  return (
  
    <div className='album'>

    {characters.map((character) => {

        return(

            <div className='carta' key={character.id}>
                <h1>{character.name}</h1>
                <img src={character.image} alt={character.name} onClick={() => changeProfile(character)}/>
                <div>
                  <p>{character.status}</p>
                  <p>{character.species}</p>
                  <p>{character.gender}</p>
                </div>
            </div>

        );
    
    })}

  </div>);
};
