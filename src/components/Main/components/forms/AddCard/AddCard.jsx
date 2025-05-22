export default function AddCard() {
  return (
    <fieldset className="form">
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
      />
      <span className="form__input_type_error input_title-error"></span>
      <input
        type="url"
        className="form__input form__input_link"
        id="input_link"
        name="link"
        placeholder="Enlace a la imagen"
        required
      />
      <span className="form__input_type_error input_link-error"></span>
      <button className="form__submit" type="submit">
        Crear
      </button>
    </fieldset>
  );
}
