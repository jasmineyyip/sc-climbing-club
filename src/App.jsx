import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TripsPage from "./pages/TripsPage";
import MembershipPage from "./pages/MembershipPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/trips" element={<TripsPage />} />
        <Route path="/membership" element={<MembershipPage />} />
      </Routes>
    </Router>
  );
};

export default App;