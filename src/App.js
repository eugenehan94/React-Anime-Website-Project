import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Search from "./Pages/Search"
import Manga from "./Pages/Manga"
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/manga" element={<Manga/>} />
        {/* Integrate a page not found */}
      </Routes>
    </div>
  );
}

export default App;
