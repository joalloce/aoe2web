import React, { useState } from "react";
import AOE2service from "../service/AOE2service";
import { useQuery } from "react-query";
import Unit from "./Unit";
import {
  TextField,
  Container,
  Typography,
  Box,
  LinearProgress,
} from "@material-ui/core";
const Units = () => {
  const { data, status } = useQuery("units", AOE2service);
  const [search, setSearch] = useState("");

  return (
    <Container>
      <Box mt={2}>
        <Typography variant="h6" component="h2">
          Units
        </Typography>
        <TextField
          placeholder="Search for Civilizations"
          onChange={(e) => setSearch(e.target.value)}
        />
        {status === "loading" && <Box mt={1}><LinearProgress /></Box>}
        {status === "error" && "Error fetching units"}
        {status === "success" &&
          data.units
            .filter((unit) => unit.name.toLocaleLowerCase().includes(search))
            .map((unit) => <Unit key={unit.id} unit={unit} />)}
      </Box>
    </Container>
  );
};

export default Units;
