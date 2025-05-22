function ImagePopup(props) {
  const { name, link } = props;
  return (
    <>
      <div className="popup__align">
        <img
          src="https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
          alt="imagen expandida"
          className="popup__image_expand"
        />
        <h2 className="popup__image_title">Autor</h2>
      </div>
    </>
  );
}

export default ImagePopup;
