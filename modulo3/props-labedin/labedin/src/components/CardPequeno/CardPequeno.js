import React from "react";
import './CardPequeno.css'

const CardPequeno = (props) => {
    return (
        <div className="Card-Pequeno">
            <img className="email-ico" src="/Email.png"></img><p className="email">Email: </p>
            {props.email}
        </div>
    )
}

export default CardPequeno