import React from "react";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import {Typography,Tabs,Tab} from '@material-ui/core'
const Navbar = ({ theKey,setKey }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" component="h1">Age of Empires II Info </Typography>
        <Tabs value={theKey} onChange={(e,newKey)=>setKey(newKey)}>
          <Tab value="civilizations" label="Civilization"></Tab>
          <Tab value="units" label="Units"></Tab>
          <Tab value="structures" label="Structures"></Tab>
          <Tab value="technologies" label="Technologies"></Tab>
        </Tabs>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
