import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList() {
  return (
    <section className="movies-card-list">
      <article className="movies-card-list__container">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </article>
    </section>
  );
}
