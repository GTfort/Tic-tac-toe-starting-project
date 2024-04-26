import { WINNING_COMBINATIONS } from "./winningCombination";

// MinimaxAlgorithm.js

function calculateBestMove(board, player) {
  let bestScore = -Infinity;
  let bestMove;

  // Loop through all empty squares
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === null) {
        // Try the move
        board[i][j] = player;
        // Call minimax to calculate the score for this move
        const score = minimax(board, 0, false);
        // Undo the move
        board[i][j] = null;

        // Update the best move if this score is better
        if (score > bestScore) {
          bestScore = score;
          bestMove = { row: i, col: j };
        }
      }
    }
  }

  return bestMove;
}

function minimax(board, depth, isMaximizing) {
  const result = evaluate(board);

  // If the game is over or the depth limit is reached, return the score
  if (result !== null) {
    return result;
  }

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] === null) {
          board[i][j] = "O"; // AI's move
          const score = minimax(board, depth + 1, false);
          board[i][j] = null;
          bestScore = Math.max(score, bestScore);
        }
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] === null) {
          board[i][j] = "X"; // Opponent's move
          const score = minimax(board, depth + 1, true);
          board[i][j] = null;
          bestScore = Math.min(score, bestScore);
        }
      }
    }
    return bestScore;
  }
}

function evaluate(board) {
  // Implement your evaluation function here
  // This function should return a score representing the current state of the board
  // For example, +10 for AI wins, -10 for opponent wins, 0 for a draw
  // You can use the WINNING_COMBINATIONS array to check for wins

  // Check for a win for AI ('O')
  for (let combination of WINNING_COMBINATIONS) {
    const [a, b, c] = combination;
    if (
      board[a.row][a.column] === "O" &&
      board[b.row][b.column] === "O" &&
      board[c.row][c.column] === "O"
    ) {
      return 10; // AI wins
    }
  }

  // Check for a win for opponent ('X')
  for (let combination of WINNING_COMBINATIONS) {
    const [a, b, c] = combination;
    if (
      board[a.row][a.column] === "X" &&
      board[b.row][b.column] === "X" &&
      board[c.row][c.column] === "X"
    ) {
      return -10; // Opponent wins
    }
  }

  // Check for a draw
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === null) {
        // If there is still an empty square, the game is not a draw yet
        return 0; // Game is still ongoing
      }
    }
  }

  // If no winner and no empty squares left, it's a draw
  return 0; // Draw
}

export { calculateBestMove };
