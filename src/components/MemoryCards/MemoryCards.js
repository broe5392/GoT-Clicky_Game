import React from "react";
import "./MemoryCards.css";

const MemoryCards = props => (
    
        <img className="images rounded" id={props.id} onClick={props.handleBtnClick} alt={props.name} src={props.img} />
    
);

export default MemoryCards;