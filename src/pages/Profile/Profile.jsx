import React, { useContext } from 'react';
import { ProfileContext } from '../../contexts/ProfileContext';
import "./Profile.scss"

export const Profile = () => {

    const {profile} = useContext(ProfileContext)

    const {name, image, species} = profile;

  return (
  <div className='perfil'>

    <img className='imagenPerfil' src={image} alt={name} />
    <p>{name}</p>

  </div>
  );
};
