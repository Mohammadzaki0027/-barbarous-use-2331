import { Box, Flex, HStack } from "@chakra-ui/react";
import styles from "./Navbar.module.css";
import { FaChevronRight } from "react-icons/fa";
import { useContext } from "react";
import { Apicontext } from "../Api/Score";

function NoTransitionExample() {
  const handleclickrigth=()=>{
    console.log("zki");
  }

  const[data,count]=useContext(Apicontext)
  console.log(data,count);
  const handleclickleft=()=>{
    console.log("zki");
  }
  return (
    <Box className={styles.cor}>
<div className={styles.corolinner} >
<div className={styles.arrow}>
<FaChevronRight onClick={handleclickrigth}></FaChevronRight>
</div>

<div className={styles.coroseldiv}>
this div for score card 
</div>
<div className={styles.arrow}>
<FaChevronRight onClick={handleclickleft}></FaChevronRight>
</div>
</div>
    </Box>
    
  );
}

export default NoTransitionExample;