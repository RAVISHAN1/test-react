import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home_1 from "./pages/Home_1";
import Home_2 from "./pages/Home_2/Home_2";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/Home_1" element={<Home_1 />} />
          <Route path="/Home_2" element={<Home_2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
