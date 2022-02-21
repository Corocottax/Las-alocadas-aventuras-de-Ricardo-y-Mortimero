import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Planets } from '../Galeria/GaleriaPlanets';
import { Pagination } from '../Pagination/Pagination';
import "./Locations.scss"

export const Locations = ({planet}) => {

    const Url = "https://rickandmortyapi.com/api/location";

    const [planets, setPlanets] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [residents, setResidents] = useState([]);


    const getResidents = async (planet) => {

        const res = await axios(Url);

        if (planet === res.data.results.id) {

            setResidents(res.data.results.residents);
            
        }

    }

    const getPlanets = async (newPage = 1) => {

        const res = await axios(Url + "?page=" + newPage);
        setPlanets(res.data.results);
        setTotalPages(res.data.info);

    };

    useEffect(() => {

        getPlanets();
        getResidents();

    }, [])

  return(
  
    <div>

        <Planets planets={planets} residents={residents}/>

        <Pagination getPlanets={getPlanets} totalPages={totalPages}/>

    </div>);
};
