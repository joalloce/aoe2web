import React, { useState } from "react";
import { useQuery } from "react-query";
import AOE2service from "../service/AOE2service";
import Civilization from "./Civilization";

const Civilizations = () => {
  const { data, status } = useQuery("civilizations", AOE2service);
  const [search, setSearch] = useState("");
  return (
    <>
      <h2>Civilizations</h2>
      <div>
        Search:{" "}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {status === "loading" && "Loading civilizations..."}
      {status === "error" && "Error fetching civilizations"}
      {status === "success" &&
      data.civilizations.filter((unit) => unit.name.toLocaleLowerCase().includes(search)).map((civ) => (
          <Civilization key={civ.name} civilization={civ} />
        ))}
    </>
  );
};

export default Civilizations;
