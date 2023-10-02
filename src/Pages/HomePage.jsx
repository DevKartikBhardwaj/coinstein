import React from "react";
import { useState } from "react";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Join from "../components/Join";

//styles
import "../style/App.css";
import "../style/Home.css";
import "../style/navbar.css";
import "../style/CryptoPrices.css";
import "../style/about.css";
import "../style/join.css";
import "../style/media.css";

import { MainContext } from "../../Contexts/MainContext";
import CryptoPrices from "../components/CryptoPrices";
import About from "../components/About";
import Footer from "../components/Footer";
const HomePage = () => {
  //global states
  const [coinsData, setCoinsData] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <MainContext.Provider
      value={{ setCoinsData, coinsData, loading, setLoading }}
    >
      <Navbar display="flex" backgroundColor="#7d5dd0" add={true} />
      <Home />
      <CryptoPrices />
      <About />
      <Join />
      <Footer />
    </MainContext.Provider>
  );
};

export default HomePage;
