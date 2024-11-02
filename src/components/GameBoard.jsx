const initialGameBoard = 
 [
[null, null,null],
[null,null,null],
[null,null,null]
];


export default function GameBoard(){

    //.map arrow function will be called for each element within initalGameboard
    //in this case thats the three arrays, the parameter of .map would be the element(array)
    //that we receive in order to transform it in some way
    return <>
    <ol id="game-board">
        {initialGameBoard.map( (row, rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map( (playerSymbol, colIndex) => <li key={colIndex}> <button>{playerSymbol}</button> </li>)}
            </ol>
        </li> )}
    </ol>

    </>





}