// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  
    return (
      <div>
        {props.list.map(jobs => (
          <Todo key={jobs.id} jobs={jobs} toggleTodo={props.toggleTodo} />
        ))}
        <button onClick={props.clearTask}>
          Clear
        </button>
      </div>
    );
  };

  export default TodoList; 