import React from "react";
//import "animate.css";
import "./KontaktCardComponent.css";

const KontaktCardComponent = props => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src="img_avatar.png"
            alt="Avatar"
          ></img>
        </div>
        <div className="flip-card-back">
          <h1>John Doe</h1>
          <p>Architect Engineer</p>
          <p>We love that guy</p>
        </div>
      </div>
    </div>
  );
};
export default KontaktCardComponent;
