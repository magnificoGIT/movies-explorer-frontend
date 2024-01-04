import HeaderAuth from "../HeaderAuth/HeaderAuth";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import Footer from "../Footer/Footer";

export default function Movies() {
  return (
    <>
      <HeaderAuth />
      <main className="movies">
        <SearchForm />
        <MoviesCardList />
        <button className="movies__button">Ещё</button>
      </main>
      <Footer />
    </>
  );
}
