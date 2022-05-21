import React, { useState } from "react";
import { useDispatch } from "react-redux";

function Formtask() {
  const [taskText, setTaskText] = useState("");
  const dispatch = useDispatch();

  const addTask = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TASK", payload: taskText });
  };
  return (
    <section className="form-task">
      <div className="container">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center">
            <form onSubmit={addTask}>
              <input
                value={taskText}
                onChange={(e) => {
                  setTaskText(e.target.value);
                }}
                maxLength="28"
                className="form-input"
                type="text"
                placeholder="type your task..."
              />
              <button className="btn-input">Add Task</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Formtask;
