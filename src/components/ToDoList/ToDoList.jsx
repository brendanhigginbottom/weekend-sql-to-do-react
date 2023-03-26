

function ToDoList({ toDoList }) {

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
        </>
    );
}

export default ToDoList;