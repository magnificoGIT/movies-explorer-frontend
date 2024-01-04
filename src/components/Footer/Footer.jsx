export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="text footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="footer__container">
          <p className="text footer__subtitle">© 2020</p>
          <ul className="footer__list">
            <li className="footer__lists">
              <a
                target="blank"
                href="https://practicum.yandex.ru/frontend-developer/?from=catalog"
                className="text footer__subtitle"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer__lists">
              <a
                target="blank"
                href="https://github.com/magnificoGIT"
                className="text footer__subtitle"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
