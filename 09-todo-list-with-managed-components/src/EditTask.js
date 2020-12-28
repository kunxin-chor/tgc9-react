import React from 'react'

export default function EditTask(props) {
    return (
      <React.Fragment>
        <input
          type="text"
          value={props.modifiedTaskTitle}
          onChange={props.updateFormField}
          name="modifiedTaskTitle"
        />
        <input
          type="date"
          value={props.modifiedTaskDate}
          onChange={props.updateFormField}
          name="modifiedTaskDate"
        />
        <button
          onClick={() => {
            props.updateTask(props.task);
          }}
        >
          Update
        </button>
        <button onClick={props.cancelEdit}>Cancel </button>
      </React.Fragment>
    );
}