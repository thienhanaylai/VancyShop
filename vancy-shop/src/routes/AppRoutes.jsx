import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";

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
              <p>product</p>
            </>
          }
        />
      </Routes>
    </>
  );
}

export default AppRoutes;
