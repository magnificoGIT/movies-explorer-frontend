import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <section className="not-found">
      <h2 className="text not-found__title">404</h2>
      <p className="text not-found__paragraph">Страница не найдена</p>
      <Link to="/" className="not-found__link">
        Назад
      </Link>
    </section>
  );
}