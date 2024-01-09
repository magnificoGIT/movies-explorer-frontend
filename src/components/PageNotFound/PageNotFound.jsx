import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const navigate = useNavigate();
   
  return (
    <section className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__paragraph">Страница не найдена</p>
      <button className="not-found__link" onClick={() => navigate(-1)}>
        Назад
      </button>
    </section>
  );
}
