import React, {Fragment} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Formtask from './components/Formtask/Formtask';
import TaskList from './components/TaskList/TaskList';
import taskReducer from './components/Taskreducer/Taskreducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


function App() {
  const store = createStore(taskReducer);
  return (
    <Fragment>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1>Todo List App</h1>
            </div>
          </div>
        </div>
      </header>
      <Provider store={store}>
        <Navbar />
        <Formtask />
        <TaskList />
      </Provider>
    </Fragment>
  );
}

export default App;
