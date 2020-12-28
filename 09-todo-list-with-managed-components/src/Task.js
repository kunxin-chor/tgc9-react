import React from 'react'

export default function Task(props) {
    return (
        <React.Fragment>
        <li>
          {props.task.title} - 
          <input type="checkbox" checked={props.task.done} onChange={()=>{
              props.updateTaskDone(props.task)
          }}/> 
          (Due:
          {props.task.date})
          <button
            onClick={() => {
              props.beginEditTask(props.task);
            }}
          >
            Edit
          </button>
          <button
            onClick={() => {
              props.deleteTask(props.task);
            }}
          >
            Delete
          </button>
        </li>
      </React.Fragment>
    )
}