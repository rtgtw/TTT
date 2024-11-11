






export default function GameBoard({onSelectSquare, board}){

    let gameBoard = initialGameBoard;
    //derived from turns state
    //derived state 

    for(const x of turns){
        //pull out (destructoring) the two objects that can be found within x
        //x is an index within turns array
        const {square, player} = x;
        //square is  an object, so we can destructor both key / value pairs within square in place them
        //in their own variables
        const {row, col} = square;
        gameBoard[row][col] = player;

    }




    // //we are using this state to manage and update the gameboard
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);



    
    // //create on click function when button is clicked
    // //prevgameBoard is automatically passed into setGameBoard, now we can use it to update the gameboard
    // function handleSelectSquare(rowIndex, colIndex){
    //     setGameBoard( (prevGameBoard)=> {
    //         //replace one field with an X or an O

    //         //transforming the innterArrayElements using the spread operator to create a deep copy
    //         const updatedBoard = [...prevGameBoard.map((innerArrayElement) =>  [...innerArrayElement]  )];
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedBoard;
    //     } );


    //     onSelectSquare();
    // }


    //.map arrow function will be called for each element within initalGameboard
    //in this case thats the three arrays, the parameter of .map would be the element(array)
    //that we receive in order to transform it in some way
    return <>
    <ol id="game-board">
        {board.map( (row, rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map( (playerSymbol, colIndex) => 
                <li key={colIndex}> <button onClick={ () => onSelectSquare(rowIndex,colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button> </li>)}
            </ol>
        </li> )}
    </ol>

    </>





}