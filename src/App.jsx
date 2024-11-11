import {useState} from 'react';
import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from './components/Log'
import { WINNING_COMBINATIONS } from './winning-combinations';

const initialGameBoard = 
 [
[null, null,null],
[null,null,null],
[null,null,null]
];

//helper function

function deriveActivePlayer(gameTurns){
  let currentPlayer = 'X';

  if(gameTurns.length > 0 && gameTurns[0].player === 'X'){
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function App() {

  //whenever a squar is selected, we want to add a new turn to the array
  const [gameTurns, setGameTurns] = useState([]);
  // const [hasWinner, setHasWinner] = useState(false);

  //derived state
  let activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = initialGameBoard;
  //derived from turns state
  //derived state 

  for(const x of gameTurns){
      //pull out (destructoring) the two objects that can be found within x
      //x is an index within turns array
      const {square, player} = x;
      //square is  an object, so we can destructor both key / value pairs within square in place them
      //in their own variables
      const {row, col} = square;
      gameBoard[row][col] = player;

  }

  let winner = null;

  for(const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].col];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];

    if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol){
        winner = firstSquareSymbol;
    }
  }


  // const [activePlayer, setActivePlayer] = useState('X');

  //Make sure this gets executed when a square is selected
  function handleSelectSquare(rowIndex, colIndex){
    // setActivePlayer( (oldActivePlayer) => oldActivePlayer === 'X' ? 'O': 'X' );

    setGameTurns((prevTurns) => {

      const currentPlayer = deriveActivePlayer(prevTurns);
      
      const updatedTurns = [{square: {row: rowIndex, col: colIndex}, player: currentPlayer },...prevTurns];

      return updatedTurns;
    });
  }
 
      
      //oldActivePlayer === 'X' ? 'O' : 'X'
      //Best practice it to use a ternary expression
      /*

      { 
      if(oldActivePlayer === 'X'){
        oldActivePlayer = 'O';
      }else{
        oldActivePlayer = 'X';
      }

      return oldActivePlayer;
    }*/


  return (
   
     <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
            
            
        </ol>   

        {/* {winner && <p> YOU WON, {winner}!</p>} */}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
      </div>


    <Log turns={gameTurns}/>
     </main>
  )
}

export default App
