import { useState } from 'react';
import axios from 'axios';

function ToDoForm({ taskName, setTaskName, taskDesc, setTaskDesc, fetchToDo }) {

    const submitForm = (event) => {
        event.preventDefault();
    
        axios.post('/todo', {
          task_name: taskName,
          task_desc: taskDesc
        }).then((response) => {
          setTaskName('');
          setTaskDesc('');
          fetchToDo();
          console.log('In submitForm');
        }).catch((error) => {
          console.log(`Error in POST ${error}`);
          alert('Something went wrong');
        });
      }

    return (
        <form onSubmit={submitForm}>
            Task: <input type="text" value={taskName}
            onChange={(e) => setTaskName(e.target.value)} />
            Task Description: <input type="text" value={taskDesc}
            onChange={(e) => setTaskDesc(e.target.value)} />
            <input id="addTask" type="submit" value="Add Task" />
      </form>
    );
}

export default ToDoForm;