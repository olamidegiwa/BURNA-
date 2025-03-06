import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Tour from "./pages/Tour/Tour";
import RootLayout from "./LayOut/RootLayout";
import Error from "./pages/Error";
import Preload from "./components/Preload";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="">
      {loading ? (
        <Preload />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RootLayout />} />
            <Route path="/tour" element={<Tour />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
