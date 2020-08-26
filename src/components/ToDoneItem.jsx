import React from 'react';

const ToDoneItem = ({ done, updateItem, deleteItem }) => {
  return (
    <div className='todones-item'>
      <p>{done.text}</p>
      <div className='action'>
        <button className='btn' onClick={() => updateItem(done.id)}>
          &#8635;
        </button>
        <button className='btn' onClick={() => deleteItem(done.id)}>
          &#128465;
        </button>
      </div>
    </div>
  );
};

export default ToDoneItem;
