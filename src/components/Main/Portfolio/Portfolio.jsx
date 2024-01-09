export default function Portfolio() {
  return (
    <section className="portfolio">
      <h4 className="portfolio__title">Портфолио</h4>
      <ul className="portfolio__lists">
        <li className="portfolio__list">
          <a
            target="blank"
            href="https://github.com/magnificoGIT/how-to-learn"
            className="portfolio__link"
          >
            Статичный сайт<p className="portfolio__arrow">↗</p>
          </a>
        </li>
        <li className="portfolio__list">
          <a
            target="blank"
            href="https://github.com/magnificoGIT/russian-travel"
            className="portfolio__link"
          >
            Адаптивный сайт<p className="portfolio__arrow">↗</p>
          </a>
        </li>
        <li className="portfolio__list">
          <a
            target="blank"
            href="https://github.com/magnificoGIT/react-mesto-api-full-gha"
            className="portfolio__link"
          >
            Одностраничное приложение<p className="portfolio__arrow">↗</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
