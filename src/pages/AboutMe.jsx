import React from "react";
import "./AboutMe.css";
import ivanPhoto from "../images/f1.jpg";

const AboutMe = () => {
  return (
    <div className="about-me">
      <h1>Привіт, я Іван 👋</h1>
      <img
        src={ivanPhoto}
        alt="Іван Петренко"
        className="profile-photo"
      />
      <p>
        Мене звати <strong>Іван Петренко</strong>, мені 20 років. Я навчаюсь на
        2 курсі факультету інформаційних технологій НУБіП України за
        спеціальністю «Комп’ютерні науки».
      </p>
      <p>
        Цікавлюсь веброзробкою, UI/UX-дизайном і створенням сучасних вебзастосунків. Працюю з такими технологіями, як <strong>HTML, CSS, JavaScript, React</strong> та <strong>Node.js</strong>.
      </p>

      <h2>Мої проєкти</h2>

      <section>
        <h3>HTML + CSS</h3>
        <ul>
          <li>
            <a
              href="https://github.com/Va24092006Nya242-4343334/css-pratice"
              target="_blank"
              rel="noreferrer"
            >
              Laba1 — адаптивна сторінка
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Va24092006Nya242-4343334/css-html"
              target="_blank"
              rel="noreferrer"
            >
              Laba2 — макет портфоліо
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h3>JavaScript</h3>
        <ul>
          <li>
            <a
              href="https://github.com/Va24092006Nya242-4343334/js-DOM1"
              target="_blank"
              rel="noreferrer"
            >
              JS Projects — робота з масивами, подіями та API
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h3>React</h3>
        <ul>
          <li>
            <a
              href="https://github.com/Va24092006Nya242-4343334/lab_14"
              target="_blank"
              rel="noreferrer"
            >
              React App — використанням хуків
            </a>
          </li>
        </ul>
      </section>

      <h2>Контакти</h2>
      <p>📧 Email: <a href="kn23-i.korzhenetskyi@nubip.edu.ua">kn23-i.korzhenetskyi@nubip.edu.ua</a></p>
      <p>
        🔗 GitHub:{" "}
        <a
          href="https://github.com/Va24092006Nya242-4343334"
          target="_blank"
          rel="noreferrer"
        >
          github.com/Va24092006Nya242-4343334
        </a>
      </p>
    </div>
  );
};

export default AboutMe;
