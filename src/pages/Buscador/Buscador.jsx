import React from 'react';
import { useState } from 'react/cjs/react.development';
import "./Buscador.scss"

export const Buscador = ({ getAllCharacters }) => {

    let [characterName, setCharacterName] = useState("");
    let [pintar, setPintar] = useState(false);

    getAllCharacters().then((data) => {

        return data;

    })

  return (
  <div className='divBuscador'>

    <input className='buscador' type="text" placeholder='Nombre de personaje' onInput={event =>  setCharacterName(event.target.value)}></input>
    <button onClick={() => setPintar(true)}>Buscar</button>

    {pintar && 

        getAllCharacters().then((data) => {

            data.map((character) => {

                if (character.name === characterName) {

                    return(
                        <div className='cartaEncontrada' key={character.id}>
                            <h1>{character.name}</h1>
                            <img src={character.image} alt={character.name} />
                            <div>
                                <p>{character.status}</p>
                                <p>{character.species}</p>
                                <p>{character.gender}</p>
                            </div>
                        </div>
                    )
                } else {
                    return(<></>)
                }

            })

        })

    }

</div>
)
}
