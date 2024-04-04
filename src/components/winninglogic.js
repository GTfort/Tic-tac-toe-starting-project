import { winningCombinations } from "./winningCombination";

export function checkForWinner(gameBoard, player) {
  for (const combination of winningCombinations) {
    if (combination.every((cell) => gameBoard[cell[0]][cell[1]] === player)) {
      return true; // The player has won
    }
  }
  return false; // No winning combination found
}
