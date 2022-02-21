import React, { useState } from 'react';
import "./Pagination.scss"

export const Pagination = ({getCharacters, totalPages, getPlanets}) => {

    const [page, setPage] = useState(1);

    const pages = totalPages.pages;

    function changePage(page) {

        setPage(page)

        if (getCharacters) {
          
          getCharacters(page)

        } else {

          getPlanets(page)

        }

    }

  return (
  <div className='botones'>

    {page > 1 ? <button onClick={() => changePage(page - 1)}>◀</button> : <button>◀</button>}

    <p>{page}</p>

    {page < pages ? <button onClick={() => changePage(page + 1)}>▶</button> : <button>▶</button>}

  </div>
  );
};
