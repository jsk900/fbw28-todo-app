import React from 'react';

const TodoItem = ({ todo, updateItem, deleteItem }) => {
  return (
    <div className='todo-item'>
      <p>{todo.text}</p>
      <div className='action'>
        <button className='btn' onClick={() => updateItem(todo.id)}>
          &#10004;
        </button>
        <button className='btn' onClick={() => deleteItem(todo.id)}>
          &#128465;
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
