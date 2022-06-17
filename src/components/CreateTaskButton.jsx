import React from 'react';
import '../styles/CreateTaskButton.css';

const CreateTaskButton = () => {
    const onClickButton = (msg) => {
        alert(msg)
    }

    return (  
        <button 
            className='CreateTaskButton'
            onClick={() => onClickButton('hizo clic')}
        >
            +
        </button>
    );
}
 
export {CreateTaskButton};