import React, {useState} from 'react';
import '../styles/TaskSearch.css';

const TaskSearch = ({searchValue, setSearchValue}) => {

    const onSearchValueChange = (event) => {
        let change = event.target.value;
        console.log(change);
        setSearchValue(event.target.value);
    }

    return (
        <input 
            className='TaskSearch'
            placeholder="Buscador" 
            value={searchValue}
            onChange={onSearchValueChange}
        />
    )
}
 
export {TaskSearch};