import CloseIcon from "../../../images/Close Icon.svg";

export default function Popup({ title = "", children, onClose }) {
  //const { title, children } = props;
  return (
    <div className="popup" id="popup-edit-profile">
      <form
        className={`popup__container ${!title ? "popup__image-container" : ""}`}
      >
        <img
          src={CloseIcon}
          alt="boton de cierre"
          className="popup__close"
          onClick={onClose}
        />
      </form>
      {title && <h3 className="popup__title">{title}</h3>}
      {children}
    </div>
  );
}
