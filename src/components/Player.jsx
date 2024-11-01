export default function Player({name, symbol}){

    //Manage data that will cause the UI to update when changed
    return <>
         <li>
            <span className="player">
            <span className="player-name">{name}</span>
            <span className="player-symbol">{symbol}</span>
            </span>
            <button>Edit</button>
        </li>
    
    
    </>

}