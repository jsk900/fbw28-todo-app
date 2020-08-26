import React from 'react';
import ToDoneItem from './ToDoneItem';

const ToDonesContainer = ({ toDones }) => {
  const toDonesItems = toDones.map((done) => {
    return <ToDoneItem done={done} />;
  });

  return (
    <div className='todones-container'>
      <h3>BACKLOG</h3>
      {toDonesItems}
    </div>
  );
};

export default ToDonesContainer;
