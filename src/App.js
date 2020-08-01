import React from "react";
import { Box, Typography, Container } from "@material-ui/core";
import {
  useCivilization,
  useUnit,
  useTechnology,
  useStructure,
} from "./service/useAOE2API";
function App() {
  const [civList] = useCivilization(1);
  const [unitList] = useUnit(1);
  console.log(civList);
  console.log(unitList);
  const [strList] = useStructure(1);
  const [techList] = useTechnology(1);
  console.log(strList);
  console.log(techList);
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h3" component="h1"></Typography>
      </Box>
    </Container>
  );
}

export default App;
