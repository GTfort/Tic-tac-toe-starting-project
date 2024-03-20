import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleCellClick(rowIndex, cellIndex) {
    const updatedBoard = gameBoard.map((row, index) => {
      if (index === rowIndex) {
        return [...row];
      }
      return row;
    });

    updatedBoard[rowIndex] = [...updatedBoard[rowIndex]]; // Create a new copy of the row
    updatedBoard[rowIndex][cellIndex] = "X";

    setGameBoard(updatedBoard);
  }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, cellIndex) => (
              <li key={cellIndex}>
                <button onClick={() => handleCellClick(rowIndex, cellIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
