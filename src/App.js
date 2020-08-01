import React from "react";
import { Box, Typography, Container } from "@material-ui/core";
function App() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h3" component="h1">
          AOE2 API
        </Typography>
      </Box>
    </Container>
  );
}

export default App;
