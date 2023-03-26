import { useState, useEffect } from 'react';
import axios from 'axios';
import ToDoList from '../ToDoList/ToDoList.jsx';
import ToDoForm from '../ToDoList/ToDoForm.jsx';


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

  return (
    <div>
      <h1>TO DO APP</h1>
      <ToDoForm 
        taskName={taskName}
        setTaskName={setTaskName}
        taskDesc={taskDesc}
        setTaskDesc={setTaskDesc}
        fetchToDo={fetchToDo}
      />
      <ToDoList 
        toDoList={toDoList}
        fetchToDo={fetchToDo}
      />
    </div>
  );
}

export default App;
