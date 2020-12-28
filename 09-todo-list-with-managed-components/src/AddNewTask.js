import React from 'react'

export default function AddNewTask(props) {
    return (
        <React.Fragment>
         <h2>Add a new task</h2>
        <div>
          <label>Task Title:</label>
          <input
            type="text"
            value={props.newTaskTitle}
            onChange={props.updateFormField}
            name="newTaskTitle"
          />
        </div>
        <div>
          <label>Task Due Date</label>
          <input
            type="date"
            value={props.newTaskDate}
            onChange={props.updateFormField}
            name="newTaskDate"
          />
        </div>
        <button onClick={props.addNewTask}>Add new task</button>
        </React.Fragment>
    )
}