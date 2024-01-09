import { Link } from "react-router-dom";
import logo from "../../images/logo_header.svg";

export default function Register() {
  return (
    <section className="register-login">
      <div className="register-login__content">
        <Link to="/" className="register-login__link-home">
          <img
            className="register-login__logo"
            src={logo}
            alt="Белый логотип улыбающийся смайлик"
          />
        </Link>
        <h2 className="register-login__title">Добро пожаловать!</h2>
        <form className="register-login__form">
          <fieldset className="register-login__form-container">
            <label className="register-login__label">
              Имя
              <input
                placeholder="Введите ваше имя"
                type="text"
                name="name"
                className="register-login__input"
                required
              />
            </label>
            <label className="register-login__label">
              E-mail
              <input
                autoComplete="on"
                placeholder="Введите ваш email"
                type="email"
                name="email"
                className="register-login__input"
                required
              />
            </label>
            <label className="register-login__label">
              Пароль
              <input
                autoComplete="off"
                placeholder="Введите пароль"
                type="password"
                name="password"
                className="register-login__input"
                required
              />
            </label>
          </fieldset>
          <div className="register-login__button-container">
            <button className="register-login__button">
              Зарегистрироваться
            </button>
            <p className="register-login__paragraph">
              Уже зарегистрированы?
              <Link to="/signin" className="register-login__link">
                Войти
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
