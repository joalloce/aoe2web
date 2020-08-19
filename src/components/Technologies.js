import React, { useState } from "react";
import AOE2service from "../service/AOE2service";
import { useQuery } from "react-query";
import Technology from "./Technology";
const Technologies = () => {
  const { data, status } = useQuery("technologies", AOE2service);
  const [search, setSearch] = useState("");
  return (
    <>
      <h1>Strutures</h1>
      <div>
        Search:{" "}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {status === "loading" && "Loading technologies..."}
      {status === "error" && "Error fetching technologies"}
      {status === "success" && data.technologies.filter((unit) => unit.name.toLocaleLowerCase().includes(search)).map((technology) => <Technology key={technology.name} technology={technology} />)}
    </> 
  );
};

export default Technologies;
