export default function Portfolio() {
  return (
    <section className="portfolio">
      <h4 className="text portfolio__title">Портфолио</h4>
      <ul className="portfolio__lists">
        <li className="portfolio__list">
          <a
            target="blank"
            href="https://github.com/magnificoGIT/how-to-learn"
            className="text portfolio__link"
          >
            Статичный сайт<p className="text portfolio__arrow">↗</p>
          </a>
        </li>
        <li className="portfolio__list">
          <a
            target="blank"
            href="https://github.com/magnificoGIT/russian-travel"
            className="text portfolio__link"
          >
            Адаптивный сайт<p className="text portfolio__arrow">↗</p>
          </a>
        </li>
        <li className="portfolio__list">
          <a
            target="blank"
            href="https://github.com/magnificoGIT/react-mesto-api-full-gha"
            className="text portfolio__link"
          >
            Одностраничное приложение<p className="text portfolio__arrow">↗</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
