export default function Techs() {
  return (
    <section className="techs" id="about-technology">
      <h2 className="text project__title">Технологии</h2>
      <div className="techs__container">
        <h3 className="text techs__subtitle">7 технологий</h3>
        <p className="text techs__paragraph">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
      </div>
      <ul className="techs__lists">
        <li className="text tech__list">HTML</li>
        <li className="text tech__list">CSS</li>
        <li className="text tech__list">JS</li>
        <li className="text tech__list">React</li>
        <li className="text tech__list">Git</li>
        <li className="text tech__list">Express.js</li>
        <li className="text tech__list">mongoDB</li>
      </ul>
    </section>
  );
}
