import React, { createContext, useState } from "react";
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./components/Home/Home/Home";
import Header from "./components/Home/Header/Header";
import Appointment from "./components/Appointment/Appointment/Appointment";
import NoMatch from "./components/NoMatch/NoMatch";
import Login from "./components/Login/Login/Login";
// import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <BrowserRouter>
        <p>e-mail: {loggedInUser.email}</p>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="header/" element={<Header />} />
          {/* <Route path="appointment/" element={<PrivateRoute><Appointment /></PrivateRoute>} /> */}

          <Route path="appointment/" element={<Appointment />} />
          <Route path="login/" element={<Login />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
