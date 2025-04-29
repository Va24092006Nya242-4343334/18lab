import React from "react";
import "./MyFuture.css";

const MyFuture = () => {
  return (
    <div className="my-future">
      <h1>Мій розвиток у світі IT 💻🚀</h1>

      <p>
        Я, <strong>Іван </strong>, студент спеціальності <em>«Комп’ютерні науки»</em> і мрію побудувати кар'єру в сфері front-end розробки та створення сучасних, інтуїтивно зрозумілих веб-додатків.
      </p>

      <h2>Мої 3 кроки до успіху:</h2>
      <ol>
        <li>🌱 Завершити навчання з відмінними результатами та отримати сертифікати з сучасних технологій.</li>
        <li>🛠 Пройти стажування або працювати в престижній IT-компанії.</li>
        <li>🚀 Поглиблювати знання в React, Node.js, та інших інструментах для створення масштабованих веб-додатків.</li>
      </ol>

      <h2>Професія мрії 💼</h2>
      <p>
        Мрію стати частиною великої команди front-end розробників, де я зможу реалізовувати свої ідеї, працювати над цікавими проектами та створювати продукти, які змінюють життя користувачів.
      </p>

      <blockquote>
        "Deep in the human unconscious is a pervasive need for a logical universe that makes sense. But the real universe is always one step beyond logic."
      </blockquote>

      <h2>Мій план розвитку ✨</h2>
      <ul className="timeline">
        <li>
          <strong>2025</strong> – Оволодіти React, адаптивною версткою, реалізувати кілька pet-проєктів.
        </li>
        <li>
          <strong>2026</strong> – Пройти стажування або отримати першу роботу в галузі.
        </li>
        <li>
          <strong>2027+</strong> – Розвивати навички, створювати власні продукти та проєкти.
        </li>
      </ul>
    </div>
  );
};

export default MyFuture;
