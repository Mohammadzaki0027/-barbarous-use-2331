import React from "react";
import axios from "axios";
import { createContext } from "react";
export const Apicontext = createContext();

export const Score = ({ children }) => {
  const [data, setData] = React.useState([]);
  const [newsdata, setNewsdata] = React.useState([]);
  const getscoredata = async () => {
    let r = await axios.get(
      `https://api.cricapi.com/v1/currentMatches?apikey=982a0aef-0f5a-4779-86a0-cdb37248ece4&offset=0`
    );

    setData(r.data);

  };

  const getnewsdata = async () => {
    let r = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=0017efb6c49a45938638aee47b0b1d1c`
    );

  //  setNewsdata(r.data);
  };

  React.useEffect(() => {
    //getnewsdata();
  }, []);

  React.useEffect(() => {
    getscoredata()
  }, []);
  return (
    <Apicontext.Provider value={[data, newsdata]}>
      {children}
    </Apicontext.Provider>
  );
};

export default Score;
