import React from 'react';
import {TaskCounter} from "@components/TaskCounter"
import {TaskSearch} from "@components/TaskSearch"
import {TaskList} from "@components/TaskList"
import {TaskItem} from "@components/TaskItem"
import {CreateTaskButton} from '@components/CreateTaskButton'
import './App.css';

const AppUI = ({
    loading,
    error,
    completedTasks,
    totalTasks,
    searchValue,
    setSearchValue,
    searchedTasks,
    completeTask,
    deleteTask,
}) => {
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
            {error && <p>Hubo un error...</p>}
            {loading && <p>Estamos cargando...</p>}
            {(!loading && !searchedTasks.length) && <p>Crea tu primera tarea</p>}

            {searchedTasks.map( task => (
                <TaskItem 
                    key={task.text} 
                    text = {task.text}
                    completed = {task.completed} 
                    onComplete = {() => completeTask(task.text)}
                    onDelete = {() => deleteTask(task.text)}
                    />
            ))}
        </TaskList>
        <CreateTaskButton />
    </React.Fragment>
    );
}
 
export {AppUI};