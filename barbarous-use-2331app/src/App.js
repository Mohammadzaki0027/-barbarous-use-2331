import "./App.css";
import { Box } from "@chakra-ui/react";
import Navbar from "./Component/Navbar";
import Allroutes from "./Routes/Allroutes";
import Footers from "./Component/Footers";
import Newsdata from "./Component/Newsdata";

import React from "react";


function App() {

  return (
    <Box border="1px solid red" width="99%" margin="auto" height="100px">
      <Navbar></Navbar>
      <Allroutes></Allroutes>


    </Box>
  );
}

export default App;
