import React from 'react';

const Civilization = ({civilization}) => {
  return (<div>
    <h2>{civilization.name}</h2>
    <p>Army Type: {civilization.army_type}</p>
    <p>Unique Units: {civilization.unique_unit.map(unit=>(`${unit} `))}</p>
    <p>Unique Technologies: {civilization.unique_tech.map(tech=>(`${tech} `))}</p>
    <p>Team bonus: {civilization.team_bonus}</p>
    <p>Civilization bonus: {civilization.civilization_bonus.map(bonus=>(`${bonus} `))}</p>
  </div>);
}
 
export default Civilization;