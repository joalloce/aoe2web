import React from "react";

const Structure = ({ structure }) => {
  return <div>
  <h2>{structure.name}</h2>
  <p>Description: {structure.description}</p>
  
  <p>Age: {structure.age}</p>
  
  <p>Description: {structure.description}</p>
  
  <p>Cost: wood:{structure.cost.Wood} gold:{structure.cost.Gold} stone:{structure.cost.Stone} Food:{structure.cost.Food}</p>
  <p>Build time: {structure.build_time}</p>
  <p>Hit points: {structure.hit_points}</p>
  </div>;
};

export default Structure;
