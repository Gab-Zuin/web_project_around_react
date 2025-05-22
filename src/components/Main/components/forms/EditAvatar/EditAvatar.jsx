export default function EditAvatar() {
  return (
    <fieldset className="form">
      <h2 className="form__title">Cambiar foto de perfil</h2>
      <input
        type="url"
        className="form__input"
        id="input-avatar-url"
        name="avatar"
        placeholder="URL de la imagen"
        required
      />
      <span className="form__input-error input-avatar-error"></span>
      <button type="submit" className="form__submit">
        Guardar
      </button>
    </fieldset>
  );
}
