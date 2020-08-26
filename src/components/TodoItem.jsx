import React from 'react';

const TodoItem = ({ todo }) => {
  return (
    <div className='todo-item'>
      <p>{todo.text}</p>
      <div className='action'>
        <button className='btn'> &#10004;</button>
      </div>
    </div>
  );
};

export default TodoItem;
