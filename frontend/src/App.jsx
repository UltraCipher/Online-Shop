import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ProductProvider from "./context/ProductContext";

import Login from "./components/form/Login";
import SignUp from "./components/form/signup";
import Navbar from "./components/navbar/navbar";
import HomePage from "./components/pages/homePage";
import Error404 from "./components/error-404/error";
import Footer from "./components/footer/footer";
import FrequentlyAsked from "./components/frequentlyAsked/frequentlyAsked";
import ProductPage from "./pages/ProductPage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <ProductProvider>
          <Routes>
            <Route exact path="/" element={<HomePage />}></Route>
            <Route path="/products" element={<ProductPage />} />
            <Route path="/products/:id" element={<DetailPage />} />
            <Route exact path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/frequentlyAsked"
              element={<FrequentlyAsked />}
            ></Route>
            <Route exact path="/*" element={<Error404 />}></Route>
          </Routes>
        </ProductProvider>
        <Footer />
      </div>
    </div>
  );
}

export default App;
