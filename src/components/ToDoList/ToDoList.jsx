import axios from 'axios';
import ToDoTask from './ToDoTask';

function ToDoList({ toDoList, fetchToDo }) {

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Date Added</th>
                        <th>Task</th>
                        <th>Task Description</th>
                        <th>Completed</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                        {
                            toDoList.map((task) => (
                                <ToDoTask 
                                    key={task.id}
                                    task={task}
                                    fetchToDo={fetchToDo}
                                />
                            ))   
                        }
                </tbody>
            </table>
        </>
    );
}

export default ToDoList;