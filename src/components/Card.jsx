import React from "react";

function Card(props) {
    const { card, onCardClick} = props;

    function handleClick() {
        onCardClick(card);
        console.log(card);
    }

    return(
        <div key={card._id} className="elements__element">
            <button type="button" className="elements__trash"></button>
            <div className="elements__img-wrapper">
                <img 
                className="elements__img" 
                src={card.link} 
                alt="Фото"
                onClick={handleClick} />
            </div>
            <div className="elements__overlay">
                <h2 className="elements__title">{card.name}</h2>
                <div className="elements__like-container">
                    <button type="button" className="elements__like"></button>
                    <span className="elements__like-count">{card.likes.length}</span>
                </div>
            </div>
        </div>

    )
}

export default Card;