import React,{useState} from "react";
import AOE2service from "../service/AOE2service";
import { useQuery } from "react-query";
import Structure from "./Structure";
import { TextField,Container,Typography,Box,LinearProgress } from "@material-ui/core";
const Structures = () => {
  const { data, status } = useQuery("structures", AOE2service);
  const [search, setSearch] = useState("");
  return (
    <Container>
    <Box mt={2}>
      <Typography variant="h6" component="h2">Structures</Typography>
      <TextField
        placeholder="Search for Civilizations"
        onChange={(e) => setSearch(e.target.value)}
      />
      {status === "loading" && <Box mt={1}><LinearProgress /></Box>}
      {status === "error" && "Error fetching structures"}
      {status === "success" && data.structures.filter((unit) => unit.name.toLocaleLowerCase().includes(search)).map((structure) => <Structure key={structure.id} structure={structure} />)}
      </Box>
    </Container>
  );
};

export default Structures;
