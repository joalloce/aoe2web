import React, { useState } from "react";
import AOE2service from "../service/AOE2service";
import { useQuery } from "react-query";
import Technology from "./Technology";
import { TextField, Container, Typography,Box,LinearProgress } from "@material-ui/core";
const Technologies = () => {
  const { data, status } = useQuery("technologies", AOE2service);
  const [search, setSearch] = useState("");
  return (
    <Container>
      <Box mt={2}>
        <Typography variant="h6" component="h2">
          Technologies
        </Typography>
        <TextField
          placeholder="Search for Civilizations"
          onChange={(e) => setSearch(e.target.value)}
        />
        {status === "loading" && <Box mt={1}><LinearProgress /></Box>}
        {status === "error" && "Error fetching technologies"}
        {status === "success" &&
          data.technologies
            .filter((unit) => unit.name.toLocaleLowerCase().includes(search))
            .map((technology) => (
              <Technology key={technology.name} technology={technology} />
            ))}
      </Box>
    </Container>
  );
};

export default Technologies;
