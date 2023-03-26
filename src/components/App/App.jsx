import { useState, useEffect } from 'react';
import axios from 'axios';


function App () {

  const [toDoList, setToDoList] = useState([]);

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

  return (
    <div>
      <h1>TO DO APP</h1>
      {/* <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Task</th>
            <th>Task Description</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            toDoList.map((task) => (
              <tr key={task.id}>
                <td>{task.date}</td>
                <td>{task.task_name}</td>
                <td>{task.task_desc}</td>
                <td><button>Complete</button></td>
                <td><button>Delete</button></td>
              </tr>
            ))
          }
        </tbody>
      </table> */}
    </div>
  );

}

export default App
