import React from "react";
import './Card.css';

function Card(props) {
    return (
        <div className="Card">
            <div className="upper-container">
                <div className="image-container">
                    <img src={props.loca} alt="logos" height="100px" width="100px" />
                </div>
            </div>
            <div className="lower-container">
                <h3>{props.name}</h3>
                <h4>{props.job}</h4>
                <p>{props.about}</p>
                <a href={props.visit} target="_blank" rel="noreferrer">
                    <button>Visit Profile</button>
                </a>
            </div>
        </div>
    )
}

export default Card;