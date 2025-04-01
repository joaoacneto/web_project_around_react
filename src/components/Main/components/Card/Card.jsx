import Trash from "../../../../images/Trash.svg";
import ImagePopup from "../Popup/components/ImagePopup/ImagePopup";

function Card(props) {
  const { name, link, isLiked } = props.card;
  const { handleOpenImagePopup } = props;

  const imagePopup = {
    children: <ImagePopup card={props.card} />,
  };

  return (
    <div className="element">
      <img
        className="element__image"
        src={link}
        alt=""
        onClick={() => handleOpenImagePopup(imagePopup)}
      />
      <div className="element__info">
        <p className="element__title">{name}</p>
        <button className="element__image-heart"></button>
      </div>
      <img
        className="element__delete"
        src={Trash}
        alt="ícone de lata de lixo"
      />
    </div>
  );
}

export default Card;
