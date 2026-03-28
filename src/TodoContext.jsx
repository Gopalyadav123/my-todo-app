import Todoitemlist from './Todoitemlist';
import './App.css';
 
import { createContext } from "react";

export const TodoContext = createContext();

function App() {
  return (
    <div className="App">
      <h1>My To-Do Project</h1>
      <Todoitemlist />
    </div>
  );
}

export default App;