import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Links from "./pages/Links";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Links" element={<Links />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
