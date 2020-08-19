import React from 'react';

const Navbar = ({setKey}) => {
  return (
    <nav>
      <button onClick={()=>setKey("civilizations")}>Civilizations</button>
      <button onClick={()=>setKey("units")}>Units</button>
      <button onClick={()=>setKey("structures")}>Structures</button>
      <button onClick={()=>setKey("technologies")}>Technologies</button>
    </nav>
  );
}
 
export default Navbar
