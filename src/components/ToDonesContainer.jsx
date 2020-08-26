import React from 'react';
import ToDoneItem from './ToDoneItem';

const ToDonesContainer = ({ toDones, updateItem }) => {
  const toDonesItems = toDones.map((done) => {
    return <ToDoneItem key={done.id} done={done} updateItem={updateItem} />;
  });

  return (
    <div className='todones-container'>
      <h3>BACKLOG</h3>
      {toDonesItems}
    </div>
  );
};

export default ToDonesContainer;
