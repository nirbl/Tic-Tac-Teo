import React from 'react';

// *******   This is for explaining "Destructuring"  ****
/* const props = {
  onClick: () => 'function',
  value: 'X',
};

 const { value } = props;
 */

const style = {
  background: '#999999',
  border: '2px solid #333333',
  color: 'white',
  fontSize: '50px',
  fontWeight: '800',
  cursor: 'pointer',
  outline: 'none',
};

const Square = ({ value, onClick }) => (
  <button style={style} onClick={onClick}>
    {value}
  </button>
);

export default Square;
