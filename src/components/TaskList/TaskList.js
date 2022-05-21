import React from 'react'
import TaskItem from './TaskItem';
import { useSelector } from 'react-redux';


function TaskList() {
  const data = useSelector(state => state)
  const dataList = data.listTasks.map((item, index) => {
    console.log("index know", index + 1);
    return (
      <TaskItem number={index + 1} item={item} key={index} />
      
    );
  })
    return (
      <section className="task-list">
        <div className="container">
          <div className="row">
            <div className="col-md-12">{dataList}</div>
          </div>
        </div>
      </section>
    );
}

export default TaskList
