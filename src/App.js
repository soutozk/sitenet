import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar.jsx";
import "./App.css";

function App() {
  return (
    <div className="overflow-hidden">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
