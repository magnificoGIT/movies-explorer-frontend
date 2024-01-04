import { Link, useLocation } from "react-router-dom";
import logoHeader from "../../images/logo_header.svg";
import iconProfile from "../../images/header__icon-man.svg";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

export default function HeaderAuth() {
  const location = useLocation();
  const isMoviesOrSavedMovies =
    location.pathname === "/movies" ||
    location.pathname === "/saved-movies" ||
    location.pathname === "/profile";

  return (
    <header
      className={`header header-auth ${
        isMoviesOrSavedMovies ? "header-auth__container_type_grey" : ""
      }`}
    >
      <div className="header__container header-auth__container">
        <Link to="/" className="header__logo-link">
          <img
            className="header__logo"
            src={logoHeader}
            alt="Белый логотип улыбающийся смайлик"
          />
        </Link>
        <BurgerMenu />
        <nav className="header__navigation">
          <div className="header-auth__container-movies">
            <Link
              to="/movies"
              className="header__button-link header__button-link_type_auth"
            >
              Фильмы
            </Link>
            <Link
              to="/saved-movies"
              className="header__button-link header__button-link_type_auth"
            >
              Сохранённые фильмы
            </Link>
          </div>
          <Link
            to="/profile"
            className="header__button-link header__button-link_type_auth header__button-link_type_auth-account"
          >
            Аккаунт
            <div
              className={`header__container-icon ${
                isMoviesOrSavedMovies ? "header__container-icon_color_grey" : ""
              }`}
            >
              <img
                src={iconProfile}
                alt="Белая иконка силуэта лица и шеи человека"
                className="header__icon-profile"
              />
            </div>
          </Link>
        </nav>
      </div>
    </header>
  );
}
