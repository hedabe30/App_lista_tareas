import React from 'react';

const TaskItem = (props) => {
    return (  
        <li>
            <span>Tarea</span>
            <p>{props.text}</p>
            <span>fin</span>
        </li>
    );
}
 
export {TaskItem};