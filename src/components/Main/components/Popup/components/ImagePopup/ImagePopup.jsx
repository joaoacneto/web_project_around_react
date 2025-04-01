function ImagePopup(props) {
  const { name, link } = props.card;
  return (
    <>
      <img src={link} alt="" className="image__popup-image" />
      <p className="image__popup-subtitle">{name}</p>
    </>
  );
}

export default ImagePopup;
