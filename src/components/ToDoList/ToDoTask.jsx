import { useState } from 'react';
import axios from 'axios';

function ToDoTask({ task }) {

    return (
        <tr>
            <td>{task.date.substring(0,10)}</td>
            <td>{task.task_name}</td>
            <td>{task.task_desc}</td>
            <td>{task.complete === false ? 'X' : <>&#x2713;</>}</td>
            <td><button>Complete</button></td>
            <td><button>Delete</button></td>
            <td>&#10003;</td>
        </tr>
    )
}

export default ToDoTask;