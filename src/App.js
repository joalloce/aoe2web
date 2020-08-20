import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Civilizations from "./components/Civilizations";
import Units from "./components/Units";
import Structures from "./components/Structures";
import Technologies from "./components/Technologies";

function App() {
  const [key, setKey] = useState("civilizations");

  return (
    <>
      <Navbar setKey={ setKey} theKey={key}></Navbar>

       <div className="content">
        {
          {
            civilizations: <Civilizations />,
            units: <Units />,
            structures: <Structures />,
            technologies: <Technologies />,
          }[key]
        }
      </div>
    </>
  );
}

export default App;
