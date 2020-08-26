import React from 'react';

const ToDonesContainer = ({ toDones }) => {
  const toDonesItems = toDones.map((done) => {
    return (
      <div className='todones-item'>
        <p>{done.text}</p>
        <div className='action'>
          <button className='btn'> &#8635;</button>
        </div>
      </div>
    );
  });

  return (
    <div className='todones-container'>
      <h3>BACKLOG</h3>
      {toDonesItems}
    </div>
  );
};

export default ToDonesContainer;
