import { useContext } from 'react';
import { TodoContext } from './TodoContext';
import Todoitem from './Todoitem';

function Todoitemlist() {

  const { todoData } = useContext(TodoContext);

  return (
    <table border="3">
      <thead>
        <tr>
          <th>Task</th>
          <th>Date</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {todoData.map((todo, index) => (
          <Todoitem 
            key={index}
            task={todo.task}
            date={todo.date}
            status={todo.status}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Todoitemlist;