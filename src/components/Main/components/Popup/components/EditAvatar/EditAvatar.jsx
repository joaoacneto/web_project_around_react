function EditAvatar() {
  return (
    <form className="popup__form avatar__form" name="signup" novalidate>
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
      <button className="popup__save-button" type="submit" id="btnEditAvatar">
        Salvar
      </button>
    </form>
  );
}

export default EditAvatar;
