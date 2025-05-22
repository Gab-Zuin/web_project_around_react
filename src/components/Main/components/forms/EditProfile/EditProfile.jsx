export default function EditProfile() {
  return (
    <fieldset className="form">
      <h2 className="form__title">Editar perfil</h2>

      <input
        type="text"
        className="form__input form__input_name"
        id="input_name"
        name="name"
        minLength="2"
        maxLength="40"
        placeholder="Nombre"
        required
      />
      <span className="form__input_type_error input_name-error"></span>
      <input
        type="text"
        className="form__input form__input_about"
        id="input_about"
        name="about"
        minLength="2"
        maxLength="200"
        placeholder="Acerca de mí"
        required
      />
      <span className="form__input_type_error input_about-error"></span>
      <button className="form__submit" type="submit">
        Guardar
      </button>
    </fieldset>
  );
}
