import React, { useRef, useContext } from "react";
import CurrentUserContext from "../../../../../contexts/CurrentUserContext";

export default function EditProfile() {
  const formRef = useRef();
  const { currentUser, handleUpdateUser } = useContext(CurrentUserContext);

  function handleSubmit(event) {
    event.preventDefault();
    const name = formRef.current.elements.name.value;
    const about = formRef.current.elements.about.value;
    handleUpdateUser({ name, about });
    formRef.current.reset();
  }

  return (
    <form className="form" ref={formRef} onSubmit={handleSubmit}>
      <h2 className="form__title">Editar Perfil</h2>
      <input
        type="text"
        className="form__input"
        name="name"
        placeholder="Nombre"
        defaultValue={currentUser.name}
        required
      />
      <span className="form__input-error"></span>
      <input
        type="text"
        className="form__input"
        name="about"
        placeholder="Acerca de ti"
        defaultValue={currentUser.about}
        required
      />
      <span className="form__input-error"></span>
      <button type="submit" className="form__submit">
        Guardar
      </button>
    </form>
  );
}
