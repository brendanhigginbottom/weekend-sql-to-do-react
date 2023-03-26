import { useState, useEffect } from 'react';
import axios from 'axios';


function App () {

  const [toDoList, setToDoList] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [taskDesc, setTaskDesc] = useState('');

  const fetchToDo = () => {
    axios.get('/todo').then((response) => {
      setToDoList(response.data);
      console.log(response.data);
    }).catch((error) => {
      console.log(`Error in GET ${error}`);
      alert('Something went wrong');
    });
  }

  useEffect(() => {
    fetchToDo();
  }, []);

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
    <div>
      <h1>TO DO APP</h1>
      <form onSubmit={submitForm}>
        Task: <input type="text" value={taskName}
          onChange={(e) => setTaskName(e.target.value)} />
        Task Description: <input type="text" value={taskDesc}
          onChange={(e) => setTaskDesc(e.target.value)} />
        <input type="submit" value="Add Task" />
      </form>
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
              <tr key={task.id}>
                {/* Using substring to truncate time to just date */}
                <td>{task.date.substring(0,10)}</td>
                <td>{task.task_name}</td>
                <td>{task.task_desc}</td>
                <td>{task.complete.toString()}</td>
                <td><button>Complete</button></td>
                <td><button>Delete</button></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
