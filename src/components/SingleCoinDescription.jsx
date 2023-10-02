import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Rings } from "react-loader-spinner";
import DOMPurify from "dompurify";
const SingleCoinDescription = () => {
  const [loading, setLoading] = useState(true);
  const [coinData, setCoinData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const singleCoinData = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${id}`
        );
        setCoinData(singleCoinData.data);
        setLoading(false);
      } catch (error) {
        alert(error.msg);
        setLoading(true);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="singleCoinDescription">
      {loading ? (
        <div
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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
        </div>
      ) : (
        <>
          <img src={coinData.image.large} alt="" />
          <h1>{coinData.name}</h1>
          <h2>Rank: #{coinData.market_cap_rank}</h2>
          <p
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(
                coinData.description.en.split(". ")[0] +
                  ". " +
                  coinData.description.en.split(". ")[1] +
                  "."
                // coinData.description.en.split(". ")[0]
                // .concat(coinData.description.en.split(".")[1])
              ),
            }}
          ></p>
        </>
      )}
    </div>
  );
};

export default SingleCoinDescription;
