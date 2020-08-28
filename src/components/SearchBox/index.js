import React from 'react';
import './styles.css';

export default function SearchBox({handleSubmit}) {
    function handleSearch(e) {
        e.preventDefault();
        e.target.value.length !== 0 && handleSubmit(e.target.value)
    }
    return(
        <div className="search-box">
            <form action="" onSubmit={handleSubmit}>
                <input
                className = "input-box" 
                type="text" 
                placeholder="Busque um filme por nome, ano ou gênero..." 
                onChange={handleSearch}/>
            </form>
        </div> 

    );
}