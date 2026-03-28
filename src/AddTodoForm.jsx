import { useState,useContext } from 'react';

import {TodoContext} from './TodoContext';

function AddTodoForm ()
{
     const {addTodo}=useContext(TodoContext); //get addTOdo function from context

     const [task,setTask]=useState("");
     const [date,setDate]=useState("");
     const [status,setStatus]=useState("Assign");

    function handleCreate(){
        let t = {task:task, date:date , status:status};
        addTodo (t);
        alert(t);
    }
  return(
   <div>
    <input placeholder='Task' value={task}
    onChange={(e) =>setTask(e.target.value)} />

     <input placeholder='date' value={date}
    onChange={(e) =>setDate(e.target.value)} />
    <select value ={status} onChange={(e) => setStatus(e.target.value)} >
    <option>Assign</option>
     <option>Running</option>
      <option>Complete</option>
       <option>Cancel</option>
    </select>
  
   
        <button onClick={ () => {handleCreate()}}>Create </button>
        
   </div>
  );
}
export default AddTodoForm;