import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/api';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import ConfirmDeleteCardPopup from './ConfirmDeleteCardPopup';



function App() {

    const [isEditProfilePopupOpen, setIsProfilePopupOpenClose] = React.useState(false);
    const [isAddCardPopupOpen, setIsCardPopupOpenClose] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsAvatarPopupOpenClose] = React.useState(false);

    const [cards, setCards] = React.useState([]);
    const [selectedCard, setSelectedCard] = React.useState({ name: '', link: '' });

    const [currentUser, setCurrentUser] = React.useState({});

    const [saving, setSaving] = React.useState(false)

    React.useEffect(() => {
        Promise.all([api.getUserInfo(), api.getCards()])
            .then(([userInfo, cardList]) => {
                setCurrentUser(userInfo);
                setCards(cardList)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    //поставить/снять лайк
    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        api.changeLikeCardStatus(card._id, !isLiked)
            .then((newCard) => {
                setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
            })
            .catch(err => {
                console.log(err);
            });
    }

    //удалить карточку
    function handleCardDelete(card) {
        api.deleteCard(card._id)
            .then(() => {
                const newCards = cards.filter((item) => item !== card);
                setCards(newCards);
                closeAllPopups()
            })
            .catch(err => {
                console.log(err);
            });
    }

    function handleEditProfileClick() {
        setIsProfilePopupOpenClose(true);
    }
    function handleAddPlaceClick() {
        setIsCardPopupOpenClose(true);
    }
    function handleEditAvatarClick() {
        setIsAvatarPopupOpenClose(true);
    }
    function closeAllPopups() {
        setIsAvatarPopupOpenClose(false);
        setIsProfilePopupOpenClose(false);
        setIsCardPopupOpenClose(false);
        setSelectedCard({ name: '', link: '' });
    }

    function handleCardClick(selectedCard) {
        setSelectedCard({ name: selectedCard.name, link: selectedCard.link });
    }

    function handleUpdateUser(data) {
        setSaving(true)
        api.setUserInfoChanges(data)
            .then((res) => {
                setCurrentUser(res);
                closeAllPopups()
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                setSaving(false)
            })
    }

    function handleUpdateAvatar(data) {
        setSaving(true)
        api.setUserAvatar(data)
            .then((res) => {
                setCurrentUser(res);
                closeAllPopups()
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setSaving(false)
            })
    }

    function handleAddPlaceSubmit(data) {
        setSaving(true)
        api.postCard(data)
            .then((newCard) => {
                setCards([newCard, ...cards]);
                closeAllPopups();
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setSaving(false)
            })
    }

    function clickOnOverlayClose(evt) {
        if (evt.target === evt.currentTarget) {
            closeAllPopups();
        }
    }

    // React.useEffect(() => {
    //     api.getUserInfo()
    //       .then(data => {
    //         setCurrentUser(data);
    //       })
    //       .catch(err => {
    //         console.log(err);
    //       })
    // }, []);


    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
                <Header />

                <Main
                    onEditProfile={handleEditProfileClick}
                    onEditAvatar={handleEditAvatarClick}
                    onAddPlace={handleAddPlaceClick}
                    cards={cards}
                    onCardClick={handleCardClick}
                    onCardLike={handleCardLike}
                    onCardDelete={handleCardDelete}
                />

                <Footer />

                <EditAvatarPopup
                    isOpen={isEditAvatarPopupOpen}
                    onClose={closeAllPopups}
                    onUpdateAvatar={handleUpdateAvatar}
                    onOverlayClose={clickOnOverlayClose}
                    isSaving={saving}
                />

                <EditProfilePopup
                    isOpen={isEditProfilePopupOpen}
                    onClose={closeAllPopups}
                    onUpdateUser={handleUpdateUser}
                    onOverlayClose={clickOnOverlayClose}
                    isSaving={saving}
                />

                <AddPlacePopup
                    isOpen={isAddCardPopupOpen}
                    onClose={closeAllPopups}
                    onAddPlace={handleAddPlaceSubmit}
                    onOverlayClose={clickOnOverlayClose}
                    isSaving={saving}
                />

                <ImagePopup
                    card={selectedCard}
                    onClose={closeAllPopups}
                    onOverlayClose={clickOnOverlayClose}
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
        </CurrentUserContext.Provider>
    );
};

export default App;
