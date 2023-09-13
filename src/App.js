import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/error404";
function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videop/:userId" element={<Explore />} />
          <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
