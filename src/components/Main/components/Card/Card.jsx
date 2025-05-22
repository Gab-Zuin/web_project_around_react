export default function Card(props) {
  const { name, link, isLiked } = props.card;
  return (
    <>
      <li className="card">
        <div className="card__trash"></div>
        <img src={link} className="card__image" alt=" " />
        <div className="card__content">
          <h2 className="card__place">{name}</h2>
          <div className="card__like"></div>
        </div>
      </li>
    </>
  ); // En Card.jsx
  <img src={link} alt={name} className="card__image" onClick={onClick} />;
}
