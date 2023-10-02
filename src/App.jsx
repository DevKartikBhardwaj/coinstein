import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SingleCoin from "./Pages/SingleCoin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<SingleCoin />} />
      </Routes>
    </Router>
  );
}

export default App;
