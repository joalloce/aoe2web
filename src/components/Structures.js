import React,{useState} from "react";
import AOE2service from "../service/AOE2service";
import { useQuery } from "react-query";
import Structure from "./Structure";
const Strutures = () => {
  const { data, status } = useQuery("structures", AOE2service);
  const [search, setSearch] = useState("");
  return (
    <>
      <h1>Structures</h1>
      <div>
        Search:{" "}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {status === "loading" && "Loading structures..."}
      {status === "error" && "Error fetching structures"}
      {status === "success" && data.structures.filter((unit) => unit.name.toLocaleLowerCase().includes(search)).map((structure) => <Structure key={structure.id} structure={structure} />)}
    </>
  );
};

export default Strutures;
