function EditProfile() {
  return (
    <form className="popup__form" name="signup" novalidate>
      <input
        type="text"
        className="popup__name-input popup__input"
        name="name"
        placeholder="Nome"
        required
        minlength="2"
        maxlength="40"
        id="input-name"
      />
      <p className="popup__msg-error name__error" id="input-name-error"></p>

      <input
        type="text"
        className="popup__title-input popup__input"
        name="title"
        placeholder="Sobre mim"
        required
        minlength="2"
        maxlength="200"
        id="input-about"
      />
      <p
        className="popup__msg-error popup__msg-title title__error"
        id="input-about-error"
      ></p>
      <button id="btnEditProfile" className="popup__save-button" type="submit">
        Salvar
      </button>
    </form>
  );
}
export default EditProfile;
