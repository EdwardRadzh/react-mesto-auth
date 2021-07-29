import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

    const [isEditProfilePopupOpen, setIsProfilePopupOpenClose] = React.useState(false);
    const [isAddCardPopupOpen, setIsCardPopupOpenClose] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsAvatarPopupOpenClose] = React.useState(false);

    const [selectedCard, setSelectedCard] = React.useState({ name: '', link: '' });

    function handleEditProfileClick() {
        setIsProfilePopupOpenClose(!isEditProfilePopupOpen);
    }
    function handleAddPlaceClick() {
        setIsCardPopupOpenClose(!isAddCardPopupOpen);
    }
    function handleEditAvatarClick() {
        setIsAvatarPopupOpenClose(!isEditAvatarPopupOpen);
    }
    function closeAllPopups() {
        setIsAvatarPopupOpenClose(false);
        setIsProfilePopupOpenClose(false);
        setIsCardPopupOpenClose(false);
        setSelectedCard({name:'', link: ''});
    }

    function handleCardClick(selectedCard) {
        setSelectedCard({ name: selectedCard.name, link: selectedCard.link });
    }

    function EditCardPopup() {
        return(
            <PopupWithForm
            isOpen={isAddCardPopupOpen}
            onClose={closeAllPopups}
            name={'add'}
            title={'Новое место'}>
                <input name="name" id="place" minlength="2" maxlength="30" className="popup__input popup__input_value_place" type="text" placeholder="Название" required />
                    <span className="popup__input-error" id="place-error"></span>
                    <input name="link" id="place-link" className="popup__input popup__input_value_link" type="url" placeholder="Ссылка на картинку" required />
                    <span id="place-link-error" className="popup__input-error"></span>
                    <button type="submit" className="popup__btn popup__btn_type_create-card">Создать</button>
            </PopupWithForm>
        )
    };

    function EditAvatarPopup() {
        return(
            <PopupWithForm
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            name={'edit'}
            title={'Обновить аватар'}>
                    <input name="avatar" id="avatar-link" minlength="2" className="popup__input" type="url" required placeholder="Ссылка на картинку" />
                    <span className="popup__input-error" id="avatar-link-error"></span>
                    <button type="submit" className="popup__btn">Сохранить</button>
            </PopupWithForm>
        )
    };

    function EditProfilePopup() {
        return(
            <PopupWithForm
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            name={'profile'}
            title={'Редактировать профиль'}>
            <input name="name" id="username" minlength="2" maxlength="40" className="popup__input popup__input_value_name" type="text" required placeholder="Введите имя"/>
            <span className="popup__input-error" id="username-error"></span>
            <input name="description" id="user-description" minlength="2" maxlength="200" className="popup__input popup__input_value_description" type="text" required placeholder="Введите описание"/>
            <span className="popup__input-error" id="user-description-error"></span>
            <button type="submit" className="popup__btn">Сохранить</button>
            </PopupWithForm>

        )
    };

  return (
    <body className="page">
        <Header />

        <Main
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
        />
        
        <Footer />

        <EditAvatarPopup />
        <EditProfilePopup />
        <EditCardPopup />
        <ImagePopup
            card={selectedCard}
            onClose={closeAllPopups}
        />

        <div className="popup popup_type_delete">
            <div className="popup__container">
                <button type="button" className="popup__close popup__close_type_delete"></button>
                <h2 className="popup__title">Вы уверены?</h2>
                <form name="delete-form" className="popup__form popup__form_delete" novalidate>
                    <button type="submit" className="popup__btn popup__btn_type_delete-card">Да</button>
                </form>      
            </div>
        </div>

    </body>
  );
};

export default App;
