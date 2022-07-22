import React from "react";
import { useContext } from "react";
import { Apicontext } from "../Api/Score";
import { FaChevronRight } from "react-icons/fa";
import { Box, Flex } from "@chakra-ui/react";
import styles from "../Styles/Navbar.module.css";

const Newsdata = () => {
  const data = useContext(Apicontext);

  return (
    <Box className={styles.newsbox}>
      <Box className={styles.heading}>
        <h1>News And Articles</h1>
        <FaChevronRight></FaChevronRight>
      </Box>
    </Box>
  );
};

export default Newsdata;
