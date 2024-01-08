import avatarMe from "../../../images/avatar_me.png";
import Portfolio from "../Portfolio/Portfolio";

export default function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__block">
          <h3 className="about-me__name">Игорь</h3>
          <p className="about-me__subtitle">
            Фронтенд-разработчик, 24 года
          </p>
          <p className="about-me__paragraph">
            Я родился и живу в Калининграде, обучался в академии РАНХиГС по
            специальности таможенное дело. Увлекаюсь урбанизацией, архитектурой
            и технологиями. Недавно начал кодить. Люблю погружаться в новые и
            сложные для себя сферы деятельности, поэтому и начал изучать
            программирование.
          </p>
          <a
            target="blank"
            className="about-me__link"
            href="https://github.com/magnificoGIT"
          >
            Github
          </a>
        </div>
        <img
          className="about-me__avatar"
          src={avatarMe}
          alt="Цветное изображение профиля человека"
        />
      </div>
      <Portfolio />
    </section>
  );
}
