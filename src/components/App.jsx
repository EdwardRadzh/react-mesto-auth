import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from './EditProfilePopup';
import EditCardPopup from './EditCardPopup';
import ConfirmDeleteCardPopup from './ConfirmDeleteCardPopup';

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

    // function EditCardPopup() {
    //     return(
    //         <PopupWithForm
    //         isOpen={isAddCardPopupOpen}
    //         onClose={closeAllPopups}
    //         name={'add'}
    //         buttonText={'Создать'}
    //         title={'Новое место'}>
    //             <input name="name" id="place" minLength="2" maxLength="30" className="popup__input popup__input_value_place" type="text" placeholder="Название" required />
    //                 <span className="popup__input-error" id="place-error"></span>
    //                 <input name="link" id="place-link" className="popup__input popup__input_value_link" type="url" placeholder="Ссылка на картинку" required />
    //                 <span id="place-link-error" className="popup__input-error"></span>
                    
    //         </PopupWithForm>
    //     )
    // };

    // function EditAvatarPopup() {
    //     return(
    //         <PopupWithForm
    //         isOpen={isEditAvatarPopupOpen}
    //         onClose={closeAllPopups}
    //         name={'edit'}
    //         buttonText={'Сохранить'}
    //         title={'Обновить аватар'}>
    //                 <input name="avatar" id="avatar-link" minLength="2" className="popup__input" type="url" required placeholder="Ссылка на картинку" />
    //                 <span className="popup__input-error" id="avatar-link-error"></span>
    //         </PopupWithForm>
    //     )
    // };

    // function EditProfilePopup() {
    //     return(
    //         <PopupWithForm
    //         isOpen={isEditProfilePopupOpen}
    //         onClose={closeAllPopups}
    //         name={'profile'}
    //         buttonText={'Сохранить'}
    //         title={'Редактировать профиль'}>
    //         <input name="name" id="username" minLength="2" maxLength="40" className="popup__input popup__input_value_name" type="text" required placeholder="Введите имя"/>
    //         <span className="popup__input-error" id="username-error"></span>
    //         <input name="description" id="user-description" minLength="2" maxLength="200" className="popup__input popup__input_value_description" type="text" required placeholder="Введите описание"/>
    //         <span className="popup__input-error" id="user-description-error"></span>
    //         </PopupWithForm>

    //     )
    // };

  return (
    <div className="page">
        <Header />

        <Main
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
        />
        
        <Footer />

        <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        />

        <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        />

        <EditCardPopup
        isOpen={isAddCardPopupOpen}
        onClose={closeAllPopups}
        />

        <ImagePopup
            card={selectedCard}
            onClose={closeAllPopups}
        />

        {/* Попап удаления (доделать в следующем спринте) */}

        {/* <div className="popup popup_type_delete">
            <div className="popup__container">
                <button type="button" className="popup__close popup__close_type_delete"></button>
                <h2 className="popup__title">Вы уверены?</h2>
                <form name="delete-form" className="popup__form popup__form_delete">
                </form>      
            </div>
        </div> */}

    </div>
  );
};

export default App;
