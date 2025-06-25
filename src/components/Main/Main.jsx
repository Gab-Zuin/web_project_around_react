import React, { useState, useEffect, useContext } from "react";
import Avatar from "../../../src/Images/Avatar.jpg";
import AddImage from "../../../src/Images/Vector add.svg";
import Edit from "../../../src/Images/Vector edit.svg";
import Popup from "./Popup/Popup.jsx";
import AddCard from "./components/forms/AddCard/AddCard.jsx";
import EditProfile from "./components/forms/EditProfile/EditProfile.jsx";
import EditAvatar from "./components/forms/EditAvatar/EditAvatar.jsx";
import Card from "./components/Card/Card.jsx";
import ImagePopup from "./components/forms/ImagePopup/ImagePopup.jsx";
import api from "../../utils/Api.js";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function Main({
  cards,
  onCardLike,
  onCardDelete,
  onOpenPopup,
  onClosePopup,
  popup,
}) {
  const { currentUser } = useContext(CurrentUserContext);
  const newCard = { title: "Nueva Tarjeta", children: <AddCard /> };
  const editProfile = { title: "Editar Perfil", children: <EditProfile /> };
  const editAvatar = { title: "Editar Avatar", children: <EditAvatar /> };

  const handleAddCard = () => {
    onOpenPopup(newCard);
  };
  const handleEditProfile = () => {
    onOpenPopup(editProfile);
  };
  const handleEditAvatar = () => {
    onOpenPopup(editAvatar);
  };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }
  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <>
      <main className="content">
        <section>
          <div className="profile">
            <img
              src={currentUser.avatar}
              alt="Avatar profile"
              className="profile__avatar"
            />
            <div className="profile__info">
              <div className="profile__content">
                <h1 className="profile__name">{currentUser.name}</h1>
                <button
                  className="profile__edit-button"
                  onClick={handleEditProfile}
                >
                  <img src={Edit} alt="Boton editar" />
                </button>
              </div>
              <p className="profile__profession">{currentUser.about}</p>
            </div>
            <button className="profile__add-button" onClick={handleAddCard}>
              <img src={AddImage} alt="Boton agregar" />
            </button>
          </div>
          <div className="container"></div>
          <div className="profile__edit-avatar">
            <button className="profile__edit-button" onClick={handleEditAvatar}>
              <img src={Edit} alt="Boton editar" />
            </button>
          </div>
        </section>

        <section>
          <ul className="cards__list">
            {cards.map((card) => (
              <Card
                key={card._id}
                card={card}
                onCardLike={onCardLike}
                onCardDelete={onCardDelete}
              />
            ))}
          </ul>
        </section>

        {popup && (
          <Popup onClose={onClosePopup} title={popup.title}>
            {popup.children}
          </Popup>
        )}
      </main>
    </>
  );
}
