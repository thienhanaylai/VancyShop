import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ProductPage from "../pages/ProductsPage";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/about"
          element={
            <>
              <AboutPage />
            </>
          }
        />
        <Route
          path="/product"
          element={
            <>
              <ProductPage />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <p
                style={{
                  padding: "100px",
                  textAlign: "center",
                  fontWeight: "700",
                  fontFamily: "Arial",
                }}
              >
                Comming Soon ...
              </p>
            </>
          }
        />
      </Routes>
    </>
  );
}

export default AppRoutes;
