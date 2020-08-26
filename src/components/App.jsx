import React, { Component } from 'react';
import '../css/App.css';
import Navigation from './Navigation';
import ToDosContainer from './ToDosContainer';
import ToDonesContainer from './ToDonesContainer';

class App extends Component {
  state = {
    items: [
      { text: 'Wash my face', done: false },
      { text: 'Go shopping', done: false },
      { text: 'Clean the house', done: false },
      { text: 'Build an App', done: false },
      { text: 'create a website', done: true },
      { text: 'Dinner completed', done: true },
      { text: 'Finished reading my book', done: true },
      { text: 'completed my homework', done: true },
    ],
  };
  render() {
    const toDones = this.state.items.filter((item) => item.done === true);
    const toDos = this.state.items.filter((item) => item.done === false);

    return (
      <div className='app'>
        <Navigation />
        <ToDosContainer toDos={toDos} />
        <ToDonesContainer toDones={toDones} />
      </div>
    );
  }
}

export default App;
