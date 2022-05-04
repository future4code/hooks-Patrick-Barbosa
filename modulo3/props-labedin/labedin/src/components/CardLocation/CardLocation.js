import React from "react";
import './CardLocation.css'


const CardLocation = (props) => {
    return (
        <div className="CardLocation">
            <img className="Home-ico" src="/Home.png"></img><p className="Location">Endereço: </p>
            {props.local}
        </div>
    )
}

export default CardLocation