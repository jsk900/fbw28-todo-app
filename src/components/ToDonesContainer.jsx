import React from 'react';

const ToDonesContainer = () => {
  const todones = [
    { text: 'create a website', done: true },
    { text: 'Dinner completed', done: true },
    { text: 'Finished reading my book', done: true },
    { text: 'completed my homework', done: true },
  ];

  const toDonesItems = todones.map((done) => {
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
