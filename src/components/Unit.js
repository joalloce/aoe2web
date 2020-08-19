import React from 'react';

const Unit = ({unit}) => {
  return (<div>
    <h2>{unit.name}</h2>
    <p>Description: {unit.description}</p>
    <p>Age: {unit.age}</p>
    <p>Created in: {unit.created_in}</p>
    <p>Build time: {unit.build_time}</p>
    <p>Hit points: {unit.hit_points}</p>
    <p>Attack: {unit.attack}</p>
    {unit.attack_bonus && (<p>Attack bonus: {unit.attack_bonus.map(bonus=>(`${bonus} `))}</p>)}
    <p>Armor: {unit.armor}</p>
    
    <p>Cost: wood:{unit.cost.Wood} gold:{unit.cost.Gold} stone:{unit.cost.Stone} Food:{unit.cost.Food}</p>
  </div>);
}
 
export default Unit;