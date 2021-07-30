import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
    return(
        <PopupWithForm
        isOpen={props.isOpen}
        onClose={props.onClose}
        name={'edit'}
        buttonText={'Сохранить'}
        title={'Обновить аватар'}
        >
            <input name="avatar" id="avatar-link" minLength="2" className="popup__input" type="url" required placeholder="Ссылка на картинку" />
            <span className="popup__input-error" id="avatar-link-error"></span>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;