import React from 'react';

const ToDosContainer = () => {
  const todos = [
    {
      text: 'Wash my face',
      done: false,
    },
    {
      text: 'Go shopping',
      done: false,
    },

    {
      text: 'Clean the house',
      done: false,
    },
    {
      text: 'Build an App',
      done: false,
    },
  ];

  const todoItems = todos.map((todo) => {
    return (
      <div className='todo-item'>
        <p>{todo.text}</p>
        <div className='action'>
          <button className='btn'> &#10004;</button>
        </div>
      </div>
    );
  });

  return (
    <div className='todos-container'>
      <form className='todo-form'>
        <label htmlFor='' className='input-item'>
          <input type='text' name='todo' />
        </label>
        <input type='submit' className='btn' value='ADD' />
      </form>
      <div className='todos'>
        <h3>TO DO</h3>
        {todoItems}
      </div>
    </div>
  );
};

export default ToDosContainer;
