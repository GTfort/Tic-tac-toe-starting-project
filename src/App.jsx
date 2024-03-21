import Player, { players } from "./components/player";
import GameBoard from "./components/gameBoard";
import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  function handlePlayerChange() {
    setActivePlayer(activePlayer === "X" ? "O" : "X");
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
        />
      </div>
      LOG
    </main>
  );
}

export default App;
