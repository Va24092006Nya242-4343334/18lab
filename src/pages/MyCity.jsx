import React from "react";
import "./MyCity.css";
import kyiv1 from "../images/з2.jpg";
import kyiv2 from "../images/p.jpg";
import kyiv3 from "../images/p1.jpg";

const MyCity = () => {
  return (
    <div className="my-city">
      <h1>Київ — серце України 💙💛</h1>
      <p>
        Київ — це не просто столиця. Це місто з історією понад 1500 років, де кожна вулиця дихає культурою, архітектурою та силою українського духу.
      </p>
      <p>
        Від Золотих воріт до мосту Патона, від Андріївського узвозу до набережної Дніпра — Київ надихає, дивує і закохує з першого погляду.
      </p>

      <div className="images-grid">
        <img src={kyiv1} alt="Київ 1" />
        <img src={kyiv2} alt="Київ 2" />
        <img src={kyiv3} alt="Київ 3" />
      </div>

      <div className="facts-container">
        <h2>Цікаві факти про Київ:</h2>
        <ul className="facts-list">
          <li>Київ — одне з найстаріших міст Європи.</li>
          <li>Він був заснований більше ніж 1500 років тому.</li>
          <li>Столиця України нараховує понад 3 мільйони жителів.</li>
          <li>Місто славиться своєю архітектурною спадщиною, зокрема Софійським собором.</li>
          <li>Київ — важливий культурний, науковий та економічний центр України.</li>
        </ul>
      </div>
    </div>
  );
};

export default MyCity;
