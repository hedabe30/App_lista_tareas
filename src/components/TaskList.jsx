import React from 'react';
import '../styles/TaskList.css';

const TaskList = (props) => {
    return (  
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    );
}
 
export {TaskList};