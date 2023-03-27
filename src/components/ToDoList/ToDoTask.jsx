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

    const completeTask = (e) => {
        console.log(`Update task ${task.id}`);
        axios.put(`/todo/${task.id}`).then((response) => {
            console.log('in completeTask');
            fetchToDo();
        }).catch((error) => {
            console.log(`Error in PUT ${error}`);
            alert('Something went wrong');
        });
    }

    const isComplete = () => {
        if (task.complete === false) {
            return 'white';
        } else {
            return 'lightgreen';
        }
    }
    
    return (
        <tr style={{backgroundColor: isComplete()}}>
            <td>{task.date.substring(0,10)}</td>
            <td>{task.task_name}</td>
            <td>{task.task_desc}</td>
            {/* Ternary operator to display 'X' or unicode checkmark based on boolean "complete" in database */}
            <td>{task.complete === false ? 'X' : <>&#x2713;</>}</td>
            {/* Ternary in button to not display the "Complete" button if complete boolean in database is true */}
            <td><button onClick={((e) => completeTask(e))} style={task.complete === true ? {display: 'none'} : {display: ''}}>Complete</button></td>
            <td><button onClick={((e) => deleteTask(e))}>Delete</button></td>
        </tr>
    )
}

export default ToDoTask;