import React from "react";
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./components/Home/Home/Home";
import Header from "./components/Home/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="header/" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
