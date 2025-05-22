import React from "react";

import Avatar from "../../../src/Images/Avatar.jpg";
import AddImage from "../../../src/Images/Vector add.svg";
import Edit from "../../../src/Images/Vector edit.svg";
import Popup from "./Popup/Popup.jsx";
import AddCard from "./components/forms/AddCard/AddCard.jsx";
import EditProfile from "./components/forms/EditProfile/EditProfile.jsx";
import EditAvatar from "./components/forms/EditAvatar/EditAvatar.jsx";
import Card from "./components/Card/Card.jsx";
import ImagePopup from "./components/forms/ImagePopup/ImagePopup.jsx";
//import { useState } from "react";

const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
];
console.log(cards);

export default function Main() {
  const [popup, setPopup] = React.useState(null);
  const newCard = { title: "Nueva Tarjeta", children: <AddCard /> };
  const editProfile = { title: "Editar Perfil", children: <EditProfile /> };
  const editAvatar = { title: "Editar Avatar", children: <EditAvatar /> };

  const handleAddCard = () => {
    setPopup(newCard);
  };
  const handleEditProfile = () => {
    setPopup(editProfile);
  };
  const handleEditAvatar = () => {
    setPopup(editAvatar);
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
              src={Avatar}
              alt="Avatar profile"
              className="profile__avatar"
            />
            <div className="profile__info">
              <div className="profile__content">
                <h1 className="profile__name">Jacques Cousteau</h1>
                <button
                  className="profile__edit-button"
                  onClick={handleEditProfile}
                >
                  <img src={Edit} alt="Boton editar" />
                </button>
              </div>
              <p className="profile__profession">Explorador</p>
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
              <Card key={card._id} card={card} />
            ))}
          </ul>
        </section>

        {popup && (
          <Popup onClose={() => setPopup(null)} title={popup.title}>
            {popup.children}
          </Popup>
        )}
      </main>
    </>
  );
}
