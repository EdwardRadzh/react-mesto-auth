import React from 'react';

function PopupWithForm(props) {
    return(
    <div className={`popup popup_type_${props.name} ${props.isOpen && "popup_opened"}`}>
        <div className="popup__container">
            <button 
            onClick={props.onClose}
            type="button" 
            className={`popup__close popup__close_type_${props.name}`}
            ></button>
            <h2 
                className="popup__title">{props.title}
            </h2>
            <form 
            // name={props.name} 
            className="popup__form popup__form_profile" 
            novalidate>
            {props.children}
            </form>      
        </div>
    </div>
    )
}

export default PopupWithForm