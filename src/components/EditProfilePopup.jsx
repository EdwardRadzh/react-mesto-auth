import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup(props) {
    return(
        <PopupWithForm
            isOpen={props.isOpen}
            onClose={props.onClose}
            name={'profile'}
            buttonText={'Сохранить'}
            title={'Редактировать профиль'}>
            <input name="name" id="username" minLength="2" maxLength="40" className="popup__input popup__input_value_name" type="text" required placeholder="Введите имя"/>
            <span className="popup__input-error" id="username-error"></span>
            <input name="description" id="user-description" minLength="2" maxLength="200" className="popup__input popup__input_value_description" type="text" required placeholder="Введите описание"/>
            <span className="popup__input-error" id="user-description-error"></span>
            </PopupWithForm>
    )
}

export default EditProfilePopup;