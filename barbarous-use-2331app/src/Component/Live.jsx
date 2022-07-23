import React from "react";
import { useContext } from "react";
import { Apicontext } from "../Api/Score";
import Styles from "../Styles/Navbar.module.css";
import axios from "axios";
import Footers from "./Footers";
import { Box } from "@chakra-ui/react";
const Live = () => {
  const [data] = useContext(Apicontext);

  const [matches, setMatches] = React.useState([]);

  const getdata = async () => {
    let r = await axios(
      `https://api.cricapi.com/v1/series?apikey=982a0aef-0f5a-4779-86a0-cdb37248ece4&offset=0`
    );
    console.log(r.data.data);
    setMatches(r.data.data);
  };

  React.useEffect(() => {
    getdata();
  }, []);

  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <Box width="100%" margin="auto" marginTop="20px">
        <Box width="100%" backgroundColor="#172132" height="50px">
          <h1
            style={{
              color: "white",
              fontFamily: "cursive",
              paddingTop: "10px",
              paddingLeft: "10px",
              fontWeight: "bold",
            }}
          >
            Completed
          </h1>
        </Box>
        <div className={Styles.matchdiv}>
          {data.data?.map((e) => (
            <div className={Styles.griddiv}>
              <div className={Styles.griditem}>
                <h1>{e.name}</h1>
              </div>
              <div className={Styles.griditem}>
                <h2>{e.score[0].inning}</h2>
              </div>

              <div className={Styles.griditem}>
                <h2>
                  {e.score[0].r +
                    "/" +
                    e.score[0].w +
                    " " +
                    e.score[0].o +
                    "  Overs"}{" "}
                </h2>
              </div>
              <div className={Styles.griditem}>
                <h2>{e.score[1].inning}</h2>
              </div>

              <div className={Styles.griditem}>
                <h2>
                  {e.score[1].r +
                    "/" +
                    e.score[1].w +
                    " " +
                    e.score[1].o +
                    "  Overs"}{" "}
                </h2>
              </div>

              <div className={Styles.griditem}>
                <h1>{e.status}</h1>
              </div>
            </div>
          ))}
        </div>
        <Box
          width="100%"
          backgroundColor="#172132"
          height="50px"
          marginTop="20px"
        >
          <h1
            style={{
              color: "white",
              fontFamily: "cursive",
              paddingTop: "10px",
              paddingLeft: "10px",
              fontWeight: "bold",
            }}
          >
            Upcoming
          </h1>
        </Box>

        <div className={Styles.matchdiv}>
          {matches?.map((e) => (
            <div className={Styles.griddiv} key={e.id}>
              <div>
                <h1>{e.name}</h1>
              </div>
              <div>
                <h3>{e.matches}</h3>
              </div>
              <div>
                <h3> Start: {e.startDate}</h3>
              </div>
              <div>
                <h3>End: {e.endDate}</h3>
              </div>
              <div>
                <h3>
                  Odi: {e.odi} Test:{e.test} T20:{e.t20}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </Box>
      <Footers></Footers>
    </div>
  );
};

export default Live;
