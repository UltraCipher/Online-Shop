import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignUp from "./components/form/SignUp";
import Login from "./components/form/Login";
import Navbar from "./components/navbar/navbar";
import HomePage from "./components/pages/homePage";
import Error404 from "./components/error-404/error";
import Footer from "./components/footer/footer";
import FrequentlyAsked from "./components/frequentlyAsked/frequentlyAsked";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<SignUp />}></Route>
          <Route
            exact
            path="/frequentlyAsked"
            element={<FrequentlyAsked />}
          ></Route>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/*" element={<Error404 />}></Route>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
