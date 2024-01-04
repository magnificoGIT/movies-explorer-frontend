export default function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <h2 className="text project__title">О проекте</h2>
      <div className="about-project__container">
        <div className="about-project__stages">
          <h3 className="text about-project__subtitle">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="text about-project__paragraph">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__stages">
          <h3 className="text about-project__subtitle">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="text about-project__paragraph">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__duration">
        <div className="about-project__duration-week-one">
          <p className="about-project__duration-paragraph about-project__duration-paragraph_color_green">
            1 неделя
          </p>
          <p className="about-project__duration-paragraph about-project__duration-paragraph_color_grey">
            Back-end
          </p>
        </div>
        <div className="about-project__duration-week-four">
          <p className="text about-project__duration-paragraph">4 недели</p>
          <p className="about-project__duration-paragraph about-project__duration-paragraph_color_grey">
            Front-end
          </p>
        </div>
      </div>
    </section>
  );
}
