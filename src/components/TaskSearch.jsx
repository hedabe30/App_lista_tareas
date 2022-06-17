import React from 'react';
import '../styles/TaskSearch.css';

const TaskSearch = () => {
    return (  
        <input 
            className='TaskSearch'
            type="text" 
            placeholder="Buscador" 
        />
    );
}
 
export {TaskSearch};