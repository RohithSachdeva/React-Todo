import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'



const taskList = [
  {
        task: 'Shop for Groceries',
        id: 1528817077286,
        completed: false
      },
      {
        task: 'Do it big',
        id: 1528817084358,
        completed: false
      }
];

class App extends React.Component {
 constructor() {
   super();
   this.state = {
     list: taskList
   }
 }

 toggleTodo = todoId => {
   console.log(todoId);
   this.setState({
     list: this.state.list.map(todo => {
       if (todoId === todo) {
         
       
     return {
     ...todo,
     completed: !todo.completed
   };
  }
  return todo;
})
   });
  };

  addTodo = (e, todo) => {
    e.preventDefault();
    const newTodo = {
      task: todo,
      id: Date.now(),
      completed: false
    };
    this.setState({
      list: [...this.state.list, newTodo]
    });
  };
   
  clearTask = e => {
    e.preventDefault();
    this.setState({
      list:this.state.list.filter(todo => !todo.completed)
    });
  };

  render() {
    return (
      <div className ="App">
        <div>
          <h2>Welcome to your Todo App!</h2>
           </div>
           <TodoForm addTodo={this.addTodo} />
           <TodoList 
           list = {this.state.list}
           toggleTodo={this.toggleTodo}
           clearTask={this.clearTask} />
      </div>
    )
  }
}
  
export default App;

