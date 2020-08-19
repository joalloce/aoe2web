import React, { useState } from "react";
import AOE2service from "../service/AOE2service";
import { useQuery } from "react-query";
import Unit from "./Unit";
const Units = () => {
  const { data, status } = useQuery("units", AOE2service);
  const [search, setSearch] = useState("");

  return (
    <>
      <h1>Units</h1>
      <div>
        Search:{" "}
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      {status === "loading" && "Loading units..."}
      {status === "error" && "Error fetching units"}
      {status === "success" &&
        data.units.filter((unit) => unit.name.toLocaleLowerCase().includes(search)).map((unit) => <Unit key={unit.id} unit={unit} />)}
    </>
  );
};

export default Units;
