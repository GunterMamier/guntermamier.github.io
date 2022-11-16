import React from "react";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

/* Import pages and add a path for them */
import Home from "./pages/Home.jsx";

/* Functionality for scrolling to the top of the page when routed */
// import ScrollToTop from "./utils/ScrollToTop.jsx";

// import logo from './logo.svg';
// import './App.css';

export default function App() {
  return (
    <Router>
      {/* <ScrollToTop /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="*" element={<NotFound />} />
        <Route exact path="/projections" element={<Projections />} />
        <Route exact path="/scale" element={<Scale />} />
        <Route exact path="/visual" element={<VisualEncoding />} />
        <Route exact path="/thematic" element={<MapTypes />} />
        <Route exact path="/contribute" element={<Contribute />} /> */}
      </Routes>
    </Router>
  );
}
