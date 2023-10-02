import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useParams } from "react-router-dom";
import { Rings } from "react-loader-spinner";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SingleCoinGraph = () => {
  const [graphData, setGraphData] = useState({});
  const { id } = useParams();
  const [days, setDays] = useState(1);
  const [loading, setLoading] = useState(true);

  const labels = [];
  const values = [];
  graphData.prices &&
    graphData.prices.map((elem) => {
      days === 1
        ? labels.push(new Date(elem[0]).toTimeString().slice(0, 9))
        : labels.push(new Date(elem[0]).toDateString().slice(4, 16));
      values.push(elem[1]);
    });

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Crypto History Price Chart",
      },
      legend: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        data: values,
        label: `$ `,
        borderColor: "#a8d5fd",
        backgroundColor: "#a8d5fd",
      },
    ],
  };

  useEffect(() => {
    const fetchGraphData = async () => {
      try {
        const data = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`
        );
        setGraphData(data.data);
        setLoading(false);
      } catch (error) {
        alert(error.msg);
        console.error(error);
      }
    };
    fetchGraphData();
  }, [days]);

  return (
    <div className="singleCoinGraph">
      {/* graph */}
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
        <Line options={options} data={data} />
      )}
      {/* buttons */}
      <div className="graphButtonWrapper">
        <button onClick={() => setDays(1)} className="graphButtons">
          1 Day
        </button>
        <button onClick={() => setDays(7)} className="graphButtons">
          7 Days
        </button>
        <button onClick={() => setDays(15)} className="graphButtons">
          15 Days
        </button>
        <button onClick={() => setDays(30)} className="graphButtons">
          1 Month
        </button>
        <button onClick={() => setDays(265)} className="graphButtons">
          1 Year
        </button>
      </div>
    </div>
  );
};

export default SingleCoinGraph;
