import React from "react";
import img from "../../assets/marketview.jpg"

function Jumbotron({ children }) {
  return (
    <div
      style={{ maxHeight: 560, clear: "both", textAlign: "center" }}
    >
      
      {children}
      <img src={img} alt="bazaar overhead" />
    </div>
  );
}

export default Jumbotron;
