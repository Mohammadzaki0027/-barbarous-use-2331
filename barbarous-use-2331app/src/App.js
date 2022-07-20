
import './App.css';
import {Box} from "@chakra-ui/react"
import Navbar from './Component/Navbar';
import Allroutes from './Routes/Allroutes';
function App() {
  return (
   <Box border="1px solid red" width="99%" margin="auto" height="100px">

<Navbar></Navbar>
<Allroutes></Allroutes>
    
   </Box>
  );
}

export default App;
