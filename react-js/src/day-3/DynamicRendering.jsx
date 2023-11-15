import React from "react";

const DynamicRendering = () => {
  const arr = ["react", "angular", "nextjs", "javascript"];
  return (
    <ul>
      {arr.map((element, index) => (
        <li key={index}>{element}</li>
      ))}
    </ul>
  );
};

export default DynamicRendering;