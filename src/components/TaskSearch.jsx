import React from 'react';
import '../styles/TaskSearch.css';

const TaskSearch = () => {
    const onSearchValueChange = (event) => {
        let change = event.target.value;
        console.log(change)
    }

    return (  
        <input 
            className='TaskSearch'
            type="text" 
            placeholder="Buscador" 
            onChange={onSearchValueChange}
        />
    );
}
 
export {TaskSearch};