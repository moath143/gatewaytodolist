import React from 'react'
import { useSelector } from 'react-redux';


function Navbar() {
    const data = useSelector(state => state)
    return (
      <section className="task-number">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Number Of Task : {data.listTasks.length} </h1>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Navbar
