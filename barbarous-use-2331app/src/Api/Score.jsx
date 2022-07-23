import React from "react";
import axios from "axios";
import { createContext } from "react";
export const Apicontext = createContext();

export const Score = ({ children }) => {
  const [data, setData] = React.useState([]);

  const getscoredata = async () => {
    let r = await axios.get(
      `https://api.cricapi.com/v1/currentMatches?apikey=982a0aef-0f5a-4779-86a0-cdb37248ece4&offset=0`
    );

    setData(r.data);
  };

  React.useEffect(() => {
    getscoredata();
  }, []);
  return <Apicontext.Provider value={[data]}>{children}</Apicontext.Provider>;
};

export default Score;
