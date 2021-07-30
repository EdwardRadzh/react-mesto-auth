import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditCardPopup(props) {
    return(
        <PopupWithForm
            isOpen={props.isOpen}
            onClose={props.onClose}
            name={'add'}
            buttonText={'Создать'}
            title={'Новое место'}>
                <input name="name" id="place" minLength="2" maxLength="30" className="popup__input popup__input_value_place" type="text" placeholder="Название" required />
                    <span className="popup__input-error" id="place-error"></span>
                    <input name="link" id="place-link" className="popup__input popup__input_value_link" type="url" placeholder="Ссылка на картинку" required />
                    <span id="place-link-error" className="popup__input-error"></span>
                    
            </PopupWithForm>
    )
}

export default EditCardPopup;