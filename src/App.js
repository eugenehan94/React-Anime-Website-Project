import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Search from "./Pages/Search"
import Manga from "./Pages/Manga"
import Error from "./Pages/Error"
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/manga" element={<Manga/>} />
        <Route path="*" element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
