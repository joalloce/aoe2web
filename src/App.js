import React,{useState} from "react";
import Navbar from "./components/Navbar";
import Civilizations from "./components/Civilizations";
import Units from "./components/Units";
import Strutures from "./components/Structures";
import Technologies from "./components/Technologies";

function App() {
  const [key, setKey] = useState("civilizations")

  return (
    <>
    <h1>Age of Empires II Info</h1>
    <Navbar setKey={setKey}></Navbar>
    <div className="content">
      {{
        'civilizations': <Civilizations/>,
        'units': <Units/>,
        'structures': <Strutures/>,
        'technologies': <Technologies/>
      }[key]}
    </div>
    </>
  );
}

export default App;
