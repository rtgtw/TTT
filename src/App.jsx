import {useState} from 'react';
import Player from './components/Player';
import GameBoard from './components/GameBoard';
function App() {
  
  const [activePlayer, setActivePlayer] = useState('X');

  //Make sure this gets executed when a square is selected
  function handleSelectSquare(){
    setActivePlayer( (oldActivePlayer) => oldActivePlayer === 'X' ? 'O': 'X' );
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

        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
      </div>


    LOG
     </main>
  )
}

export default App
