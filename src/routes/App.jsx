import React from 'react';
import './App.css';
import {TaskCounter} from "@components/TaskCounter"
import {TaskSearch} from "@components/TaskSearch"
import {TaskList} from "@components/TaskList"
import {TaskItem} from "@components/TaskItem"
import {CreateTaskButton} from '@components/CreateTaskButton'

const tasks = [
    {text: 'primera tarea', completed: true},
    {text: 'segunda tarea', completed: false},
    {text: 'tercera tarea', completed: false},
    {text: 'cuarta tarea', completed: false}
];

function App() {
    return (
        <React.Fragment>
            <TaskCounter />
            <TaskSearch />
            <TaskList>
                {tasks.map( task => (
                    <TaskItem 
                        key={task.text} 
                        text = {task.text}
                        completed = {task.completed} />
                ))}
            </TaskList>
            <CreateTaskButton />
        </React.Fragment>
    );
}

export default App;

