import {useState} from 'react';


const initialGameBoard = 
 [
[null, null,null],
[null,null,null],
[null,null,null]
];


export default function GameBoard(){
    //we are using this state to manage and update the gameboard
    const [gameBoard, setGameBoard] = useState(initialGameBoard);


    //create on click function when button is clicked
    //prevgameBoard is automatically passed into setGameBoard, now we can use it to update the gameboard
    function handleSelectSquare(rowIndex, colIndex){
        setGameBoard( (prevGameBoard)=> {
            //replace one field with an X or an O

            const updatedBoard = [...prevGameBoard.map((innerArray) =>  [...innerArray]  )];
            updatedBoard[rowIndex][colIndex] = 'X';
            return updatedBoard;
        } );
    }


    //.map arrow function will be called for each element within initalGameboard
    //in this case thats the three arrays, the parameter of .map would be the element(array)
    //that we receive in order to transform it in some way
    return <>
    <ol id="game-board">
        {gameBoard.map( (row, rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map( (playerSymbol, colIndex) => 
                <li key={colIndex}> <button onClick={() => handleSelectSquare(rowIndex,colIndex) }>{playerSymbol}</button> </li>)}
            </ol>
        </li> )}
    </ol>

    </>





}