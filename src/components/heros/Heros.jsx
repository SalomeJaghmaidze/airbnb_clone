import React from "react";
import collage from "../../images/collage.png";
import "./Heros.css";

function Heros() {
  return (
    <section className="section">
      <img src={collage} alt="" />
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}

export default Heros;
