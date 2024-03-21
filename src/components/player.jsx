import React, { useState } from "react";

export default function Player({ name, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleNameChange = (event) => {
    setPlayerName(event.target.value);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            value={playerName}
            onChange={handleNameChange}
            className="player-name"
            required
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={isEditing ? handleSaveClick : handleEditClick}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}

export const players = [
  { name: "Player 1", symbol: "X" },
  { name: "Player 2", symbol: "O" },
];
