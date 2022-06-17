import React from 'react';
import '../styles/TaskItem.css';

const TaskItem = (props) => {
    const onCompletdTask = () => {
        alert("Tarea completada " + props.text)
    }

    const onDeletedTask = () => {
        alert("Tarea eliminada " + props.text)
    }

    return (  
        <li className="TaskItem">
            <span 
                className={`Icon Icon-check ${props.completed&&'Icon-check--active'}`}
                onClick = {onCompletdTask}
            >
                √
            </span>
            <p className={`TaskItem-p ${props.completed&&'TaskItem-p--complete'}`}>
                {props.text}
            </p>
            <span 
                className="Icon Icon-delete"
                onClick={onDeletedTask}
            >
                X
            </span>
        </li>
    );
}
 
export {TaskItem};