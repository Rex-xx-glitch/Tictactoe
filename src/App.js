import React from "react";
import "./App.css";
import { cells, gameSymbols, currentGameSymbol, players } from "./Game";
import Cell from "./Cell";
import PlayerArrow from "./PlayerArrow";
import GameOverScreen from "./GameOver";

function App() {
  const [cellList, setCellList] = React.useState(cells);
  const [currentSymbol, setCurrentSymbol] = React.useState(currentGameSymbol);
  const [gameOver, setGameOver] = React.useState(false);
  const [currentPlayerIndex, setCurrentPlayerIndex] = React.useState(0);
  const [gameMessage, setGameMessage] = React.useState("");

  React.useEffect(() => {
    const rand = Math.floor(Math.random(2));
    setCurrentPlayerIndex(rand);
  }, []);

  const HandleClick = (id) => {
    if (!gameOver) {
      setCellList((prev) =>
        prev.map((cell) => {
          if (cell.id === id) {
            if (!cell.used) {
              cell.value = getCurrSymbol();
              cell.used = true;
              checkWin();
              if (!gameOver) {
                setCurrPlayerIndex();
              }
            }
          }
          return cell;
        })
      );
    }
  };

  const checkWin = () => {
    if (cellList.filter((cell) => cell.value === null).length === 0) {
      setTimeout(() => setGameOver(true), 1000);
      setGameMessage("It's a draw");
    } else if (
      (cellList[0].value === cellList[1].value &&
        cellList[1].value === cellList[2].value &&
        cellList[2].value !== null) ||
      (cellList[3].value === cellList[4].value &&
        cellList[4].value === cellList[5].value &&
        cellList[5].value !== null) ||
      (cellList[6].value === cellList[7].value &&
        cellList[7].value === cellList[8].value &&
        cellList[8].value !== null) ||
      (cellList[0].value === cellList[3].value &&
        cellList[3].value === cellList[6].value &&
        cellList[6].value !== null) ||
      (cellList[1].value === cellList[4].value &&
        cellList[4].value === cellList[7].value &&
        cellList[7].value !== null) ||
      (cellList[2].value === cellList[5].value &&
        cellList[5].value === cellList[8].value &&
        cellList[8].value !== null) ||
      (cellList[0].value === cellList[4].value &&
        cellList[4].value === cellList[8].value &&
        cellList[8].value !== null) ||
      (cellList[2].value === cellList[4].value &&
        cellList[4].value === cellList[6].value &&
        cellList[6].value !== null)
    ) {
      setTimeout(() => setGameOver(true), 1000);
      setGameMessage(`${players[currentPlayerIndex].name}, wins`);
      return true;
    }

    return false;
  };

  const getCurrSymbol = () => {
    const currSy = gameSymbols[currentSymbol];
    if (currentSymbol === 0) setCurrentSymbol(1);
    else setCurrentSymbol(0);
    return currSy;
  };

  const setCurrPlayerIndex = () => {
    if (currentPlayerIndex === 0) {
      setCurrentPlayerIndex(1);
    } else {
      setCurrentPlayerIndex(0);
    }
  };

  const playAgain = () => {
    const rand = Math.floor(Math.random(2));
    
    setCurrentPlayerIndex(rand);
    setCellList(prev => prev.map(cell => {
      cell.value = null;
      cell.used = false;
      return cell;
    }));
    setGameOver(false);
    setGameMessage("");
  };

  return (
    <div className="">
      <div>
        <div className="head">
          <div className="player1">{players[0].name}</div>
          <PlayerArrow currentPlayer={currentPlayerIndex + 1} />
          <div className="player2">{players[1].name}</div>
        </div>

        <div className="App row">
          {cellList.map((cell) => (
            <Cell
              HandleClick={HandleClick}
              key={cell.id}
              id={cell.id}
              value={cell.value}
            />
          ))}
        </div>
      </div>

      {(gameOver === true) && (
        <GameOverScreen
          gameMessage={gameMessage}
          playAgain={playAgain}
          playComputer={() => console.log("play computer")}

        />
      )}
    </div>
  );
}

export default App;
