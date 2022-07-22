import { Box, Flex, HStack } from "@chakra-ui/react";
import styles from "./Navbar.module.css";
import { FaChevronRight } from "react-icons/fa";
import { MdAddLocationAlt } from "react-icons/md";
import { useContext } from "react";
import { Apicontext } from "../Api/Score";
import React from "react";
function NoTransitionExample() {
  const [col, setCol] = React.useState(0);

  const [data, newsdata] = useContext(Apicontext);

  const handleclickrigth = () => {
    if (col !== 0) {
      setCol((col) => col - 1);
    }
  };
  console.log(col);
  const handleclickleft = () => {
    if (col !== 3) {
      setCol((col) => col + 1);
    }
  };

  return (
    <Box className={styles.cor}>
      <div className={styles.corolinner}>
        <div className={styles.arrow}>
          <FaChevronRight
            onClick={handleclickrigth}
            className={styles.icon}
          ></FaChevronRight>
        </div>

        <div className={styles.coroseldiv}>
          {data.data ? <h1>{data.data[col].name}</h1> : ""}
          {data.data ? <h1>{data.data[col].venue}</h1> : ""}
          {data.data ? <h2>{data.data[col].score[0].inning}</h2> : ""}

          {data.data ? (
            <h2>
              {data.data[col].score[0].r +
                "/" +
                data.data[col].score[0].w +
                " " +
                data.data[col].score[0].o +
                "  Overs"}{" "}
            </h2>
          ) : (
            ""
          )}

          {data.data ? <h2>{data.data[col].score[1].inning}</h2> : ""}

          {data.data ? (
            <h2>
              {data.data[col].score[1].r +
                "/" +
                data.data[col].score[1].w +
                " " +
                data.data[col].score[1].o +
                "  Overs"}{" "}
            </h2>
          ) : (
            ""
          )}

          {data.data ? <h2>{data.data[col].status}</h2> : ""}
        </div>
        <div className={styles.arrow}>
          <FaChevronRight
            onClick={handleclickleft}
            className={styles.icon}
          ></FaChevronRight>
        </div>
      </div>
    </Box>
  );
}

export default NoTransitionExample;
