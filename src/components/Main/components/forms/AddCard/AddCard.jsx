import { useState } from "react";

export default function AddCard({ onAddPlaceSubmit }) {
  function onSubmit(event) {
    event.preventDefault();
    onAddPlaceSubmit({ name, link });
    //api.createCard({ name, link });
  }

  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  return (
    <form className="form" onSubmit={onSubmit}>
      <h2 className="form__title">Nuevo lugar</h2>

      <input
        type="text"
        className="form__input form__input_title"
        id="input_title"
        name="title"
        minLength="2"
        maxLength="30"
        placeholder="Título"
        required
        onChange={(e) => setName(e.target.value)}
      />
      <span className="form__input_type_error input_title-error"></span>
      <input
        type="url"
        className="form__input form__input_link"
        id="input_link"
        name="link"
        placeholder="Enlace a la imagen"
        required
        onChange={(e) => setLink(e.target.value)}
      />
      <span className="form__input_type_error input_link-error"></span>
      <button className="form__submit" type="submit">
        Crear
      </button>
    </form>
  );
}
