import closeIcon from "../../../../images/closeicon.png";

function Popup(props) {
  const { title, children, onClose } = props;
  return (
    <div className="popup">
      <div
        className={`popup__container ${!title ? "image__popup-content" : ""}`}
      >
        <button className="popup__close-button" onClick={onClose}>
          <img
            src={closeIcon}
            alt="x para fechar o popup"
            className="popup__close"
          />
        </button>
        {title && <h3 className="popup__title">{title}</h3>}
        {children}
      </div>
    </div>
  );
}

export default Popup;
