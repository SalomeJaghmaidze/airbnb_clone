import React from "react";
import './Card.css'
import image from "../../images/image-person.png";
import star from "../../images/star.png";

function Card() {
  return (
    <div className="card">
      <img src={image} alt="" className="card-image" />
      <div className="card-stats">
        <img src={star} alt="" className="card-star" />
        <span>5.0</span>
        <span className="gray">(6) · </span>
        <span className="gray">USA</span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p>
        <span className="bold">From $136</span>/ person
      </p>
    </div>
  );
}

export default Card;
