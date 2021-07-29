function ImagePopup(props) {

    const { card, onClose } = props;

    return(
    <div className={`popup popup_type_open ${card.name && 'popup_opened'}`}>
        <div className="popup__photo-container">
            <button 
            onClick={onClose} 
            type="button" 
            className="popup__close popup__close_type_photo-button">    
            </button>
            <img className="popup__photo" src={card.link} alt={card.name} />
            <p className="popup__photo-description">{card.name}</p>
        </div>
    </div>
    )
}

export default ImagePopup;