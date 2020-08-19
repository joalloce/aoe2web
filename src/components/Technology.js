import React from "react";

const Technology = ({ technology }) => {
  return (
    <div>
      <h2>{technology.name}</h2>
      <p>Description: {technology.description}</p>

      <p>Age: {technology.age}</p>
      <p>Develops in: {technology.develops_in}</p>
      <p>Cost: wood:{technology.cost.Wood} gold:{technology.cost.Gold} stone:{technology.cost.Stone} Food:{technology.cost.Food}</p>
    </div>
  );
};

export default Technology;
