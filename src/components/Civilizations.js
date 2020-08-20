import React, { useState } from "react";
import { useQuery } from "react-query";
import AOE2service from "../service/AOE2service";
import Civilization from "./Civilization";
import { TextField, Container,Typography, Box,LinearProgress } from "@material-ui/core";

const Civilizations = () => {
  const { data, status } = useQuery("civilizations", AOE2service);
  const [search, setSearch] = useState("");
  return (
    <Container>
    <Box mt={2}>
      <Typography variant="h6" component="h2">Civilizations </Typography>

      <TextField
        placeholder="Search for Civilizations"
        onChange={(e) => setSearch(e.target.value)}
      />

      {status === "loading" && <Box mt={1}><LinearProgress /></Box>}
      {status === "error" && "Error fetching civilizations"}
      {status === "success" &&
        data.civilizations
          .filter((unit) => unit.name.toLocaleLowerCase().includes(search))
          .map((civ) => <Civilization key={civ.name} civilization={civ} />)}
          </Box>
    </Container>
  );
};

export default Civilizations;
