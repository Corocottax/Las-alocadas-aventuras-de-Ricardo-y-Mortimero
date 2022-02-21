import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Galeria } from '../Galeria/Galeria';
import "./Characters.scss"
import { Pagination } from "../Pagination/Pagination"
import { Buscador } from "../Buscador/Buscador"

export const Characters = () => {

    const Url = "https://rickandmortyapi.com/api/character";

    const [characters, setCharacters] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [allCharacters, setAllCharacters] = useState([]);

    const getCharacters = async (newPage = 1) => {

        const res = await axios(Url + "?page=" + newPage)
        setCharacters(res.data.results)
        setTotalPages(res.data.info);

    };

    const getAllCharacters = async () => {

      const res = await axios(Url);
      const paginas = res.data.info.pages
      const charactersArray = [];

      for (let i = 1; i < paginas+1; i++) {
        
        const res = await axios(Url + "?page=" + i);
        
        for (const result of res.data.results) {
          
          charactersArray.push(result);

        }

      }

      setAllCharacters(charactersArray);
      return allCharacters;
      
    }

    useEffect(() => {

      getCharacters();
      getAllCharacters();

    }, []);

  return (

    <div>

      <Buscador getAllCharacters={getAllCharacters}/>

      <Galeria characters={characters}/>

      <Pagination getCharacters={getCharacters} totalPages={totalPages}/>

    </div>  

  );
};