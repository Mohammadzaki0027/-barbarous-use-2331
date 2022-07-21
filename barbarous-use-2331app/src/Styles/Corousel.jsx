import { Box, Flex, HStack } from "@chakra-ui/react";
import styles from "./Navbar.module.css";
import { FaChevronRight } from "react-icons/fa";
import { useContext } from "react";
import { Apicontext } from "../Api/Score";
import React from "react";
function NoTransitionExample() {
const[col,setCol]=React.useState(0)
  
  const[data,newsdata]=useContext(Apicontext)
  console.log(data.data,"scoredata");
  
  const handleclickrigth=()=>{
    if(col!==0)
    {
      setCol((col)=>col-1)
    }

  }
console.log(col)
  const handleclickleft=()=>{
    if(col!==3)
    {
      setCol((col)=>col+1)
    }
   
  }
  return (
    <Box className={styles.cor}>
<div className={styles.corolinner} >
<div className={styles.arrow}>
<FaChevronRight onClick={handleclickrigth} ></FaChevronRight>
</div>

<div className={styles.coroseldiv}>
<h1>{data.data[col].name}</h1>
<h1>{data.data[col].venue}</h1>
</div>
<div className={styles.arrow}>
<FaChevronRight onClick={handleclickleft}></FaChevronRight>
</div>
</div>
    </Box>
    
  );
}

export default NoTransitionExample;