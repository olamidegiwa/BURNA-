import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Tour from "./pages/Tour/Tour";
import RootLayout from "./LayOut/RootLayout";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />} />
          <Route path="/tour" element={<Tour />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
