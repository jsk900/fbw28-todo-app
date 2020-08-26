import React, { Component } from 'react';
import '../css/App.css';
import Navigation from './Navigation';
import ToDosContainer from './ToDosContainer';
import ToDonesContainer from './ToDonesContainer';

class App extends Component {
  state = {
    items: [
      { id: 0, text: 'Wash my face', done: false },
      { id: 1, text: 'Go shopping', done: false },
      { id: 2, text: 'Clean the house', done: false },
      { id: 3, text: 'Build an App', done: false },
      { id: 4, text: 'create a website', done: true },
      { id: 5, text: 'Dinner completed', done: true },
      { id: 6, text: 'Finished reading my book', done: true },
      { id: 7, text: 'completed my homework', done: true },
    ],
  };

  addItem = (inputText) => {
    const item = {
      id: this.state.items.length,
      text: inputText,
      done: false,
    };
    this.setState({
      items: [...this.state.items, item],
    });
  };

  updateItem = (id) => {
    const updatedItems = this.state.items.map((item) => {
      if (item.id === id) {
        item.done = !item.done;
        return item;
      } else {
        return item;
      }
    });
    this.setState({ items: updatedItems });
  };

  render() {
    const toDones = this.state.items.filter((item) => item.done === true);
    const toDos = this.state.items.filter((item) => item.done === false);

    return (
      <div className='app'>
        <Navigation />
        <ToDosContainer
          toDos={toDos}
          addItem={this.addItem}
          updateItem={this.updateItem}
        />
        <ToDonesContainer toDones={toDones} updateItem={this.updateItem} />
      </div>
    );
  }
}

export default App;
