import React, { useState } from 'react'
import { useDispatch } from 'react-redux';


function TaskItem({ item, number }) {
    const [show, setShow] = useState('none')
    const [updateText, setUpdateText] = useState('')
    const dispatch = useDispatch()

    const deleteTask = (item) => {
        dispatch({ type: "DELETE_TASK", payload: item });
    }

    const showUpdate = () => {
        setShow('flex')
    }
    const cancelUpdate = () => {
        setShow('none')
    }
    const updateTask = (item) => {
        dispatch({ type: "UPDATE_TASK", payload: { oldTask: item, newTask: updateText } });
        setShow("none");

    }
    return (
      <div className="task">
        <div className="task-main">
          <div className="info">
            <h3 className='count'>{number}</h3>
            <h2>{item}</h2>
          </div>
          <div className="control">
            <button onClick={showUpdate} className="btn btn-primary">Edit</button>
            <button onClick={() => {deleteTask(item)}} className="btn btn-danger">Delete</button>
          </div>
        </div>
        <div style={{display: show}} className=" update">
          <div className="info-input">
            <input value={updateText} onChange={(e) => {setUpdateText(e.target.value)}} type="text" placeholder="Update Your Task..." />
          </div>
          <div className="control">
            <button onClick={() => {updateTask(item)}} className="btn btn-success">Update</button>
            <button onClick={cancelUpdate} className="btn btn-secondary">Cancel</button>
          </div>
        </div>
      </div>
    );
}

export default TaskItem
