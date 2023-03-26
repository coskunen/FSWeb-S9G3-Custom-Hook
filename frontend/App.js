import React, { useState, useEffect } from "react";
import useLocalStorage from "./hooks/localStorageKullan";
import useGeceModu from "./hooks/geceModuAc";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

const App = () => {
  const [coinData, setCoinData] = useState([]);
 // const [geceModu, setGeceModu] = useState(false);
 const [geceModu, setGeceModu] = useGeceModu(false);
/*   const [geceModu, setGeceModu] = useLocalStorage("geceModu", false)
  const [userInf, setUserInf] = useLocalStorage("loggedInUse" , {
    userName : "yok",
    userEmail : "dfsdf@dfds.com"
  }); */
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className={geceModu ? "dark-mode App" : "App"}>
      <Navbar geceModu={geceModu} setGeceModu={setGeceModu} />
     {/*  {userInf.userName}
      {userInf.userEmail} */}
      <Charts coinData={coinData} />
    </div>
  );
};

export default App;
