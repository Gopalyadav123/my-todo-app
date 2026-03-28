import { useState, useEffect } from 'react';
import { TodoContext } from './TodoContext';
import Todoitemlist from './Todoitemlist';
import AddTodoForm from './AddTodoForm';

function App() {

  const [todoData, setTodoData] = useState([]);

  const addTodo = (todo) => {
    setTodoData([...todoData, todo]);
  };

  useEffect(() => {
    let t1 = { task: "A", date: '23-03-26', status: "new" };
    let t2 = { task: "B", date: '21-01-26', status: "done" };
    let t3 = { task: "C", date: '07-04-26', status: "running" };

    setTodoData([t1, t2, t3]);  
  }, []);

  return (
    <TodoContext.Provider value={{ todoData, addTodo }}>
      <h1>My To-Do Project</h1>
      <AddTodoForm />
      <Todoitemlist />   
    </TodoContext.Provider>
  );
}

export default App;