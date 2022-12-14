// import React from "react";
import { useState } from 'react';
import {FaTrashAlt, FaEdit, FaCheck} from 'react-icons/fa';

const Overview = (props) => {
  const { tasks,deleteTask,isEditing, reSubmit} = props;

  const [state, setState] = useState("")

  const handleChnge = (e) => {
        console.log(e.target.value);
        setState(e.target.value);
  }


  return (
    <ul className='tasklist'>
      {tasks.map((task,index) => {

      
      const editing = (
        <li key={task.id}>
            <div>
              <strong>{index}.</strong>
            </div>
            <input onChange={handleChnge} type="text" name="text" id="text" value={state} required/>
            <div className='icons'>
              <button id={task.id} onClick={() => {isEditing(task.id); reSubmit(state,task.id);}}>{<FaCheck style={{cursor:'pointer'}} />}</button>
            </div>
        
        </li>
      )

      const basicTemplate = (
        <li key={task.id}>
            <div>
              <strong>{index}.</strong>
              &nbsp;
              {task.text} &nbsp;
            </div>
            <div className='icons'>
              <button id={task.id} onClick={() => deleteTask(task.id) }>{<FaTrashAlt style={{cursor:'pointer', width:'16px'}} />}</button>
              <button id={task.id} onClick={() => isEditing(task.id)} >{<FaEdit style={
                {cursor:'pointer'}
                } />}</button>
            </div>
        </li>
        ) 

        return task.editIt ? editing : basicTemplate;    
        
      })}
    </ul>
  );
};

export default Overview;
