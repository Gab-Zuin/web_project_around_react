export default function Card({ card, onCardLike, onCardDelete }) {
  const { name, link, isLiked } = card;

  // Determina la clase del botón like
  const cardLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_is-active" : ""
  }`;

  //const { currentUser } = useContext(CurrentUserContext);

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <li className="card">
      <button className="card__trash" onClick={handleDeleteClick}></button>
      <img src={link} className="card__image" alt={name} />
      <div className="card__content">
        <h2 className="card__place">{name}</h2>
        <button
          className={cardLikeButtonClassName}
          onClick={handleLikeClick}
          type="button"
        ></button>
      </div>
    </li>
  );
}
