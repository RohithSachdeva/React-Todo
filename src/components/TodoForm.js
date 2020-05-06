import React from 'react';

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            formValue: ''
        };
    }

    onChange = (e) => { this.setState({ formValue: e.target.value })
    console.log(this.state.formValue);
  };


  onSubmit = e => {
      e.preventDefault();
      this.setState({ formValue: ''})
      this.props.addTodo(e, this.state.formValue)  
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input 
            type="text"
            task='jobs'
            value={this.state.formValue}
            name="formValue"
            onChange={this.onChange} 
        />
        <button>Add Task</button>
      </form>
    );
  }
}

export default TodoForm;