import React from "react";

export default function EditAvatar({ onUpdateAvatar }) {
  const formRef = React.useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const avatarUrl = formRef.current.elements.avatar.value;
    onUpdateAvatar({ avatar: avatarUrl });
    formRef.current.reset();
  }

  return (
    <form className="form" ref={formRef} onSubmit={handleSubmit}>
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
    </form>
  );
}
