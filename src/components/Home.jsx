import React, { useContext } from "react";
import { Rings } from "react-loader-spinner";
import ether from "../assets/images/ether.png";
import bitcoin from "../assets/images/bitcoin.png";
import coinstein from "../assets/images/coinsteinhome.png";
import { MainContext } from "../../Contexts/MainContext";

const Home = () => {
  const { loading, coinsData } = useContext(MainContext);
  return (
    <section className="homeSection" id="home">
      <div className="homeLeft">
        <div className="homeLeft-content-wrapper">
          <p className="home-main-heading">
            <img
              src={bitcoin}
              alt="bitcoin image"
              className="floatingImg floatingImg1"
            />
            Empowering Decisions By Providing Real-Time Cryptocurrency Data
          </p>
          <p className="home-sub-heading">
            Bitcoin | Dodge coin | Ether{" "}
            <img
              src={ether}
              alt="ether image"
              className="floatingImg floatingImg2"
            />{" "}
          </p>
        </div>

        {loading ? (
          <Rings
            height="80"
            width="80"
            color="white"
            radius="6"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="rings-loading"
          />
        ) : (
          <div className="topCoins">
            {coinsData.slice(0, 3).map((element, i) => {
              return (
                <CoinCard
                  name={element.name}
                  img={element.image}
                  price={element.current_price}
                  percentagePriceChange={element.price_change_percentage_24h}
                  key={i}
                />
              );
            })}
          </div>
        )}
      </div>
      <div className="homeRight">
        <img src={coinstein} alt="Coinstein Logo Image" className="homeImg" />
      </div>
    </section>
  );
};

const CoinCard = ({ name, img, price, percentagePriceChange }) => {
  return (
    <div className="coinCard">
      <img src={img} alt={name} />
      <h3>
        {name}
        {percentagePriceChange > 0 ? (
          <span style={{ color: "green" }}>
            {" "}
            {percentagePriceChange.toFixed(2)}%
          </span>
        ) : (
          <span style={{ color: "red" }}>
            {" "}
            {percentagePriceChange.toFixed(2)}%
          </span>
        )}
      </h3>
      <h6>$ {price}</h6>
    </div>
  );
};

export default Home;
