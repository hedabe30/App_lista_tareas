import React, {useState} from 'react';
import {AppUI} from './AppUI'; 

const defaultTasks = [
    {text: 'primera tarea', completed: true},
    {text: 'segunda tarea', completed: false},
    {text: 'tercera tarea', completed: true},
    {text: 'cuarta tarea', completed: false}
];

function App() {
    const localStorageTasks = localStorage.getItem('TASKS_V1');
    let parsedTasks;

    if(!localStorageTasks) {
        localStorage.setItem('TASKS_V1', JSON.stringify([]));                   //JSON.stringify() psa un objeto o arreglo a texto plano
        parsedTasks = [];
    }else {
        parsedTasks = JSON.parse(localStorageTasks)                             //Pasa texto plano a un objeto
    }

    const [tasks, setTasks] = useState(parsedTasks);
    
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

    const saveTasks = (newTasks) => {
        const stringifiedTasks = JSON.stringify(newTasks);
        localStorage.setItem('TASKS_V1', stringifiedTasks);
        setTasks(newTasks);

    }

    const completeTask = (text) => {
        const taskIndex = tasks.findIndex(task => task.text === text);       //encontrar el indice de un elñemento en un arreglo
        const newTasks = [...tasks];
        newTasks[taskIndex].completed = true;
        saveTasks(newTasks);
    };

    const deleteTask = (text) => {
        const taskIndex = tasks.findIndex(task => task.text === text);       //encontrar el indice de un elñemento en un arreglo
        const newTasks = [...tasks];
        newTasks.splice(taskIndex, 1);
        saveTasks(newTasks);
    };

    return (
        <AppUI 
            completedTasks = {completedTasks}
            totalTasks = {totalTasks}
            searchValue = {searchValue}
            setSearchValue = {setSearchValue}
            searchedTasks = {searchedTasks}
            completeTask = {completeTask}
            deleteTask = {deleteTask}
        />
    );
}

export default App;

