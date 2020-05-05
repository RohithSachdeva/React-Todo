import React from 'react';
//Can add functionality/styling to the tasks if have time 

const Todo = props => {
    return (
        <div className={`jobs${props.jobs.completed ? "completed": ""}`} onClick={() => {props.toggleTodo(props.task)}}
        >
             
            <p>{props.jobs.task}</p>
        </div>
    );
};

export default Todo; 