// import React from "react";

import {FaTrashAlt} from 'react-icons/fa';

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
              <button id={task.id} onClick={() => deleteTask(task.id) }>{<FaTrashAlt/>}</button>
          </li>
        )
      })}
    </ul>
  );
};

export default Overview;
