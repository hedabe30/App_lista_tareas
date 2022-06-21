import React, {useState} from 'react';
import './App.css';
import {TaskCounter} from "@components/TaskCounter"
import {TaskSearch} from "@components/TaskSearch"
import {TaskList} from "@components/TaskList"
import {TaskItem} from "@components/TaskItem"
import {CreateTaskButton} from '@components/CreateTaskButton'

const defaultTasks = [
    {text: 'primera tarea', completed: true},
    {text: 'segunda tarea', completed: false},
    {text: 'tercera tarea', completed: true},
    {text: 'cuarta tarea', completed: false}
];

function App() {
    const [tasks, setTasks] = useState(defaultTasks);
    
    const completedTasks = tasks.filter(task => !!task.completed).length;
    const totalTasks = tasks.length;
    
    const [searchValue, setSearchValue] = useState('');

    let searchedTasks = [];
    if (!searchValue.length >= 1){
        searchedTasks = tasks;
    }else{
        searchedTasks = tasks.filter(task => {
            const taskText = task.text.toLowerCase();
            const searchedText = searchValue.toLowerCase();
            return taskText.includes(searchedText);
        })
    }

    return (
        <React.Fragment>
            <TaskCounter 
                completed = {completedTasks}
                total = {totalTasks}
            />
            <TaskSearch 
                searchValue = {searchValue}
                setSearchValue = {setSearchValue}
            />
            <TaskList>
                {searchedTasks.map( task => (
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

