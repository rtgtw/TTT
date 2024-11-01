import {useState} from 'react';

export default function Player({name, symbol}){
    //Manage data that will cause the UI to update when changed
    //use state method

    //You can pass an initial value to useState's parameters
    //then you use destructoring to create variables of the array returned
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick(){
        setIsEditing( (editing) => !editing);
    }

    let playerName = <span className="player-name">{name}</span>;
    let buttonCaption = 'Edit';

    if(isEditing){
        playerName = <input type="text" required value={name}></input>
        buttonCaption = 'Save';
    }
   
    return <>
         <li>
            <span className="player">
           {playerName}
            <span className="player-symbol">{symbol}</span> 
            </span>
            <button onClick={handleEditClick}>{buttonCaption}</button>
        </li>
    
    
    </>

}