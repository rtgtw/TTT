import {useState} from 'react';

export default function Player({initialName, symbol, isActive}){
    //Manage data that will cause the UI to update when changed
    //use state method

    //You can pass an initial value to useState's parameters
    //then you use destructoring to create variables of the array returned
    const [isEditing, setIsEditing] = useState(false);

    const [playerName, setPlayerName] = useState(initialName);

    function handleEditClick(){
        setIsEditing( (editing) => !editing);
    }

    function handleChange(event){
        console.log(event);
            setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    let buttonCaption = 'Edit';

    if(isEditing){
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}></input>
        buttonCaption = 'Save';
    }
   
    return <>
         <li className={isActive ? 'active' : undefined}>
            <span className="player">
           {editablePlayerName}
            <span className="player-symbol">{symbol}</span> 
            </span>
            <button onClick={handleEditClick}>{buttonCaption}</button>
        </li>
    
    
    </>

}