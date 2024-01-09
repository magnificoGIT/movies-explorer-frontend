export default function NavTab() {
  return (
    <div className="nav-tab">
      <nav className="nav-tab__navigation">
        <ul className="nav-tab__lists">
          <li className="nav-tab__link">
            <a href="#about-project" className="nav-tab__about">
              О проекте
            </a>
          </li>
          <li className="nav-tab__link">
            <a href="#about-technology" className="nav-tab__about">
              Технологии
            </a>
          </li>
          <li className="nav-tab__link">
            <a href="#about-me" className="nav-tab__about">
              Студент
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
