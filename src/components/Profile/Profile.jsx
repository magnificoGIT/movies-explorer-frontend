import Header from "../HeaderAuth/HeaderAuth";

export default function Profile() {
  return (
    <>
      <Header />
      <section className="profile">
        <div className="profile__container">
          <h2 className="text profile__title">Привет, Виталий!</h2>
          <form className="profile__form">
            <fieldset className="profile__form-container">
              <label className="text profile__label">
                Имя
                <input
                  className="profile__input"
                  type="text"
                  name="name"
                  required
                  placeholder="Ваше имя"
                />
              </label>
              <label className="text profile__label">
                E-mail
                <input
                  className="profile__input"
                  type="email"
                  name="email"
                  required
                  placeholder="Ваша почта"
                />
              </label>
            </fieldset>
            <div className="profile__container-button">
              <button
                className="profile__button profile__button_type_edit"
                type="submit"
              >
                Редактировать
              </button>
              <button className="profile__button profile__button_type_exit">
                Выйти из аккаунта
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
