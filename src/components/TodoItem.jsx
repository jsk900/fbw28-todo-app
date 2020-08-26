import React from 'react';

const TodoItem = ({ todo, updateItem }) => {
  return (
    <div className='todo-item'>
      <p>{todo.text}</p>
      <div className='action'>
        <button className='btn' onClick={() => updateItem(todo.id)}>
          &#10004;
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
