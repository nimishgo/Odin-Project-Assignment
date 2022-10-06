// import React from "react";

import {FaTrashAlt, FaEdit} from 'react-icons/fa';

const Overview = (props) => {
  const { tasks,deleteTask} = props;
  // console.log(deleteTask,props);
  return (
    <ul className='tasklist'>
      {tasks.map((task,index) => {
        console.log(task.id);
        return (
          <li key={task.id}>
            <div>
              <strong>{index}.</strong>
              &nbsp;
              {task.text} &nbsp;
            </div>
            <div className='icons'>
              <button id={task.id} onClick={() => deleteTask(task.id) }>{<FaTrashAlt style={{cursor:'pointer'}} />}</button>
              <button id={task.id}>{<FaEdit style={{cursor:'pointer'}} />}</button>
            </div>
          </li>
        )
      })}
    </ul>
  );
};

export default Overview;
