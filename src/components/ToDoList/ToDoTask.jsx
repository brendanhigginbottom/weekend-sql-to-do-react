import axios from 'axios';

function ToDoTask({ task }) {

    return (
        <tr>
            <td>{task.date.substring(0,10)}</td>
            <td>{task.task_name}</td>
            <td>{task.task_desc}</td>
            <td>{task.complete.toString()}</td>
            <td><button>Complete</button></td>
            <td><button>Delete</button></td>
        </tr>
    )
}

export default ToDoTask;