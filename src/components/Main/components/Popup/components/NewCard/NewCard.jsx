function NewCard() {
  return (
    <form className="popup__form add__form" name="signup" novalidate>
      <input
        type="text"
        className="popup__name-input popup__input"
        name="name"
        placeholder="Título"
        required
        maxlength="30"
        minlength="2"
        id="input-title"
      />
      <p className="popup__msg-error" id="input-title-error"></p>
      <input
        className="popup__url-input popup__input"
        name="URL"
        placeholder="Link de Imagem"
        type="url"
        required
        id="input-url"
      />
      <p className="popup__msg-error popup__msg-title" id="input-url-error"></p>
      <button className="popup__save-button" type="submit" id="btnAddSubmit">
        Criar
      </button>
    </form>
  );
}

export default NewCard;
