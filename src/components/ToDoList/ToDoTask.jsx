import { useState } from 'react';
import axios from 'axios';

function ToDoTask({ task, fetchToDo }) {

    const deleteTask = (e) => {
        console.log(`deleteTask ${task.id}`);
        axios.delete(`/todo/${task.id}`).then((response) => {
            fetchToDo();
        }).catch((error) => {
            console.log(`Error in deleteTask ${error}`);
            alert('Something went wrong.');
        });
    }
    
    return (
        <tr>
            <td>{task.date.substring(0,10)}</td>
            <td>{task.task_name}</td>
            <td>{task.task_desc}</td>
            <td>{task.complete === false ? 'X' : <>&#x2713;</>}</td>
            <td><button>Complete</button></td>
            <td><button onClick={((e) => deleteTask(e))}>Delete</button></td>
        </tr>
    )
}

export default ToDoTask;