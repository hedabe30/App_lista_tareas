import React from 'react';
import '../styles/TaskCounter.css';

const TaskCounter = ({total, completed}) => {
    return (  
        <h2 className='TaskCounter'>Has completado {completed} de {total} Tareas</h2>
    );
}
 
export {TaskCounter};