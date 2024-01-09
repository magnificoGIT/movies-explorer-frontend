import HeaderAuth from "../HeaderAuth/HeaderAuth";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Footer from "../Footer/Footer";

export default function SavedMovies() {
  return (
    <>
      <HeaderAuth />
      <main className="movies">
        <SearchForm />
        <MoviesCardList />
      </main>
      <Footer />
    </>
  );
}
