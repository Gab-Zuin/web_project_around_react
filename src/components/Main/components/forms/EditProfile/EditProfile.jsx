import React, { useRef, useContext } from "react";
import CurrentUserContext from "../../../../../contexts/CurrentUserContext";

export default function EditAvatar() {
  const avatarRef = useRef();
  const { handleUpdateAvatar } = useContext(CurrentUserContext);

  function handleSubmit(e) {
    e.preventDefault();
    handleUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <form className="popup__form" onSubmit={handleSubmit}>
      <label className="popup__label">
        <input
          type="url"
          className="popup__input popup__input_type_avatar"
          name="avatar"
          placeholder="URL del avatar"
          ref={avatarRef}
          required
        />
        <span className="popup__error" id="avatar-error"></span>
      </label>
      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}
