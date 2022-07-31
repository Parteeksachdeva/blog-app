import { Route, Routes } from "react-router-dom";

import "./App.css";
import HomeContainer from "./components/Home/HomeContainer";
import PostContainer from "./components/Post/PostContainer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeContainer />} />
      <Route path="/post/:postId" element={<PostContainer />} />
    </Routes>
  );
}

export default App;
