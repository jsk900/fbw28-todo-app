import React, { Component } from 'react';
import TodoItem from './TodoItem';

class ToDosContainer extends Component {
  state = {
    textInput: '',
  };

  formSubmitted = (e) => {
    e.preventDefault();
    this.state.textInput.trim() !== '' &&
      this.props.addItem(this.state.textInput);
    this.setState({ textInput: '' });
  };

  render() {
    const { toDos, updateItem } = this.props;
    const todoItems = toDos.map((todo) => {
      return <TodoItem key={todo.id} todo={todo} updateItem={updateItem} />;
    });

    return (
      <div className='todos-container'>
        <form className='todo-form' onSubmit={this.formSubmitted}>
          <label htmlFor='' className='input-item'>
            <input
              type='text'
              name='todo'
              value={this.state.textInput}
              onChange={(e) => this.setState({ textInput: e.target.value })}
            />
          </label>
          <input type='submit' className='btn' value='ADD' />
        </form>
        <div className='todos'>
          <h3>TO DO</h3>
          {todoItems}
        </div>
      </div>
    );
  }
}

export default ToDosContainer;
