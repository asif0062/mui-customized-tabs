import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Tabs from "./components/tabs/tabs";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tabs" element={<Tabs />} />
    </Routes>
  );
};

export default App;
