import React from "react";
import api from "../utills/Api";
import Card from "./Card";

function Main(props) {

    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();

    const [cards, setCards] = React.useState([])

    React.useEffect(()=> {
        api.getUserInfo()
          .then((res) => {
            setUserName(res.name);
            setUserDescription(res.about);
            setUserAvatar(res.avatar);
          })
          .catch((err) => {
            console.log(err);
          })
      }, []);

    React.useEffect(() => {
        api.getCards()
        .then((res) => {
            console.log(res);
            setCards(res)
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    return(
        <main className="wrapper">
            <section className="profile">
                <div className="profile__general">
                    <div className="profile__container-avatar">
                        <img  className="profile__photo" src={userAvatar} alt="avatar" />
                        <button 
                            
                            className="profile__photo-edit-button" 
                            aria-label="открыть форму обновления аватарки"
                            onClick={props.onEditAvatar}
                        ></button>
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__name">{userName}</h1>
                        <button 
                            aria-label="Изменить" 
                            className="profile__edit" 
                            type="button"
                            onClick={props.onEditProfile}
                        >
                        </button>
                        <p className="profile__description">{userDescription}</p>
                    </div>
                </div>
                <button
                onClick={props.onAddPlace} 
                type="button" 
                className="profile__add-button"
                ></button>
            </section>
            
            <section className="elements">
                
            {cards.map(item => <Card
                    card={item}
                    key={item._id}
                    onCardClick={props.onCardClick} />)}
               
            </section>
        </main>
    );
}

export default Main