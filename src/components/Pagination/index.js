import React from 'react';
import './styles.css';

export default function Pagination({postPerPage, totalPost, pagina}) {
    const pageNumbers = [];
    
    for (let i=1; i<=Math.ceil(totalPost/postPerPage); i++) {
        pageNumbers.push(i);
    }

    return(
        <nav className="pagina">
            <ul> 
            {pageNumbers.map((number) => (
                    
                        <a className="aTag" onClick={() => pagina(number)} href="#" key={number}>
                        {number}
                        </a>
                    
            ))}
            </ul>
            
        </nav>
    )

}