import React, { useState } from 'react';
import { calculateWinner } from '../helpers';
import Board from './Board';

const style = {
  width: '280px',
  margin: '280px auto',
};

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  /****  Explaining the destructuring ****/
  /* const board = useState('state');
  ----- and then to access the state we need to write: (for the setter of a "state")
  -> not convenient for us .....
  board[0];
  board[1]; */

  const handleClick = (i) => {
    const boardCopy = [...board];
    // if user click an occupied square or if won, return
    if (winner || boardCopy[i]) {
      return;
    }
    // Put an X or an O in the clicked square
    boardCopy[i] = xIsNext ? 'X' : 'O';
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };

  const renderMoves = () => {
    return (
      <button
        onClick={() => {
          setBoard(Array(9).fill(null));
        }}
      >
        Start Game : Tic-Tac-Teo
      </button>
    );
  };

  return (
    <React.Fragment>
      <Board squares={board} onClick={handleClick} />
      <div style={style}>
        <div>
          {winner
            ? 'Winner: ' + winner
            : 'Next Player: ' + (xIsNext ? 'X' : 'O')}
        </div>
        {renderMoves()}
      </div>
    </React.Fragment>
  );
};

export default Game;
