import { Box, Container, Flex, HStack,Stack,Select } from '@chakra-ui/react'
import {Link} from "react-router-dom"
import React from 'react'
const link = [

  { to: "/FantacyCenter", element: "FantacyCenter" },
  { to: "/Criclytics", element: "Criclytics" },
  { to: "/Schedule", element: "Schedule" },
  { to: "/Series", element: "Series" },
  { to: "/News", element: "News" },
  { to: "/Video", element: "Video" },
  { to: "/Player", element: "Player" },
  { to: "/Team", element: "Team" },

];
const Navbar = () => {
  return (
  <Box backgroundColor="teal" width="100%">
    <Flex justifyContent="space-around" >
<HStack >
 
  </HStack>
<HStack spacing="40px">
  <Box><img src="https://www.cricket.com/cricket.com.svg" alt="" /></Box>
 {link.map((e)=>(
<Box>
  <Link to={e.to}>{e.element}</Link>
</Box>
 ))}
 <Box>
 <Select placeholder="More" width="55%">
  <option value='option1'>Stadium</option>
  <option value='option2'>Ranking</option>
  <option value='option3'>Archive</option>

  <option value='option2'>Record</option>
  <option value='option3'>Season Fantacy</option>
  <option value='option3'>Profile</option>
</Select>
 </Box>

  
</HStack>





    </Flex>

  </Box>
  )
}

export default Navbar