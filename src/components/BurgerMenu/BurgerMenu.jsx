import { Link } from "react-router-dom";
import iconProfile from "../../images/header__icon-man.svg";
import burgerOpenButton from "../../images/burger_button.svg";
import burgerCloseButton from "../../images/burger-menu_icon-close.svg";
import { useState } from "react";

export default function BurgerMenu() {
  const [menuIsActive, setMenuIsActive] = useState(false);

  const openMenu = () => {
    setMenuIsActive(true);
  };

  const closeMenu = () => {
    setMenuIsActive(false);
  };

  return (
    <>
      <div className="burger">
        <button
          className="burger__button burger__button_type_open"
          onClick={openMenu}
        >
          <img
            src={burgerOpenButton}
            alt="Иконка с тремя полосками для открытия бургер меню"
            className="burger__icon burger__icon_type_open"
          />
        </button>

        <div
          className={`burger__menu ${
            menuIsActive ? "burger__menu-active" : ""
          }`}
        >
          <div className="burger__menu__container">
            <button
              className="burger__button burger__button_type_close"
              onClick={closeMenu}
            >
              <img
                src={burgerCloseButton}
                alt="Иконка крестика для закрытия бургер меню"
                className="burger__icon burger__icon_type_close"
              />
            </button>
            <nav className="burger__menu-navigation">
              <ul className="burger__lists">
                <li className="burger__list">
                  <Link to="/" className="burger__link">
                    Главная
                  </Link>
                </li>
                <li className="burger__list">
                  <Link to="/movies" className="burger__link">
                    Фильмы
                  </Link>
                </li>
                <li className="burger__list">
                  <Link to="/saved-movies" className="burger__link">
                    Сохранённые фильмы
                  </Link>
                </li>
              </ul>
              <Link
                to="/profile"
                className="header__button-link header__button-link_type_auth header__button-link_type_auth-account burger__link-profile"
              >
                Аккаунт
                <div className="header__container-icon header__container-icon_color_grey">
                  <img
                    src={iconProfile}
                    alt="Белая иконка силуэта лица и шеи человека"
                    className="header__icon-profile"
                  />
                </div>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
