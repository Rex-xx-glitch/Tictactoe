import React from "react";

export default function GameOver({ gameMessage, playAgain, playComputer }) {
  return (
    <div>
      <div className="gameOver"></div>

      <div className="gameOverScreen">
        <h1 className="gameMessage">{gameMessage}</h1>
        <input
          type="button"
          onClick={playAgain}
          className="btn btn-dark btn-lg"
          value="Play Again"
        />
        <input
          type="button"
          onClick={playComputer}
          className="btn btn-outline-dark btn-lg"
          value="Play computer"
        />
      </div>
    </div>
  );
}
