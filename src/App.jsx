import Player, { players } from "./components/player";
import GameBoard from "./components/gameBoard";
import React, { useState } from "react";
import Log from "./components/log";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [logEntries, setLogEntries] = useState([]);
  function handlePlayerChange() {
    setActivePlayer(activePlayer === "X" ? "O" : "X");
  }

  // In App.jsx
  // Function to update the log
  function updateLog(playerSymbol) {
    console.log("Updating log with:", playerSymbol);
    setLogEntries([...logEntries, playerSymbol]);
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          {players.map((player, index) => (
            <Player
              key={index}
              name={player.name}
              symbol={player.symbol}
              isActive={activePlayer === player.symbol}
            />
          ))}
        </ol>
        GAME BOARD
        <GameBoard
          onSelectingCell={handlePlayerChange}
          activePlayerSymbol={activePlayer}
          updateLog={updateLog}
        />
      </div>
      <Log logEntries={logEntries} />
    </main>
  );
}

export default App;
