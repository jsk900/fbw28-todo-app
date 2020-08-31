import React, { Component } from 'react';
import '../css/App.css';
import Navigation from './Navigation';
import ToDosContainer from './ToDosContainer';
import ToDonesContainer from './ToDonesContainer';
import Help from './Help';
import NotFound from './NotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    localStorage.getItem('todo-app') &&
      this.setState({ items: JSON.parse(localStorage.getItem('todo-app')) });
  }

  addItem = (inputText) => {
    const item = {
      id: this.state.items.length,
      text: inputText,
      done: false,
    };
    this.setState(
      {
        items: [...this.state.items, item],
      },
      () => {
        localStorage.setItem('todo-app', JSON.stringify(this.state.items));
      }
    );
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
    this.setState({ items: updatedItems }, () => {
      localStorage.setItem('todo-app', JSON.stringify(this.state.items));
    });
  };

  deleteItem = (id) => {
    this.setState(
      { items: this.state.items.filter((item) => item.id !== id) },
      () => {
        localStorage.setItem('todo-app', JSON.stringify(this.state.items));
      }
    );
  };

  render() {
    const toDones = this.state.items.filter((item) => item.done === true);
    const toDos = this.state.items.filter((item) => item.done === false);

    return (
      <BrowserRouter>
        <div className='app'>
          <Navigation />
          <Switch>
            <Route exact path='/'>
              <ToDosContainer
                toDos={toDos}
                addItem={this.addItem}
                updateItem={this.updateItem}
                deleteItem={this.deleteItem}
              />
              <ToDonesContainer
                toDones={toDones}
                updateItem={this.updateItem}
                deleteItem={this.deleteItem}
              />
            </Route>

            <Route exact path='/help' component={Help} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
