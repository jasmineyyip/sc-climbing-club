import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ValuesPage from "./pages/ValuesPage";
import MembershipPage from "./pages/MembershipPage";
import TripsPage from "./pages/TripsPage";
import CompTeamPage from "./pages/CompTeamPage";
import PracticePage from "./pages/PracticePage";
import ResourcesPage from "./pages/ResourcesPage";
import FAQPage from "./pages/FAQPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/values" element={<ValuesPage />} />
        <Route path="/membership" element={<MembershipPage />} />
        <Route path="/trips" element={<TripsPage />} />
        <Route path="/comp-team" element={<CompTeamPage />} />
        <Route path="/practice" element={<PracticePage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
    </Router>
  );
};

export default App;