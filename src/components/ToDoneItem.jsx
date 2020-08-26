import React from 'react';

const ToDoneItem = ({ done }) => {
  return (
    <div className='todones-item'>
      <p>{done.text}</p>
      <div className='action'>
        <button className='btn'> &#8635;</button>
      </div>
    </div>
  );
};

export default ToDoneItem;
