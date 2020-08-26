import React from 'react';

const ToDoneItem = ({ done, updateItem }) => {
  return (
    <div className='todones-item'>
      <p>{done.text}</p>
      <div className='action'>
        <button className='btn' onClick={() => updateItem(done.id)}>
          &#8635;
        </button>
      </div>
    </div>
  );
};

export default ToDoneItem;
