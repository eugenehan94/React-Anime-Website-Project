import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Search from "./Pages/Search"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
