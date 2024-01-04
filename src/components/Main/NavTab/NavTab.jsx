export default function NavTab() {
  return (
    <div className="nav-tab">
      <nav className="nav-tab__navigation">
        <ul className="nav-tab__list">
          <li className="nav-tab__links">
            <a href="#about-project" className="text nav-tab__about">
              О проекте
            </a>
          </li>
          <li className="nav-tab__links">
            <a href="#about-technology" className="text nav-tab__about">
              Технологии
            </a>
          </li>
          <li className="nav-tab__links">
            <a href="#about-me" className="text nav-tab__about">
              Студент
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
