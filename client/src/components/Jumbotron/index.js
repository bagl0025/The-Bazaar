import React from "react";
import img from "../../assets/marketview.jpg"

function Jumbotron({ children }) {
  return (
    <div className="hero"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        height: 600,
        width: 1600,
        maxHeight: 760,
        clear: "both",
        textAlign: "center" }}
    >
      
      {children}
      {/* <img src={img} alt="bazaar overhead" /> */}
    </div>
  );
}

export default Jumbotron;
