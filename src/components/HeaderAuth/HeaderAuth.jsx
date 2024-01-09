import { Link, useLocation } from "react-router-dom";
import logoHeader from "../../images/logo_header.svg";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import ProfileLink from "../ProfileLink/ProfileLink";

export default function HeaderAuth() {
  const location = useLocation();
  const isMoviesOrSavedMovies =
    location.pathname === "/movies" ||
    location.pathname === "/saved-movies" ||
    location.pathname === "/profile";

  return (
    <header
      className={`header header-auth ${
        isMoviesOrSavedMovies ? "header-auth_grey" : ""
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
          <ProfileLink isMoviesOrSavedMovies={isMoviesOrSavedMovies}/>
        </nav>
      </div>
    </header>
  );
}
