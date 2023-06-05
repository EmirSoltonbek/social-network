import React from "react";
import "./AboutUs.css";

const AboutUs = ({ item }) => {
  return (
    <div>
      <div className="aftors_wrap">
        <div className="aftors_item">
          <div className="img_wrap">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="context_wrap">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
