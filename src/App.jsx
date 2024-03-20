import Player, { players } from "./components/player";
import GameBoard from "./components/gameBoard";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          {players.map((player, index) => (
            <Player key={index} name={player.name} symbol={player.symbol} />
          ))}
        </ol>
        GAME BOARD
        <GameBoard />
      </div>
      LOG
    </main>
  );
}

export default App;
