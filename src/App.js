import { Route, Routes } from "react-router-dom";

import "./App.css";
import HomeContainer from "./components/Home/HomeContainer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeContainer />} />
      <Route path="about" element={<p></p>} />
    </Routes>
  );
}

export default App;
