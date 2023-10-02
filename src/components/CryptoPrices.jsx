import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Rings } from "react-loader-spinner";
import { MainContext } from "../../Contexts/MainContext";
import { Link, useNavigate } from "react-router-dom";
const CryptoPrices = () => {
  const [count, setCount] = useState(1);
  const { coinsData, setCoinsData, setLoading, loading } =
    useContext(MainContext);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchCoinsData = async () => {
      try {
        const fetchedData = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
        );
        setCoinsData(fetchedData.data);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCoinsData();
  }, []);
  return (
    <section id="market">
      <h1 className="mainHeading"># Crypto Market Trends</h1>
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
          <div className="wrap">
            <table cellSpacing={0}>
              <tbody>
                <tr id="headRow">
                  <th style={{ borderTopLeftRadius: "15px" }}>Name</th>
                  <th>Price</th>
                  <th>24hr Change</th>
                  <th style={{ borderTopRightRadius: "15px" }}>Market Cap</th>
                </tr>
              </tbody>

              {coinsData
                .slice((count - 1) * 10, count * 10)
                .map(
                  (
                    {
                      id,
                      name,
                      image,
                      current_price,
                      price_change_percentage_24h,
                      market_cap,
                    },
                    i
                  ) => {
                    return (
                      <tbody key={i} className="priceTableBody">
                        <tr onClick={() => navigate(`/${id}`)}>
                          <td className="imgRow">
                            <img src={image} alt={name} height={"40px"} />
                            {name}
                          </td>
                          <td>${current_price}</td>
                          {price_change_percentage_24h > 0 ? (
                            <td
                              style={{
                                color: "lime",
                                WebkitTextStroke: "black",
                                WebkitTextStrokeWidth: "0.1px",
                              }}
                            >
                              {price_change_percentage_24h}%
                            </td>
                          ) : (
                            <td
                              style={{
                                color: "red",
                                WebkitTextStroke: "black",
                                WebkitTextStrokeWidth: "0.1px",
                              }}
                            >
                              {price_change_percentage_24h}%
                            </td>
                          )}

                          <td>{market_cap}</td>
                        </tr>
                      </tbody>
                    );
                  }
                )}
            </table>
          </div>
          <div className="navigationBtnWrapper">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((element, i) => {
              return (
                <button
                  className="navigationBtn"
                  key={i}
                  onClick={() => setCount(element)}
                >
                  {element}
                </button>
              );
            })}
          </div>
        </>
      )}
    </section>
  );
};

export default CryptoPrices;
