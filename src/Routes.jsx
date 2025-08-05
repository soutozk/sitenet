import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Links from "./pages/Links";
import Help from "./pages/Help/Help";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Links" element={<Links />} />
        <Route path="/Ajuda" element={<Help />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
