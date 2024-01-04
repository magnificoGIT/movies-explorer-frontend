import iconFindMovies from "../../../images/find_movies_search-form.svg";

export default function SearchForm() {
  return (
    <form className="search-form">
      <div className="search-form__container">
        <input className="search-form__input-films" placeholder="Фильм" />
        <button className="search-form__button-find">
          <img
            className="search-form__icon-find"
            src={iconFindMovies}
            alt="Белая иконка стрелки '>'"
          />
        </button>
      </div>
      <label
        className="search-form__container-checkbox"
        type="search"
        name="movie"
        id="movie"
        required
      >
        <input className="search-form__invisible-checkbox" type="checkbox" />
        <span className="search-form__visible-checkbox"></span>
        <p className="text search-form__title">Короткометражки</p>
      </label>
    </form>
  );
}
