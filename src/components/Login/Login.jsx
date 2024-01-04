import { Link } from "react-router-dom";
import logo from "../../images/logo_header.svg";

export default function Login() {
  return (
    <section className="register-login login">
      <div className="register-login__content">
        <Link to="/" className="register-login__link-home">
          <img
            className="register-login__logo"
            src={logo}
            alt="Белый логотип улыбающийся смайлик"
          />
        </Link>
        <h2 className="text register-login__title">Рады видеть!</h2>
        <form className="register-login__form" autoComplete="on">
          <fieldset className="register-login__form-container login__form-container">
            <label className="register-login__label">
              E-mail
              <input
                className="register-login__input login__input"
                type="email"
                name="email"
                required
                placeholder="Введите ваш email"
              />
            </label>
            <label className="register-login__label">
              Пароль
              <input
                className="register-login__input"
                type="password"
                name="password"
                required
                placeholder="Введите ваш пароль"
              />
            </label>
          </fieldset>
          <div className="register-login__button-container">
            <button className="register-login__button">Войти</button>
            <p className="text register-login__paragraph">
              Ещё не зарегистрированы?
              <Link to="/signup" className="register-login__link">
                Регистрация
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
