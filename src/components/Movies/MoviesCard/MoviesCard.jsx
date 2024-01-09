import like from "../../../images/like.svg";
import deleteIcon from "../../../images/delete.svg";
import photoOne from "../../../images/photo_one.png";
import { useLocation } from "react-router-dom";

export default function MoviesCard() {
  const location = useLocation();

  return (
    <div className="movies-card">
      <a
        className="movies-card__link"
        href="https://youtu.be/5ovzC93EneA?si=c0bRwUiSXX4NwF5c"
        target="blank"
      >
        <img
          className="movies-card__image"
          src={photoOne}
          alt="Превью фильма"
        />
      </a>
      <div className="movies-card__container">
        <h2 className="movies-card__title">33 слова о дизайне</h2>
        {location.pathname === "/saved-movies" && (
          <button className="movies-card__button movies-card__button_type_delete">
            <img
              src={deleteIcon}
              alt="Белая иконка крестика для удаления карточки фильма"
            />
          </button>
        )}
        {location.pathname === "/movies" && (
          <button className="movies-card__button movies-card__button_type_save">
            <img src={like} alt="Прозрачная иконка сердца с серой окантовкой" />
          </button>
        )}
      </div>
      <p className="movies-card__duration">1ч 47м</p>
    </div>
  );
}
