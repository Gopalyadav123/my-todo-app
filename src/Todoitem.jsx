import { useState } from 'react'
import { useContext } from 'react';

function Todoitem ( {task,date,status} )
{
  return(
    <tr>
      <td>{task}</td>
      <td>{date}</td>
      <td>{status}</td>

      <td>
      <button onClick={() => alert('Delete clicked')}>Delete</button>
      </td>
    </tr>
  );
}
export default Todoitem;