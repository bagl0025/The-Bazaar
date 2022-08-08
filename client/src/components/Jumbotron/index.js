import React from "react";
import img from "../../assets/marketview.jpg"

function Jumbotron({ children }) {
  return (
    <div className="hero"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: 540,
        width: "cover",
        maxHeight: 700,
        maxWidth: 1600,
        clear: "both",
        textAlign: "center" }}
    >
      
      {children}
    </div>
  );
}

export default Jumbotron;
