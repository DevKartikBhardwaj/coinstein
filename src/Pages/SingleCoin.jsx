import Navbar from "../components/Navbar";
import SingleCoinDescription from "../components/SingleCoinDescription";
import SingleCoinGraph from "../components/SingleCoinGraph";
import "../style/singlecoin.css";
const SingleCoin = () => {
  return (
    <div className="singleCoin">
      <Navbar display="none" backgroundColor="#082675" add={false} />
      <div className="SingleCoinWrapper">
        <SingleCoinDescription />
        <SingleCoinGraph />
      </div>
    </div>
  );
};

export default SingleCoin;
