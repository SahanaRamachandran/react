import React, { useState } from "react";

const Toggle = () => {
  const [currentState, setState] = useState("Kaioken");
  return (
    <div>
      <input
        type="checkbox"
        onChange={currentState === "Kaioken" ? "Super Saiyon" : "Kaioken"}
      ></input>
    </div>
  );
};

export default Toggle;