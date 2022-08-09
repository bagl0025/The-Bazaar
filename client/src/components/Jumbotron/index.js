import React from "react";
import img from "../../assets/marketview.jpg"

function Jumbotron({ children }) {
  return (
    <div className="hero"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "cover",
        clear: "both",
        textAlign: "center" }}
    >
      
      {children}
    </div>
  );
}

export default Jumbotron;
