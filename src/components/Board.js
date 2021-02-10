import React from 'react';
import Square from './Square';

const style = {
  border: '4px solid #333333',
  borderRadios: '10px',
  width: '300px',
  height: '300px',
  margin: '0 auto',
  display: 'grid',
  gridTemplate: 'repeat(3, 3fr) / repeat(3, 1fr)',
};

const Board = ({ squares, onClick }) => (
  <div style={style}>
    {squares.map((square, i) => {
      return <Square key={i} value={square} onClick={() => onClick(i)} />;
    })}

    {/* <Square value='1' onClick={() => onClick('dummy value')} />
    <Square value='2' onClick={() => onClick('dummy value')} />
    <Square value='3' onClick={() => onClick('dummy value')} />
    <Square value='4' onClick={() => onClick('dummy value')} />
    <Square value='5' onClick={() => onClick('dummy value')} />
    <Square value='6' onClick={() => onClick('dummy value')} />
    <Square value='7' onClick={() => onClick('dummy value')} />
    <Square value='8' onClick={() => onClick('dummy value')} />
    <Square value='9' onClick={() => onClick('dummy value')} /> */}
  </div>
);
export default Board;
