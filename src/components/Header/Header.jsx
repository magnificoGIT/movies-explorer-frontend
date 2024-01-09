import { Link } from "react-router-dom";
import logoHeader from "../../images/logo_header.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo-link">
          <img
            className="header__logo"
            src={logoHeader}
            alt="Белый логотип улыбающийся смайлик"
          />
        </Link>
        <div className="header__link-container">
          <Link
            to="/signup"
            className="header__button-link header__button-link_type_register"
          >
            Регистрация
          </Link>
          <Link
            to="/signin"
            className="header__button-link header__button-link_type_signin"
          >
            Войти
          </Link>
        </div>
      </div>
    </header>
  );
}
