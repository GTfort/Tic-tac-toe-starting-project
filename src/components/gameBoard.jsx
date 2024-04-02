import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({
  onSelectingCell,
  activePlayerSymbol,
  updateLog,
}) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleCellClick(rowIndex, cellIndex) {
    const updatedBoard = gameBoard.map((row, index) => {
      if (index === rowIndex) {
        return [...row];
      }
      return row;
    });

    updatedBoard[rowIndex] = [...updatedBoard[rowIndex]]; // Create a new copy of the row
    updatedBoard[rowIndex][cellIndex] = activePlayerSymbol;

    setGameBoard(updatedBoard);
    onSelectingCell();
    updateLog(activePlayerSymbol);
  }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, cellIndex) => (
              <li key={cellIndex}>
                <button
                  onClick={() => handleCellClick(rowIndex, cellIndex)}
                  disabled={playerSymbol !== null} // Disable the button if the cell has been clicked
                >
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
