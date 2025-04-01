import avatar from "../../images/avatar.png";
import lapis from "../../images/lapis.png";
import lapisEdit from "../../images/Edit.png";
import { useState } from "react";
import Popup from "./components/Popup/Popup";
import NewCard from "./components/Popup/components/NewCard/NewCard";
import EditProfile from "./components/Popup/components/EditProfile/EditProfile";
import EditAvatar from "./components/Popup/components/EditAvatar/EditAvatar";
import Card from "./components/Card/Card";

const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];

console.log(cards);

function Main() {
  const [popup, setPopup] = useState(null);

  const newCardPopup = { title: "Novo local", children: <NewCard /> };
  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };
  const editAvatarPopup = {
    title: "Alterar a foto do perfil",
    children: <EditAvatar />,
  };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__content">
          <div className="profile__content-image">
            <img
              src={avatar}
              alt="Foto do Jacquinho"
              className="profile__content-picture"
            />
            <img
              src={lapis}
              alt="lapis"
              className="profile__content-pencil"
              onClick={() => handleOpenPopup(editAvatarPopup)}
            />
          </div>
          <div className="profile__content-info">
            <div className="profile__content-header">
              <h1 className="profile__content-name">Jacques Cousteau</h1>
              <img
                src={lapisEdit}
                alt="Botao de editar"
                className="profile__content-edit"
                onClick={() => handleOpenPopup(editProfilePopup)}
              />
            </div>

            <p className="profile__content-job">Explorador</p>
          </div>
          <div className="profile__add">
            <button
              className="profile__add-button"
              type="button"
              onClick={() => handleOpenPopup(newCardPopup)}
            >
              +
            </button>
          </div>
        </div>
      </section>
      <section className="elements">
        {cards.map((card) => (
          <Card key={card._id} card={card} handleOpenImagePopup={setPopup} />
        ))}

        {/* <div className="image__popup">
                      <div className="image__popup-content">
                        <img src={null} alt="" className="image__popup-image" />
                        <p className="image__popup-subtitle"></p>
                        <button className="popup__close-button popup__close">
                          <img
                            src="./images/closeicon.png"
                            alt="x para fechar o popup"
                            className="popup__close"
                          />
                        </button>
                      </div>
                    </div> */}

        {/* <div className="popup" id="delete-card">
                      <div className="popup__container-delete">
                        <button className="popup__close-button">
                          <img
                            src="./images/closeicon.png"
                            alt="x para fechar o popup"
                            className="popup__close"
                          />
                        </button>
        
                        <h3 className="popup__title">Tem certeza?</h3>
                        <button
                          id="temCerteza"
                          className="popup__delete-card popup__save-button"
                        >
                          Sim
                        </button>
                      </div>
                    </div> */}

        {/* <div className="popup" id="edit-avatar">
                      <div className="popup__container">
                        <button className="popup__close-button">
                          <img
                            src="./images/closeicon.png"
                            alt="x para fechar o popup"
                            className="popup__close"
                          />
                        </button>
                        <h3 className="popup__title">Alterar a foto do perfil</h3>
                        <form
                          className="popup__form avatar__form"
                          name="signup"
                          novalidate
                        >
                          <input
                            className="popup__url-input popup__input"
                            name="avatar"
                            placeholder="Link do Avatar"
                            type="url"
                            required
                            id="input-avatar"
                          />
                          <p
                            className="popup__msg-error popup__msg-title"
                            id="input-avatar-error"
                          ></p>
                          <button
                            className="popup__save-button"
                            type="submit"
                            id="btnEditAvatar"
                          >
                            Salvar
                          </button>
                        </form>
                      </div>
                    </div> */}
      </section>
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}

export default Main;
